import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import type { Item } from '../types';
import ConsultaCnpjScreen from '../screens/ConsultaCnpjScreen';
import ConsultaCepScreen from '../screens/ConsultaCepScreen';

export type TabParamList = {
  HomeTab: undefined;
  Profile: undefined;
  Settings: undefined;
  ConsultaCnpj: undefined;
  ConsultaCep: undefined;
};

interface Props {
  itens: Item[];
  adicionarItem: (item: Item) => void;
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator({ itens, adicionarItem }: Props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Profile') iconName = 'person';
          if (route.name === 'Settings') iconName = 'settings';
          if (route.name === 'ConsultaCnpj') iconName = 'business';
          if (route.name === 'ConsultaCep') iconName = 'location';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen name="HomeTab" options={{ tabBarLabel: 'Início', headerShown: false }}>
        {() => <HomeStack itens={itens} adicionarItem={adicionarItem} />}
      </Tab.Screen>

      <Tab.Screen name="Profile" options={{ tabBarLabel: 'Perfil' }}>
        {() => <ProfileScreen itens={itens} />}
      </Tab.Screen>

      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Configurações' }} />

      <Tab.Screen
        name="ConsultaCnpj" 
        component={ConsultaCnpjScreen}
        options={{ tabBarLabel: 'CNPJ' }}
      />

      <Tab.Screen
        name="ConsultaCep" 
        component={ConsultaCepScreen}
        options={{ tabBarLabel: 'CEP' }}
      />

    </Tab.Navigator>
  );
}