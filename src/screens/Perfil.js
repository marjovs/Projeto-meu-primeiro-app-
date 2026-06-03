import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Perfil({ route, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Bem-vindo, {route.params.nome}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />

    </View>
  );
}