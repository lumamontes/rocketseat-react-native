import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
type Props = {
  name: string;
  onRemove: () => void;
  onCompleted: () => void;
};

export default function Task({ name, onRemove, onCompleted }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleToggleCompleteTask() {
    setIsCompleted(!isCompleted);
    onCompleted();
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleToggleCompleteTask}
        style={isCompleted ? styles.checkboxCompleted : styles.checkbox}
      >
        {isCompleted && (
            <Text style={styles.checkedText}>✓</Text>
        )}
      </Pressable>

      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onRemove}
        style={styles.button}
      >
        <FontAwesome name="trash-o" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
