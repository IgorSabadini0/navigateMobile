import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function handleLogin() {
    if (user === 'admin' && pass === '123456') {
      onLogin();
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Ionicons name="lock-closed" size={48} color="#6C63FF" style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={pass}
        onChangeText={setPass}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 24,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
  },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8, marginTop: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});