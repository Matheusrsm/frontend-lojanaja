import React from 'react';
import { connect } from 'react-redux';
import Cards from '../Cards';

function ListaProdutos({ produtos }) {
  return (
    <div><ul>{produtos.map((item) => (<li><Cards produto={item} /></li>))}</ul></div>

  );
}

export default connect((state) => ({ produtos: state }))(ListaProdutos);
