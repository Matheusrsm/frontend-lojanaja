import React from 'react';
import { connect } from 'react-redux';
import Cards from '../Cards';

import './styles.css';

function ListaProdutos({ produtos }) {
  return (
    <div>
      <ul className="container-produtos">
        {produtos.map((item) => (
          <li>
            <Cards key={item.product_code} produto={item} />
          </li>
        ))}
      </ul>

    </div>

  );
}

export default connect((state) => ({ produtos: state }))(ListaProdutos);
