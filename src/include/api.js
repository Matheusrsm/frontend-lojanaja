import axios from 'axios';

const api = axios.create({
  baseURL: 'https://controlenaja.herokuapp.com/',
});


export default api;
