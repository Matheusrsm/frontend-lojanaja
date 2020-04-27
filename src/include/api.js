import axios from 'axios';

const baseURL = 'https://controlenaja.herokuapp.com/';

const api = axios.create({
  baseURL,
});

api.getUrl = () => baseURL;

export default api;
