import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@/@types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, "groups">;
};

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Cadastrar turma" onPress={handleNewGroup} />
    </Container>
  );
}
