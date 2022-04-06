import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AddTodoItem from "./components/AddTodoItem";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "create an app", key: 1 },
    { text: "play cricket", key: 2 },
    { text: "call your friend", key: 3 },
  ]);

  const [nextKey, setNextKey] = useState(todos[todos.length-1].key+1);

  const addTodo = (text) => {
    setTodos([
      {
        text: text,
        key: nextKey,
      },
      ...todos,
    ]);
    setNextKey(nextKey+1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoItem addTodo={addTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
