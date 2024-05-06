import { Header } from "@/components/Header";
import { Container, Content, Icon } from "./styles";
import { Button } from "@/components/Button";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@/storage/group/groupCreate";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew(){
    try {
      if(group === '') return Alert.alert('Digite o nome da turma');
      await groupCreate(group);
      navigation.navigate('players', { group })
    } catch (error) {
      Alert.alert('Não foi possível criar a turma');      
    }
  }

  return (
    <Container>
      <Header showBackButton/>
      <Content>
        <Icon />
        <Highlight 
          title="Nova turma" 
          subtitle="Crie uma turma para pessoas"
        />
        <Input 
          placeholder="Digite a turma" 
          onChangeText={setGroup}
        />
        <Button 
        title="Criar" style={{marginTop: 20}}
        onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
