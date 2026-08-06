import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';
import { usePeople } from '../context/PeopleContext';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export default function DetailsScreen({ navigation, route }: Props) {

  const { itemId } = route.params;
  const { people } = usePeople();

  const pessoa = people.find((item) => item.id === itemId);

  if (!pessoa) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item não encontrado!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />

      <Text style={styles.title}>Nome: {pessoa.nome}</Text>
      <Text style={styles.subtitle}>Id: {pessoa.id}</Text>
      <Text style={styles.subtitle}>Profissão: {pessoa.profissao}</Text>
      <Text style={styles.description}>Descrição: {pessoa.descricao}</Text>

      <Text style={styles.button} onPress={() => navigation.navigate('Home')}>Voltar</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  titleBorder: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 20
  },
  subtitle: { fontSize: 16, color: '#666' },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  description: { fontSize: 16, color: '#666', textAlign: 'center' }
});