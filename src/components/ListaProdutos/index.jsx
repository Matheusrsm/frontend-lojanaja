import React, { useEffect, useState } from 'react';
import Cards from '../Cards';

import api from '../../include/api';

import './styles.css';

function ListaProdutos({ category }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    api.get(`product/${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
      setProdutos(res.data);
    });
  }, []);

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

export default ListaProdutos;
