import { CepInfo } from './cep';
import { CnpjInfo } from './cnpj';

const BASE_URL_CNPJ = 'https://www.receitaws.com.br/v1/cnpj';

const BASE_URL_CEP = 'https://viacep.com.br/ws/';

export async function buscarCnpj(cnpj: string): Promise<CnpjInfo> {
  const res = await fetch(`${BASE_URL_CNPJ}/${cnpj}`);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

export async function buscarCep(cep: string): Promise<CepInfo> {
  const res = await fetch(`${BASE_URL_CEP}/${cep}/json`);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}