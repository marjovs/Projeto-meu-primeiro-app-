import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TaskItem({ tarefa, remover }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      marginVertical: 5
    }}>
      <Text>{tarefa}</Text>

      <TouchableOpacity onPress={remover}>
        <Text style={{ color: 'red' }}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}