
import React from 'react';
import DataTable from '../components/DataTable';
import { vendasData, clientesData, funcionariosData, modelosData, marcasData } from '../data/mockData';
import { VendaDetalhada } from '../types';

const Vendas: React.FC = () => {
  const vendasDetalhadas = vendasData.map(venda => {
    const cliente = clientesData.find(c => c.id === venda.clienteId);
    const funcionario = funcionariosData.find(f => f.id === venda.funcionarioId);
    const modelo = modelosData.find(m => m.id === venda.modeloId);
    const marca = modelo ? marcasData.find(ma => ma.id === modelo.marcaId) : undefined;
    
    return {
      ...venda,
      clienteNome: cliente ? cliente.nome : 'N/A',
      funcionarioNome: funcionario ? funcionario.nome : 'N/A',
      modeloNome: modelo ? modelo.nome : 'N/A',
      marcaNome: marca ? marca.nome : 'N/A',
      valor: `R$ ${venda.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    };
  });

  const columns = [
    { header: 'ID Venda', accessor: 'id' as keyof VendaDetalhada },
    { header: 'Cliente', accessor: 'clienteNome' as keyof VendaDetalhada },
    { header: 'Vendedor', accessor: 'funcionarioNome' as keyof VendaDetalhada },
    { header: 'Veículo', accessor: 'modeloNome' as keyof VendaDetalhada },
    { header: 'Marca', accessor: 'marcaNome' as keyof VendaDetalhada },
    { header: 'Data', accessor: 'data_venda' as keyof VendaDetalhada },
    { header: 'Valor', accessor: 'valor' as keyof VendaDetalhada },
  ];

  return <DataTable<any> columns={columns} data={vendasDetalhadas} title="Vendas Realizadas" />;
};

export default Vendas;
