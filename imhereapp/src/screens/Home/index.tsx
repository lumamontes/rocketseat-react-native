import { styles } from "./styles";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";
import { useState } from "react";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleAddParticipant() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante já adicionado", `${participantName} já está na lista de presença`);
    }

    setParticipants([...participants, participantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name} da lista de presença?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipants(participants.filter(participant => participant !== name));
          Alert.alert("Participante removido", `${name} foi removida da lista de presença`)
        }
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento!</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddParticipant}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    <FlatList
      data={participants}
      showsVerticalScrollIndicator={false}
      renderItem={
        ({item}) => <Participant name={item} onRemove={() => handleRemoveParticipant(item)}/>
      }
      keyExtractor={(item) => item}
      ListEmptyComponent={() => 
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>}
    />
    </View>
  );
}
