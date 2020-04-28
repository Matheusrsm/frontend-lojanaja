import React from 'react';

import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';
import CriarProduto from '../../components/CriarProduto/index';

import './style.css';

function NovoProduto() {
  return (
    <>
      <MenuSuperior />
      <div>
        <CriarProduto />
      </div>
    </>
  );
}
export default NovoProduto;
