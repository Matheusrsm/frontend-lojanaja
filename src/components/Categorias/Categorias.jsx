import React from 'react';
import './Categorias.css';
import Produtos from '../Produtos/Produtos'

export default function Categorias() {

  return (
    <div id="divCategorias" className="list-group">
      <button onClick={Produtos('tvs')} type="button" className="list-group-item list-group-item-action">TVs</button>
      <button type="button" className="list-group-item list-group-item-action">Eletrodomésticos</button>
      <button type="button" className="list-group-item list-group-item-action">Videogames</button>
      <button type="button" className="list-group-item list-group-item-action">Celulares</button>
    </div>
  );
}