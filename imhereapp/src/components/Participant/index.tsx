import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";




export default function Participant() {
  return (
    <View style={styles.container}>
    <Text style={styles.name}>
    Luma Góes Montes 
    </Text>
    <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}
