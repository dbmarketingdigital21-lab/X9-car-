
import React from 'react';
import DataTable from '../components/DataTable';
import { marcasData } from '../data/mockData';
import { Marca } from '../types';

const Marcas: React.FC = () => {
  const columns = [
    { header: 'ID', accessor: 'id' as keyof Marca },
    { header: 'Nome', accessor: 'nome' as keyof Marca },
  ];

  return <DataTable<Marca> columns={columns} data={marcasData} title="Marcas" />;
};

export default Marcas;
