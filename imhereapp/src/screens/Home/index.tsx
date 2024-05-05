import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Participant from "../../components/Participant";

export default function Home() {
  function handleAddParticipant() {
    console.log("Adicionar participante");
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
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddParticipant}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />

      <StatusBar style="auto" />
    </View>
  );
}
