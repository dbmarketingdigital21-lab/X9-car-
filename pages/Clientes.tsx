
import React from 'react';
import DataTable from '../components/DataTable';
import { clientesData } from '../data/mockData';
import { Cliente } from '../types';

const Clientes: React.FC = () => {
  const columns = [
    { header: 'ID', accessor: 'id' as keyof Cliente },
    { header: 'Nome', accessor: 'nome' as keyof Cliente },
    { header: 'Telefone', accessor: 'telefone' as keyof Cliente },
    { header: 'Email', accessor: 'email' as keyof Cliente },
    { header: 'Endereço', accessor: 'endereco' as keyof Cliente },
  ];

  return <DataTable<Cliente> columns={columns} data={clientesData} title="Clientes" />;
};

export default Clientes;
