import React, { Component } from "react";
import './Categorias.css'

class Categorias extends Component {
    render() {
        return (
            <div class="list-group">
                <h5>Categorias</h5>
                <button type="button" class="list-group-item list-group-item-action">TVs</button>
                <button type="button" class="list-group-item list-group-item-action">Eletrodomésticos</button>
                <button type="button" class="list-group-item list-group-item-action">Videogames</button>
                <button type="button" class="list-group-item list-group-item-action">Celulares</button>
            </div>
        )
    }
}

export default Categorias;