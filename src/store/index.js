import { createStore } from 'redux';

import { foto } from '../assets/logo.png';

function setStateInicial() {
  return [{
    image: foto,
    name: 'tv',
    price: 100,
    quantity: 10,
  }, {
    image: foto,
    name: 'Celular',
    price: 100,
    quantity: 0,
  }, {
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
        image: foto,
        name: 'Celular',
        price: 100,
        quantity: 0,
      }];
    case 'TV':
      return [{
        image: foto,
        name: 'tv',
        price: 100,
        quantity: 10,
      }];
    case 'ELETRODOMESTICO':
      return [{
        image: foto,
        name: 'Geladeira',
        price: 100,
        quantity: 9,
      }];
    case 'VIDEOGAME':
      return [{
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
