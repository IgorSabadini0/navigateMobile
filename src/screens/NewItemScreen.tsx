import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/HomeStack';
import type { Item } from '../types';

type Props = NativeStackScreenProps<HomeStackParamList, 'NewItem'> & {
  adicionarItem: (item: Item) => void;
};

export default function NewItemScreen({ navigation, adicionarItem }: Props) {
  const [nome, setNome] = useState('');
  const [professor, setProfessor] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleSalvar() {
    if (nome.trim() === '') return; // validação mínima: nome obrigatório

    const novoItem: Item = {
      id: Date.now(), // gera um id único a partir do timestamp
      nome: nome.trim(),
      professor: professor.trim() || '—',
      descricao: descricao.trim() || 'Sem descrição',
    };

    adicionarItem(novoItem);
    navigation.goBack(); // volta para a Home com a lista atualizada
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Item</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: React Native"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Professor</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Maurício"
        value={professor}
        onChangeText={setProfessor}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Descreva o item"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 14, color: '#999', marginTop: 8 },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
});