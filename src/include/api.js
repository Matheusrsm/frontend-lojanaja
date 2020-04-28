import axios from 'axios';

const baseURL = 'https://controlenaja.herokuapp.com/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.getUrl = () => baseURL;

export default api;
