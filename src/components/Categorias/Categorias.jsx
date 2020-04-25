import React from 'react';
import './Categorias.css';

import { connect } from 'react-redux';
import actionsProdutos from '../../store/actions';

function Categorias({ dispatch }) {
  return (
    <div id="divCategorias" className="list-group">
      <button id="tv" onClick={() => dispatch(actionsProdutos('tv'))} type="button" className="list-group-item list-group-item-action">TVs</button>
      <button id="eletro" onClick={() => dispatch(actionsProdutos('eletrodomesticos'))} type="button" className="list-group-item list-group-item-action">Eletrodomésticos</button>
      <button id="videogame" onClick={() => dispatch(actionsProdutos('videogame'))} type="button" className="list-group-item list-group-item-action">Videogames</button>
      <button id="celular" onClick={() => dispatch(actionsProdutos('celular'))} type="button" className="list-group-item list-group-item-action">Celulares</button>
    </div>
  );
}

export default connect((state) => ({ produtos: state }))(Categorias);
