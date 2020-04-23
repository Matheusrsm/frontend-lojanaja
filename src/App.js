import React from 'react';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Categorias from './components/Categorias/Categorias';
import Login from './pages/Login';

import './App.css'

function App() {
  return (
    <div>
      <MenuSuperior/>
      <Login/>
      <Categorias/>
    </div>
  );
}

export default App;
