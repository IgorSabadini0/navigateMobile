import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export default function DetailsScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.info}>Item ID: {route.params.itemId}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  info: { fontSize: 18, color: '#666', marginVertical: 24 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});