import React, { Component } from 'react';
import './MenuSuperior.css';

import logo from './logo.png';

class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} height="30" className="d-inline-block align-top" alt="" />
          Loja de Eletrônicos Naja
        </a>
        <form className="form-inline">
          <button type="button" className="btn btn-outline-light">Novo Produto</button>
        </form>
      </nav>
    );
  }
}

export default MenuSuperior;
