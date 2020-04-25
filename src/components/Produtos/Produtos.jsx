import React from 'react';

const tvs = ['TV Samsung', 'TV Philips', 'TV Lenovo'];
const celulares = ['iPhone X', 'Samsung A50', 'Moto G8', 'Redmi Note 8'];
const eletrodomesticos = ['exemplo1', 'exemplo2', 'exemplo3'];
const videogames = ['nitendo', 'ps1', 'ps2', 'xbox'];

export default function Produtos(categoria) {

    let produtos = null;

    switch(categoria) {
        case 'tvs': produtos = tvs; break;
        case 'celulares': produtos = celulares; break;
        case 'eletrodomesticos': produtos = eletrodomesticos; break;
        case 'videogames': produtos = videogames; break;
        default: produtos = []; break;
    }

    const ul = document.createElement('ul');
    for (let i = 0; i < produtos.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = tvs[i];
      ul.appendChild(li);
    }

    return (
            <ul>
                {produtos.map((item) => (<li>{item}</li>))}
            </ul> 
    )
}