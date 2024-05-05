import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Props = {
  countCreatedTasks: number;
  countCompletedTasks: number;
};

export default function TasksHeader({ countCreatedTasks, countCompletedTasks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, styles.blue]}>Criadas</Text>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{countCreatedTasks}</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={[styles.title, styles.purple]}>Concluídas</Text>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{countCompletedTasks}</Text>
        </View>
      </View>
    </View>
  );
}
