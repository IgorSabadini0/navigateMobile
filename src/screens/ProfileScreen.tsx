import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>Aluno: Mauricio</Text>
      <Text style={styles.text}>Disciplina: Mobile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#444', marginTop: 4 },
});