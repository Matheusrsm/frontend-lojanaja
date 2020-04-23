import React, { Component } from "react";
import './MenuSuperior.css';

class MenuSuperior extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark">
                <a class="navbar-brand" href="/">
                    <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Loja de Eletrônicos Naja
                </a>
                <form class="form-inline">
                <button type="button" class="btn btn-outline-light">Novo Produto</button>
                </form>
            </nav>
        )
    }
}

export default MenuSuperior;