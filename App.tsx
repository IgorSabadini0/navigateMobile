import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigation/TabNavigator';
import type { Item } from './src/types';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Dados iniciais — a lista começa com 3 itens fixos
const itensIniciais: Item[] = [
  { id: 1, nome: 'React Native', professor: 'Maurício', descricao: 'Apps mobile com JS e TypeScript' },
  { id: 2, nome: 'Expo', professor: 'Maurício', descricao: 'Ferramentas para React Native' },
  { id: 3, nome: 'TypeScript', professor: 'Maurício', descricao: 'Tipagem estática para JavaScript' },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [itens, setItens] = useState<Item[]>(itensIniciais);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Função que as telas usam para acrescentar itens à lista
  function adicionarItem(item: Item) {
    setItens((lista) => [...lista, item]);
  }

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              onLogin={() =>
                props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Main' }],
                })
              }
            />
          )}
        </Stack.Screen>

        {/* Main agora recebe itens e adicionarItem via props */}
        <Stack.Screen name="Main">
          {() => <TabNavigator itens={itens} adicionarItem={adicionarItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}