import { Header } from "@/components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
  group: string;
}

export function Players() {

  const route = useRoute();
  const { group  } = route.params as RouteParams;

  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["Luma", "Lorena", "Larissa"]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <ButtonIcon name="add" />
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
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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
      <Button title="Remover turma" type="secondary" />
      {/* <Filter title="Time A" /> */}
    </Container>
  );
}
