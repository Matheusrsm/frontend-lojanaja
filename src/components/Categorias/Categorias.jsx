import React from 'react';
import './Categorias.css';

export default function Categorias() {
  const tvs = ['TV Samsung', 'TV Philips', 'TV Lenovo'];

  function exibeProdutos() {
    const ul = document.createElement('ul');
    for (let i = 0; i < tvs.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = tvs[i];
      ul.appendChild(li);
    }
    const categorias = document.getElementById('divCategorias');
    categorias.append(ul);
  }

  return (
    <div id="divCategorias" className="list-group">
      <h5>Categorias</h5>
      <button onClick={exibeProdutos} type="button" className="list-group-item list-group-item-action">TVs</button>
      <button type="button" className="list-group-item list-group-item-action">Eletrodomésticos</button>
      <button type="button" className="list-group-item list-group-item-action">Videogames</button>
      <button type="button" className="list-group-item list-group-item-action">Celulares</button>
    </div>
  );
}
