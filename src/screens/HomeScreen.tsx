import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';
import type { Item } from '../types';

// Props do navegador + props extras vindas do App
type Props = NativeStackScreenProps<HomeStackParamList, 'Home'> & {
  itens: Item[];
  adicionarItem: (item: Item) => void;
};

export default function HomeScreen({ navigation, itens }: Props) {
  function renderItem({ item }: { item: Item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Details', { item })}
      >
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardSubtitle}>{item.professor}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* FlatList substitui o View estático */}
      <FlatList
        data={itens}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Botão flutuante para adicionar novo item */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewItem')}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16, paddingBottom: 96 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardSubtitle: { fontSize: 14, color: '#888', marginTop: 4 },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: '#6C63FF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});