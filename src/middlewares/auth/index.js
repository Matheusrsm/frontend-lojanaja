import api from '../../include/api';

export default async function isLogged() {
  let token = '';

  token = localStorage.getItem('accessToken');

  if (!token) return false;

  const logged = await api({
    method: 'GET',
    url: 'auth',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (logged.data.pass) {
    return true;
  }

  return false;
}
