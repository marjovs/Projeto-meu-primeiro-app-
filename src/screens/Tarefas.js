import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

import TaskItem from '../components/TaskItem';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (tarefa.trim() === '') return;

    setLista([...lista, tarefa]);
    setTarefa('');
  }

  function remover(item) {
    setLista(lista.filter(t => t !== item));
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>Lista de Tarefas</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.contador}>
          Total de tarefas: {lista.length}
        </Text>

        <FlatList
          data={lista}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TaskItem
              tarefa={item}
              remover={() => remover(item)}
            />
          )}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: 20
  },

  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  contador: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});