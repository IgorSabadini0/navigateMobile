import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import NewItemScreen from '../screens/NewItemScreen';
import type { Item } from '../types';

// A rota Details agora recebe o objeto inteiro, não só o id
export type HomeStackParamList = {
  Home: undefined;
  Details: { item: Item };
  NewItem: undefined;
};

interface Props {
  itens: Item[];
  adicionarItem: (item: Item) => void;
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack({ itens, adicionarItem }: Props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {(props) => (
          <HomeScreen {...props} itens={itens} adicionarItem={adicionarItem} />
        )}
      </Stack.Screen>

      {/* Details não precisa de props extras — usa só route.params */}
      <Stack.Screen name="Details" component={DetailsScreen} />

      <Stack.Screen name="NewItem">
        {(props) => <NewItemScreen {...props} adicionarItem={adicionarItem} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}