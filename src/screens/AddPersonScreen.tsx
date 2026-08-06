import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStack';
import { data } from "../data";

type Props = NativeStackScreenProps<HomeStackParamList, 'AddPerson'>; // necessário para acessar os parâmetros da rota


export default function AddPersonScreen({ route, navigation }: Props) {
    const [nome, setNome] = useState('');
    const [profissao, setProfissao] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSave = () => {
        // 1. Lógica para salvar os dados (ex: enviar para API ou estado global)

        // verificar o maior id existente no array de dados e depois incrementar 1 para o novo id
        const maxId = data.reduce((max, item) => (item.id > max ? item.id : max), 0);
        const newId = maxId + 1;

        const newPerson = { id: newId, nome, profissao, descricao };

        // Lógica para adicionar a nova pessoa ao array de dados (ex: enviar para API ou estado global)
        data.push(newPerson); // Adiciona a nova pessoa ao array de dados, por usar o .push adiciona ao final do array

        console.log('Dados a salvar:', newPerson);

        // 2. Exibir mensagem de sucesso
        alert('Pessoa adicionada com sucesso!');

        // 3. Volta para a tela anterior após salvar
        navigation.goBack();
    };

    return (<KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Nova Pessoa</Text>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    placeholder="Ex: João da Silva"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Profissão</Text>
                <TextInput
                    placeholder="Ex: Desenvolvedor"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={profissao}
                    onChangeText={setProfissao}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    placeholder="Breve resumo..."
                    placeholderTextColor="#999"
                    style={[styles.input, styles.textArea]}
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSave} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#fff',
        height: 48,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        height: 100,
        paddingTop: 12,
    },
    button: {
        backgroundColor: '#6C63FF',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});