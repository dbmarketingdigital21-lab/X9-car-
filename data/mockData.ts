import { Funcionario, Cliente, Marca, Modelo, Venda } from '../types';

export const funcionariosData: Funcionario[] = [
  { id: 1, nome: 'João Silva', cargo: 'Gerente de Vendas', telefone: '(11) 98765-4321', email: 'joao.silva@x9car.com' },
  { id: 2, nome: 'Maria Oliveira', cargo: 'Vendedora', telefone: '(11) 91234-5678', email: 'maria.oliveira@x9car.com' },
  { id: 3, nome: 'Carlos Pereira', cargo: 'Mecânico Chefe', telefone: '(11) 95555-4444', email: 'carlos.pereira@x9car.com' },
  { id: 4, nome: 'Ricardo Souza', cargo: 'Vendedor', telefone: '(11) 98888-1111', email: 'ricardo.souza@x9car.com' },
  { id: 5, nome: 'Patricia Lima', cargo: 'Recepcionista', telefone: '(11) 97777-2222', email: 'patricia.lima@x9car.com' },
  { id: 6, nome: 'Fernando Costa', cargo: 'Gerente de Pós-Venda', telefone: '(11) 96666-3333', email: 'fernando.costa@x9car.com' },
  { id: 7, nome: 'Amanda Gomes', cargo: 'Analista Financeiro', telefone: '(11) 95555-4444', email: 'amanda.gomes@x9car.com' },
  { id: 8, nome: 'Lucas Martins', cargo: 'Mecânico', telefone: '(11) 94444-5555', email: 'lucas.martins@x9car.com' },
  { id: 9, nome: 'Juliana Alves', cargo: 'Assistente Administrativo', telefone: '(11) 93333-6666', email: 'juliana.alves@x9car.com' },
  { id: 10, nome: 'Bruno Ferreira', cargo: 'Vendedor Júnior', telefone: '(11) 92222-7777', email: 'bruno.ferreira@x9car.com' },
];

export const clientesData: Cliente[] = [
  { id: 1, nome: 'Ana Souza', telefone: '(21) 99999-8888', email: 'ana.souza@email.com', endereco: 'Rua das Flores, 123' },
  { id: 2, nome: 'Pedro Costa', telefone: '(31) 98888-7777', email: 'pedro.costa@email.com', endereco: 'Avenida Principal, 456' },
  { id: 3, nome: 'Beatriz Lima', telefone: '(41) 97777-6666', email: 'beatriz.lima@email.com', endereco: 'Praça Central, 789' },
  { id: 4, nome: 'Marcos Rocha', telefone: '(51) 96666-5555', email: 'marcos.rocha@email.com', endereco: 'Rua das Palmeiras, 101' },
  { id: 5, nome: 'Gabriela Dias', telefone: '(61) 95555-4444', email: 'gabriela.dias@email.com', endereco: 'Avenida do Sol, 202' },
  { id: 6, nome: 'Felipe Almeida', telefone: '(71) 94444-3333', email: 'felipe.almeida@email.com', endereco: 'Travessa da Lua, 303' },
  { id: 7, nome: 'Larissa Barbosa', telefone: '(81) 93333-2222', email: 'larissa.barbosa@email.com', endereco: 'Praça da Estrela, 404' },
  { id: 8, nome: 'Rafael Ribeiro', telefone: '(91) 92222-1111', email: 'rafael.ribeiro@email.com', endereco: 'Rua do Mar, 505' },
  { id: 9, nome: 'Camila Castro', telefone: '(27) 91111-0000', email: 'camila.castro@email.com', endereco: 'Avenida da Montanha, 606' },
  { id: 10, nome: 'Diego Nogueira', telefone: '(32) 90000-9999', email: 'diego.nogueira@email.com', endereco: 'Alameda dos Rios, 707' },
];

export const marcasData: Marca[] = [
  { id: 1, nome: 'Toyota' },
  { id: 2, nome: 'Honda' },
  { id: 3, nome: 'Ford' },
  { id: 4, nome: 'Chevrolet' },
  { id: 5, nome: 'Volkswagen' },
  { id: 6, nome: 'Hyundai' },
  { id: 7, nome: 'Nissan' },
  { id: 8, nome: 'Jeep' },
  { id: 9, nome: 'Fiat' },
  { id: 10, nome: 'Renault' },
];

export const modelosData: Modelo[] = [
  { id: 1, marcaId: 1, nome: 'Corolla', ano: 2023, preco: 150000.00 },
  { id: 2, marcaId: 1, nome: 'Hilux', ano: 2023, preco: 220000.00 },
  { id: 3, marcaId: 2, nome: 'Civic', ano: 2024, preco: 165000.00 },
  { id: 4, marcaId: 3, nome: 'Mustang', ano: 2022, preco: 350000.00 },
  { id: 5, marcaId: 4, nome: 'Onix', ano: 2024, preco: 85000.00 },
  { id: 6, marcaId: 5, nome: 'Gol', ano: 2023, preco: 75000.00 },
  { id: 7, marcaId: 6, nome: 'Creta', ano: 2024, preco: 135000.00 },
  { id: 8, marcaId: 7, nome: 'Kicks', ano: 2023, preco: 120000.00 },
  { id: 9, marcaId: 8, nome: 'Renegade', ano: 2024, preco: 140000.00 },
  { id: 10, marcaId: 9, nome: 'Argo', ano: 2023, preco: 80000.00 },
];

export const vendasData: Venda[] = [
  { id: 1, clienteId: 1, funcionarioId: 2, modeloId: 1, data_venda: '2024-07-15', valor: 150000.00 },
  { id: 2, clienteId: 2, funcionarioId: 1, modeloId: 3, data_venda: '2024-07-18', valor: 165000.00 },
  { id: 3, clienteId: 3, funcionarioId: 2, modeloId: 5, data_venda: '2024-07-20', valor: 85000.00 },
  { id: 4, clienteId: 4, funcionarioId: 4, modeloId: 6, data_venda: '2024-07-21', valor: 75000.00 },
  { id: 5, clienteId: 5, funcionarioId: 2, modeloId: 7, data_venda: '2024-07-22', valor: 135000.00 },
  { id: 6, clienteId: 6, funcionarioId: 10, modeloId: 9, data_venda: '2024-07-23', valor: 140000.00 },
  { id: 7, clienteId: 7, funcionarioId: 4, modeloId: 10, data_venda: '2024-07-24', valor: 80000.00 },
  { id: 8, clienteId: 1, funcionarioId: 2, modeloId: 8, data_venda: '2024-07-25', valor: 120000.00 },
  { id: 9, clienteId: 8, funcionarioId: 1, modeloId: 2, data_venda: '2024-07-26', valor: 220000.00 },
  { id: 10, clienteId: 9, funcionarioId: 1, modeloId: 4, data_venda: '2024-07-27', valor: 350000.00 },
];
