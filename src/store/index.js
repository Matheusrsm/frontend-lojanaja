import { createStore } from 'redux';

import { foto } from '../assets/logo.png';

function setStateInicial() {
  return [{
    product_code: 1,
    image: foto,
    name: 'tv',
    price: 100,
    quantity: 10,
  }, {
    product_code: 2,
    image: foto,
    name: 'Celular',
    price: 100,
    quantity: 0,
  }, {
    product_code: 3,
    image: foto,
    name: 'Geladeira',
    price: 100,
    quantity: 9,
  }];
}

const stateInicial = setStateInicial();

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
