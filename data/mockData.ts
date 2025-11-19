
import { Funcionario, Cliente, Marca, Modelo, Venda } from '../types';

export const funcionariosData: Funcionario[] = [
  { id: 1, nome: 'João Silva', cargo: 'Gerente de Vendas', telefone: '(11) 98765-4321', email: 'joao.silva@x9car.com' },
  { id: 2, nome: 'Maria Oliveira', cargo: 'Vendedora', telefone: '(11) 91234-5678', email: 'maria.oliveira@x9car.com' },
  { id: 3, nome: 'Carlos Pereira', cargo: 'Mecânico Chefe', telefone: '(11) 95555-4444', email: 'carlos.pereira@x9car.com' },
];

export const clientesData: Cliente[] = [
  { id: 1, nome: 'Ana Souza', telefone: '(21) 99999-8888', email: 'ana.souza@email.com', endereco: 'Rua das Flores, 123' },
  { id: 2, nome: 'Pedro Costa', telefone: '(31) 98888-7777', email: 'pedro.costa@email.com', endereco: 'Avenida Principal, 456' },
  { id: 3, nome: 'Beatriz Lima', telefone: '(41) 97777-6666', email: 'beatriz.lima@email.com', endereco: 'Praça Central, 789' },
];

export const marcasData: Marca[] = [
  { id: 1, nome: 'Toyota' },
  { id: 2, nome: 'Honda' },
  { id: 3, nome: 'Ford' },
  { id: 4, nome: 'Chevrolet' },
];

export const modelosData: Modelo[] = [
  { id: 1, marcaId: 1, nome: 'Corolla', ano: 2023, preco: 150000.00 },
  { id: 2, marcaId: 1, nome: 'Hilux', ano: 2023, preco: 220000.00 },
  { id: 3, marcaId: 2, nome: 'Civic', ano: 2024, preco: 165000.00 },
  { id: 4, marcaId: 3, nome: 'Mustang', ano: 2022, preco: 350000.00 },
  { id: 5, marcaId: 4, nome: 'Onix', ano: 2024, preco: 85000.00 },
];

export const vendasData: Venda[] = [
  { id: 1, clienteId: 1, funcionarioId: 2, modeloId: 1, data_venda: '2024-07-15', valor: 150000.00 },
  { id: 2, clienteId: 2, funcionarioId: 1, modeloId: 3, data_venda: '2024-07-18', valor: 165000.00 },
  { id: 3, clienteId: 3, funcionarioId: 2, modeloId: 5, data_venda: '2024-07-20', valor: 85000.00 },
];
