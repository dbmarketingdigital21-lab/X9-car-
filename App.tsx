
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Funcionarios from './pages/Funcionarios';
import Clientes from './pages/Clientes';
import Marcas from './pages/Marcas';
import Modelos from './pages/Modelos';
import Vendas from './pages/Vendas';
import SearchResults from './pages/SearchResults';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="funcionarios" element={<Funcionarios />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="marcas" element={<Marcas />} />
          <Route path="modelos" element={<Modelos />} />
          <Route path="vendas" element={<Vendas />} />
          <Route path="search" element={<SearchResults />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
