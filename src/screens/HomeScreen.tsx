import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';
import { data } from "../data";
import { usePeople } from '../context/PeopleContext';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {

  const { people } = usePeople(); // Sempre atualizado!

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Ionicons name="home-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Bem-vindo ao app!</Text>
        <Text style={styles.subtitle}>Nenhuma pessoa cadastrada até o momento</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details', { itemId: 42 })}
        >
          <Text style={styles.buttonText}>Cadastrar uma nova pessoa</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            {/* Redirecionamento enviando itemId clicado na rota "Details" */}
            <TouchableOpacity onPress={() => navigation.navigate('Details', { itemId: item.id },)}>
              <Text style={styles.titleBorder}>{item.nome}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddPerson')}><AntDesign name="plus-circle" size={48} color="#6C63FF" style={styles.buttonAdd} /></TouchableOpacity>
    </View>
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
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  buttonAdd: { marginTop: 16, marginBottom: 24 },
  text: { fontSize: 16, color: '#666', marginTop: 24, marginBottom: 18 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});