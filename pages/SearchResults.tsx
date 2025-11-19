
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DataTable from '../components/DataTable';
import { funcionariosData, clientesData, marcasData, modelosData } from '../data/mockData';
import { Funcionario, Cliente, Marca, ModeloDetalhado } from '../types';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [filteredFuncionarios, setFilteredFuncionarios] = useState<Funcionario[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>([]);
  const [filteredMarcas, setFilteredMarcas] = useState<Marca[]>([]);
  const [filteredModelos, setFilteredModelos] = useState<ModeloDetalhado[]>([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();

      // Filter Funcionarios
      setFilteredFuncionarios(
        funcionariosData.filter(f =>
          f.nome.toLowerCase().includes(lowerCaseQuery) ||
          f.cargo.toLowerCase().includes(lowerCaseQuery) ||
          f.email.toLowerCase().includes(lowerCaseQuery)
        )
      );

      // Filter Clientes
      setFilteredClientes(
        clientesData.filter(c =>
          c.nome.toLowerCase().includes(lowerCaseQuery) ||
          c.email.toLowerCase().includes(lowerCaseQuery) ||
          c.endereco.toLowerCase().includes(lowerCaseQuery)
        )
      );
      
      // Filter Marcas
      setFilteredMarcas(
          marcasData.filter(m => 
              m.nome.toLowerCase().includes(lowerCaseQuery)
          )
      );

      // Filter Modelos
      const modelosComMarca = modelosData.map(modelo => {
        const marca = marcasData.find(m => m.id === modelo.marcaId);
        return {
          ...modelo,
          marcaNome: marca ? marca.nome : 'Desconhecida',
        };
      });

      setFilteredModelos(
        modelosComMarca.filter(m =>
          m.nome.toLowerCase().includes(lowerCaseQuery) ||
          m.marcaNome.toLowerCase().includes(lowerCaseQuery) ||
          String(m.ano).includes(lowerCaseQuery)
        )
      );
    } else {
        setFilteredFuncionarios([]);
        setFilteredClientes([]);
        setFilteredMarcas([]);
        setFilteredModelos([]);
    }
  }, [query]);
  
  const funcionarioColumns = [
    { header: 'Nome', accessor: 'nome' as keyof Funcionario },
    { header: 'Cargo', accessor: 'cargo' as keyof Funcionario },
    { header: 'Email', accessor: 'email' as keyof Funcionario },
  ];
  const clienteColumns = [
    { header: 'Nome', accessor: 'nome' as keyof Cliente },
    { header: 'Email', accessor: 'email' as keyof Cliente },
    { header: 'Endereço', accessor: 'endereco' as keyof Cliente },
  ];
  const marcaColumns = [
    { header: 'Nome', accessor: 'nome' as keyof Marca },
  ];
  const modeloColumns = [
    { header: 'Modelo', accessor: 'nome' as keyof ModeloDetalhado },
    { header: 'Marca', accessor: 'marcaNome' as keyof ModeloDetalhado },
    { header: 'Ano', accessor: 'ano' as keyof ModeloDetalhado },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Resultados da busca por: <span className="text-green-600">"{query}"</span>
      </h1>

      {filteredFuncionarios.length > 0 && (
        <DataTable<Funcionario> columns={funcionarioColumns} data={filteredFuncionarios} title="Funcionários Encontrados" />
      )}
      {filteredClientes.length > 0 && (
        <DataTable<Cliente> columns={clienteColumns} data={filteredClientes} title="Clientes Encontrados" />
      )}
      {filteredMarcas.length > 0 && (
        <DataTable<Marca> columns={marcaColumns} data={filteredMarcas} title="Marcas Encontradas" />
      )}
      {filteredModelos.length > 0 && (
         <DataTable<any> columns={modeloColumns} data={filteredModelos.map(m => ({ ...m, preco: `R$ ${m.preco.toLocaleString('pt-BR')}`}))} title="Modelos Encontrados" />
      )}
      
      {filteredFuncionarios.length === 0 && filteredClientes.length === 0 && filteredMarcas.length === 0 && filteredModelos.length === 0 && (
          <div className="bg-white dark:bg-gray-800 text-center p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Nenhum resultado encontrado para sua busca.</p>
          </div>
      )}
    </div>
  );
};

export default SearchResults;
