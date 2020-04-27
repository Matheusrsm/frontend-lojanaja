export default function isLogged() {
  const token = localStorage.getItem('accessToken');
  return token !== null;
}
