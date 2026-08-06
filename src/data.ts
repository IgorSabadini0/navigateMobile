export type Person = {
  id: number;
  nome: string;
  profissao: string;
  descricao: string;
};

export const data: Person[] = [
  { id: 1, nome: "Igor", profissao: "Marceneiro", descricao: "Cabelo Preto" },
  { id: 2, nome: "Marcos", profissao: "Pipoqueiro", descricao: "Alto" }
];