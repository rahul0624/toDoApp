import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodoItem = ({addTodo}) => {
  const [text, setText] = useState('');

  const updateTodo = () =>{
      addTodo(text);
  }

  return (
    <View>
      <Text style={styles.label}>Add ToDo</Text>
      <TextInput
        style={styles.item}
        placeholder="todo"
        onChangeText={(e) => setText(e)}
      />
      <Button style={styles.button} onPress={updateTodo} title="Add"/>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  label: {
      fontSize: 24,
  },
});

export default AddTodoItem;