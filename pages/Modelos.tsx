
import React from 'react';
import DataTable from '../components/DataTable';
import { modelosData, marcasData } from '../data/mockData';
import { ModeloDetalhado } from '../types';

const Modelos: React.FC = () => {
  const modelosComMarca = modelosData.map(modelo => {
    const marca = marcasData.find(m => m.id === modelo.marcaId);
    return {
      ...modelo,
      marcaNome: marca ? marca.nome : 'Desconhecida',
      preco: `R$ ${modelo.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    };
  });

  const columns = [
    { header: 'ID', accessor: 'id' as keyof ModeloDetalhado },
    { header: 'Modelo', accessor: 'nome' as keyof ModeloDetalhado },
    { header: 'Marca', accessor: 'marcaNome' as keyof ModeloDetalhado },
    { header: 'Ano', accessor: 'ano' as keyof ModeloDetalhado },
    { header: 'Preço', accessor: 'preco' as keyof ModeloDetalhado },
  ];

  return <DataTable<any> columns={columns} data={modelosComMarca} title="Modelos" />;
};

export default Modelos;
