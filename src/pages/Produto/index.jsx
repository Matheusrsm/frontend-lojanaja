import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Categorias from '../../components/Categorias/Categorias';
import Produtos from '../../components/Produtos/Produtos';
import MenuSuperior from '../../components/MenuSuperior/MenuSuperior';

import './styles.css';
import isLogged from '../../middlewares/auth';

export default function Produto() {
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
        <Categorias />
        <Produtos categoria="tvs" />
      </div>
    </>
  );
}
