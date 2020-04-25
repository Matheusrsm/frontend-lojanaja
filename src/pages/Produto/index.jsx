import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import Categorias from '../../components/Categorias/Categorias';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';
import ListaProdutos from '../../components/ListaProdutos/index';

import './styles.css';
import store from '../../store';
import isLogged from '../../middlewares/auth';

function Produto() {
  const history = useHistory();

  useEffect(() => {
    isLogged().then((res) => {
      if (!res) history.push('/');
    });
  });

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