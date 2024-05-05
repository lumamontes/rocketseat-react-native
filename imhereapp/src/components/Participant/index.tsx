import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


type Props = {
    name: string;
    onRemove: () => void;
}

export default function Participant({name, onRemove}: Props) {
  return (
    <View style={styles.container}>
    <Text style={styles.name}>
        {name}
    </Text>
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={onRemove}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}
