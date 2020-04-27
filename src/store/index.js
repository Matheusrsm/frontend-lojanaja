import { createStore } from 'redux';

import api from '../include/api';
import { foto } from '../assets/logo.png';


async function setStateInicial() {
  const token = localStorage.getItem('accessToken');

  const res = await api({
    method: 'GET',
    url: 'product/celular?page=1',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.products;
}

let stateInicial = [];

setStateInicial().then((res) => {
  stateInicial = res;
});

function reducer(state = stateInicial, action) {
  switch (action.type) {
    case 'CELULAR':
      return [{
        product_code: 2,
        image: foto,
        name: 'Celular',
        price: 100,
        quantity: 0,
      }];
    case 'TV':
      return [{
        product_code: 1,
        image: foto,
        name: 'tv',
        price: 100,
        quantity: 10,
      }];
    case 'ELETRODOMESTICO':
      return [{
        product_code: 3,
        image: foto,
        name: 'Geladeira',
        price: 100,
        quantity: 9,
      }];
    case 'VIDEOGAME':
      return [{
        product_code: 4,
        image: foto,
        name: 'Play 2',
        price: 100,
        quantity: 100,
      }];
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
