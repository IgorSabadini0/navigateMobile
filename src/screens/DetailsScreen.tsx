import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export default function DetailsScreen({ navigation, route }: Props) {
  const { item } = route.params; // agora recebe o objeto inteiro

  return (
    <View style={styles.container}>
      <Ionicons
        name="information-circle-outline"
        size={64}
        color="#6C63FF"
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.title}>{item.nome}</Text>

      <Text style={styles.label}>Professor</Text>
      <Text style={styles.value}>{item.professor}</Text>

      <Text style={styles.label}>Descrição</Text>
      <Text style={styles.value}>{item.descricao}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 14, color: '#999', marginTop: 12 },
  value: { fontSize: 18, color: '#333', marginTop: 4 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8, marginTop: 24 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});