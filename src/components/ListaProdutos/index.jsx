import React from 'react';
import { connect } from 'react-redux';
// import './styles.css';

function ListaProdutos({ produtos }) {
  return (
    <>
      <ul>
        {produtos.map((item) => (<li>{item}</li>))}
      </ul>
    </>
  );
}

export default connect((state) => ({ produtos: state }))(ListaProdutos);
