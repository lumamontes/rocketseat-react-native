import { styles } from "./styles";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Task from "../../components/Task";
import TasksHeader from "../../components/TasksHeader";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleAddTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert("Tarefa já adicionada");
    }
    setTasks([...tasks, taskName]);
    setCountCreatedTasks(countCreatedTasks + 1);
    setTaskName("");
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Remover Tarefa", `Deseja remover tarefa?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter((task) => task !== name));
          setCountCreatedTasks(countCreatedTasks - 1);
          if (completedTasks.includes(name)) {
            setCompletedTasks(completedTasks.filter((task) => task !== name));
            setCountCompletedTasks(countCompletedTasks - 1);
          }
        },
      },
    ]);
  }

  function handleCompleteTask(name: string) {
    if (completedTasks.includes(name)) {
      setCompletedTasks(completedTasks.filter((task) => task !== name));
      setCountCompletedTasks(countCompletedTasks - 1);
      return;
    }
    setCompletedTasks([...completedTasks, name]);
    setCountCompletedTasks(countCompletedTasks + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          🌌 to<Text style={styles.titlehighlight}>do</Text>
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddTask}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.tasksHeaderContainer}>
            <TasksHeader
              countCreatedTasks={countCreatedTasks}
              countCompletedTasks={countCompletedTasks}
            />
          </View>
        )}
        renderItem={({ item }) => (
          <Task
            name={item}
            onRemove={() => handleRemoveTask(item)}
            onCompleted={() => handleCompleteTask(item)}
          />
        )}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Image source={require("../../../assets/Clipboard.png")} />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptySubtext}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
