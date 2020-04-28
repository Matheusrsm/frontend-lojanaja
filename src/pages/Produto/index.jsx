import React from 'react';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';
import ListaProdutos from '../../components/ListaProdutos/index';

import './styles.css';

function Produto() {
  return (
    <>
      <MenuSuperior />
      <div id="paginaProduto">
        <Categorias />
        <ListaProdutos />
      </div>
    </>
  );
}
export default Produto;
