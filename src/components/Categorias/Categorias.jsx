import React from 'react';
import { Link } from 'react-router-dom';
import './Categorias.css';


function Categorias() {
  return (
    <div id="divCategorias" className="list-group">
      <Link to="/product/tv" id="tv" className="list-group-item list-group-item-action">TVs</Link>
      <Link to="/product/eletrodomestico" id="eletro" className="list-group-item list-group-item-action">Eletrodomésticos</Link>
      <Link to="/product/videogame" id="videogame" className="list-group-item list-group-item-action">Videogames</Link>
      <Link to="/product/celular" id="celular" className="list-group-item list-group-item-action">Celulares</Link>
    </div>
  );
}

export default Categorias;
