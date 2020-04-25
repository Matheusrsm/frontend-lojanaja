import React, { Component } from 'react';
import './MenuSuperior.css';

import logo from '../../assets/logo.png';

class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="" href="/">
          <img id="logo" src={logo} alt="logo" />
        </a>
      </nav>
    );
  }
}

export default MenuSuperior;
