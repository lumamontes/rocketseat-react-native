import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";
import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@/@types/navigation";
import { groupsGetAll } from "@/storage/group/groupGetAll";
import { useFocusEffect } from "@react-navigation/native";
import { Loading } from "@/components/Loading";

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, "groups">;
};

export function Groups({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups(){
    try {
      setLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
    } finally {
      setLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    console.log(group);
    navigation.navigate("players", { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }
  , []));

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      {loading ? <Loading /> : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={
            ({ item }) => 
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          }
          contentContainerStyle={groups.length == 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Cadastrar turma" onPress={handleNewGroup} />
    </Container>
  );
}
