import React from 'react';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';

import './styles.css';

export default function Produto() {
  const produtos = ['Tv samsung', 'tv philips', 'tv outra'];

  return (
    <>
      <MenuSuperior />
      <div className="container">
        <Categorias />
        <ul>
          {produtos.map((item) => (
            <li>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
