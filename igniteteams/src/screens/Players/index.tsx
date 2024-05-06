import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { Header } from "@/components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@/utils/AppError";
import { playerAddByGroup } from "@/storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@/storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@/storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@/storage/group/groupRemoveByName";
import { Loading } from "@/components/Loading";

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const { group } = route.params as RouteParams;

  const [loading, setLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length == 0) {
      return Alert.alert("Nova pessoa", "Digite o nome da pessoa");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      Keyboard.dismiss();

      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar a pessoa");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível carregar os jogadores");
    } finally {
      setLoading(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa");
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover turma", "Não foi possível remover a turma");
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja realmente remover essa turma?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: async () => await groupRemove(),
      },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          autoCapitalize="none"
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon name="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
        />
      </HeaderList>
      <NumbersOfPlayers>{players.length} jogadores</NumbersOfPlayers>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {
              paddingBottom: 100,
            },
            players.length == 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        title="Remover turma"
        type="secondary"
        onPress={handleGroupRemove}
      />
    </Container>
  );
}
