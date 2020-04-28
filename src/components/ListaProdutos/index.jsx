import React, { useEffect, useState } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import Cards from '../Cards';

import api from '../../include/api';

import './styles.css';

function ListaProdutos() {
  const match = useRouteMatch();
  const location = useLocation();
  const { category } = match.params;

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
    // eslint-disable-next-line
  }, [location.pathname]);

  async function deleteProduto(product_code) {
    const token = localStorage.getItem('accessToken');

    await api.delete(`product/${product_code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const new_produtos = produtos.filter((produto) => (produto.product_code !== product_code));
    setProdutos(new_produtos);
  }

  return (
    <div>
      <ul className="container-produtos">
        {produtos.map((item) => (
          <li>
            <Cards key={item.product_code} produto={item} />
            <button
              id="botaoExcluir"
              type="button"
              className="deletar"
              onClick={() => {
                deleteProduto(item.product_code);
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default ListaProdutos;
