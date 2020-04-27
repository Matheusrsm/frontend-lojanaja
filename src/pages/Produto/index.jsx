import React from 'react';
import { Provider } from 'react-redux';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';
import ListaProdutos from '../../components/ListaProdutos/index';

import './styles.css';
import store from '../../store';

function Produto() {
  return (
    <>
      <MenuSuperior />
      <div className="container">
        <Provider store={store}>
          <Categorias />
          <ListaProdutos />
        </Provider>
      </div>
    </>
  );
}
export default Produto;
