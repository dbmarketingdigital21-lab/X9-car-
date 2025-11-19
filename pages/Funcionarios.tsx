
import React from 'react';
import DataTable from '../components/DataTable';
import { funcionariosData } from '../data/mockData';
import { Funcionario } from '../types';

const Funcionarios: React.FC = () => {
  const columns = [
    { header: 'ID', accessor: 'id' as keyof Funcionario },
    { header: 'Nome', accessor: 'nome' as keyof Funcionario },
    { header: 'Cargo', accessor: 'cargo' as keyof Funcionario },
    { header: 'Telefone', accessor: 'telefone' as keyof Funcionario },
    { header: 'Email', accessor: 'email' as keyof Funcionario },
  ];

  return <DataTable<Funcionario> columns={columns} data={funcionariosData} title="Funcionários" />;
};

export default Funcionarios;
