
export interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
}

export interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
}

export interface Marca {
  id: number;
  nome: string;
}

export interface Modelo {
  id: number;
  marcaId: number;
  nome: string;
  ano: number;
  preco: number;
}

export interface ModeloDetalhado extends Modelo {
  marcaNome: string;
}

export interface Venda {
  id: number;
  clienteId: number;
  funcionarioId: number;
  modeloId: number;
  data_venda: string;
  valor: number;
}

export interface VendaDetalhada extends Venda {
    clienteNome: string;
    funcionarioNome: string;
    modeloNome: string;
    marcaNome: string;
}
