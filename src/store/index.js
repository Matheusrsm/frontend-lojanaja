import { createStore } from 'redux';

function setStateInicial() {
  return ['tv', 'celular', 'rampa'];
}

const stateInicial = setStateInicial();

function reducer(state = stateInicial, action) {
  switch (action.type) {
    case 'CELULAR':
      return ['samsung A50'];
    case 'TV':
      return ['philips'];
    case 'ELETRODOMESTICO':
      return ['50 polegadas'];
    case 'VIDEOGAME':
      return ['Play 2'];
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
