import React from 'react';
import { connect } from 'react-redux';
import Cards from '../Cards/index';
import logo from '../../assets/logo.png';

function ListaProdutos({ produtos }) {
  return (
    <div>{produtos.map((item) => (<Cards foto={logo} nomeProduto={item} />))}</div>
    
  );
}

export default connect((state) => ({ produtos: state }))(ListaProdutos);
