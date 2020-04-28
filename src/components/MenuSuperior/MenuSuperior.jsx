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
          <button type="button" class="btn btn-light">Adicionar Produto</button>
        </Link>
      </nav>
    );
  }
}

export default MenuSuperior;
