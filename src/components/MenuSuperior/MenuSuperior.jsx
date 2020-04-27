import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuSuperior.css';

import logo from '../../assets/logo.png';

class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/product">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/newProduct"> 
          <div id="botaoAddProduto" class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off">Adicionar Produto</input>
            </label>
          </div>
        </Link>
      </nav>
    );
  }
}

export default MenuSuperior;
