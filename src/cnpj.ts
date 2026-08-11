export interface CnpjInfo {
  cnpj: string;
  nome: string;
  fantasia: string;
  abertura: string;
  situacao: string;
  atividade_principal: { code: string; text: string }[];
  logradouro: string;
  numero: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone: string;
  email: string;
}