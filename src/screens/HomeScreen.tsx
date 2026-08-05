import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';


type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const data: { id: number, nome: string, profissao: string, descricao: string }[] = [
  { id: 1, nome: "Igor", profissao: "Marceneiro", descricao: "Bonito e gostoso" }, // usando nome como título principal
  { id: 2, nome: "Marcos", profissao: "Pipoqueiro", descricao: "Alto e arrumadinho" }
];

export default function HomeScreen({ navigation }: Props) {

  if (data.length == 0) {
    return (
      <View style={styles.container}>
        <Ionicons name="home-outline" size={64} color="#6C63FF" style={{ marginBottom: 16 }} />
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Bem-vindo ao app!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details', { itemId: 42 })}
        >
          <Text style={styles.buttonText}>Ir para Detalhes</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate}>
              <Text style={styles.titleBorder}>{item.nome}</Text>
            </TouchableOpacity>
          </View>
        )} />
      </View>
    )
  }
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
    marginBottom: 15
  },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});