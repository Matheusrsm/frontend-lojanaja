import React, { Component } from "react";
import './Categorias.css'

class Categorias extends Component { 
    render() {
        return (
            <div id="divCategorias" className="list-group">
                <h5>Categorias</h5>
                <button id="botaoTVs" onClick={exibeProdutos} type="button" className="list-group-item list-group-item-action">TVs</button>
                <button type="button" className="list-group-item list-group-item-action">Eletrodomésticos</button>
                <button type="button" className="list-group-item list-group-item-action">Videogames</button>
                <button type="button" className="list-group-item list-group-item-action">Celulares</button>
            </div>
        )
    }

    
}

var tvs = ["TV Samsung", "TV Philips", "TV Lenovo"];

function exibeProdutos() {
    var ul = document.createElement("ul");
    for (var i = 0; i < tvs.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = tvs[i];
        ul.appendChild(li);
    }
    var categorias = document.getElementById("divCategorias");
    categorias.append(ul);
}


export default Categorias;