import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        Menu Principal
      </Text>

      <Button title="Lista de Tarefas" onPress={() => navigation.navigate('Tarefas')} />
      <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      <Button title="API Usuários" onPress={() => navigation.navigate('Usuarios')} />

    </View>
  );
}