import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();

  function handleLogout() {
    // Esta tela está dentro da Tab. Para chegar no Stack raiz (onde está o Login):
    // getParent() → TabNavigator | getParent() → RootStack
   navigation.getParent()?.reset({
    index: 0,
    routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.text}>Versão do app: 1.0.0</Text>
      <Text style={styles.text}>Desenvolvido com React Native + Expo</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#444', marginTop: 4 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8, marginTop: 24 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});