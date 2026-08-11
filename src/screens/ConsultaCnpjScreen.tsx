import { useState } from 'react';
import {
  View, Text, TextInput, Button, ActivityIndicator,
  Alert, ScrollView, StyleSheet
} from 'react-native';
import { buscarCnpj } from '../api';
import { CnpjInfo } from '../cnpj';

export default function ConsultaCnpjScreen() {
  const [cnpj, setCnpj] = useState<string>('');
  const [dados, setDados] = useState<CnpjInfo | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  async function consultar(): Promise<void> {
    const limpo = cnpj.replace(/\D/g, '');
    if (limpo.length !== 14) {
      Alert.alert('Atenção', 'Digite um CNPJ com 14 dígitos.');
      return;
    }
    try {
      setCarregando(true);
      setDados(await buscarCnpj(limpo));
    } catch {
      Alert.alert('Erro', 'Não foi possível consultar o CNPJ.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Consulta CNPJ</Text>

      <TextInput
        placeholder="00.000.000/0000-00"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button
        title={carregando ? 'Consultando...' : 'Consultar'}
        onPress={consultar}
        disabled={carregando}
      />

      {carregando && <ActivityIndicator style={styles.loading} size="large" />}

      {dados && (
        <View style={styles.card}>
          <Text style={styles.nome}>{dados.nome}</Text>
          {!!dados.fantasia && <Text style={styles.fantasia}>{dados.fantasia}</Text>}
          <Text>CNPJ: {dados.cnpj}</Text>
          <Text>Situação: {dados.situacao}</Text>
          <Text>Abertura: {dados.abertura}</Text>
          <Text>Atividade: {dados.atividade_principal?.[0]?.text ?? '—'}</Text>
          <Text>
            Endereço: {dados.logradouro}, {dados.numero} - {dados.municipio}/{dados.uf}
          </Text>
          <Text>CEP: {dados.cep}</Text>
          {!!dados.telefone && <Text>Telefone: {dados.telefone}</Text>}
          {!!dados.email && <Text>E-mail: {dados.email}</Text>}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, marginBottom: 12, fontSize: 16
  },
  loading: { marginTop: 24 },
  card: {
    backgroundColor: '#f5f5f5', borderRadius: 8,
    padding: 16, marginTop: 16
  },
  nome: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  fantasia: { fontSize: 15, color: '#555', marginBottom: 8 }
});