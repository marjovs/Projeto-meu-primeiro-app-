import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import Home from './src/screens/Home';
import Tarefas from './src/screens/Tarefas';
import Cadastro from './src/screens/cadastro';
import Usuarios from './src/screens/Usuarios';
import Perfil from './src/screens/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.card}>

          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#007bff' },
              headerTintColor: '#fff'
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tarefas" component={Tarefas} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Usuarios" component={Usuarios} />
            <Stack.Screen name="Perfil" component={Perfil} />
          </Stack.Navigator>

        </View>
      </View>
    </NavigationContainer>
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
    maxWidth: 500,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd'
  }
});