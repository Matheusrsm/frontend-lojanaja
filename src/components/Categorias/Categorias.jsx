import React from 'react';
import './Categorias.css';


function Categorias() {
  return (
    <div id="divCategorias" className="list-group">
      <button id="tv" type="button" className="list-group-item list-group-item-action">TVs</button>
      <button id="eletro" type="button" className="list-group-item list-group-item-action">Eletrodomésticos</button>
      <button id="videogame" type="button" className="list-group-item list-group-item-action">Videogames</button>
      <button id="celular" type="button" className="list-group-item list-group-item-action">Celulares</button>
    </div>
  );
}

export default Categorias;
