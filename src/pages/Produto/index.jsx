import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';
import ListaProdutos from '../../components/ListaProdutos/index';

import './styles.css';

function Produto() {
  const match = useRouteMatch();
  const { category } = match.params;

  return (
    <>
      <MenuSuperior />
      <div className="container">
        <Categorias />
        <ListaProdutos category={category} />
      </div>
    </>
  );
}
export default Produto;
