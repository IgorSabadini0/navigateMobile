import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddPersonScreen from '../screens/AddPersonScreen';

export type HomeStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  AddPerson: undefined; // Indica que não é necessário parâmetros para acesar essa rota.
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddPerson" component={AddPersonScreen} />
    </Stack.Navigator>
  );
}