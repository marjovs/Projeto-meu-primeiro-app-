import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [msg, setMsg] = useState('');

  function cadastrar() {
    if (nome === '' || Number(idade) <= 0) {
      setMsg('Erro nos dados');
      return;
    }

    setMsg(`Bem-vindo ${nome}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          onChangeText={setIdade}
          keyboardType="numeric"
        />

        <Button title="Cadastrar" onPress={cadastrar} />

        <Text style={styles.msg}>{msg}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center'
  },

  card: {
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 500 : '100%',
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

  msg: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});