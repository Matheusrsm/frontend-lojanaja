import React from 'react';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';

import './styles.css';

export default function Produto() {
  
  return (
    <>
      <MenuSuperior />
      <div className="container">
        <Categorias />
      </div>
    </>
  );
}
