import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import logo from '../../assets/logo.png';

import api from '../../include/api';
import isLogged from '../../middlewares/auth';
import './styles.css';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    if (isLogged()) history.push('/product');
  });

  const reponseGoogle = async (response) => {
    let res = await api({
      method: 'POST',
      url: 'login',
      headers: {
        authorization: response.accessToken,
      },
    });

    if (!res.data.token) {
      const access_key = document.getElementById('chave-acesso').value;
      if (!access_key) return alert('Informe a chave de acesso.');

      res = await api({
        method: 'POST',
        url: 'login',
        headers: {
          authorization: response.accessToken,
          access_key,
        },
      });

      if (!res.data.token) return alert('Chave de acesso incorreta!');
    }

    localStorage.setItem('accessToken', res.data.token);
    history.push('/product');
    return res.data.token;
  };

  return (
    <>
      <div className="container-login">
        <img src={logo} alt="logo" className="logo" />
        <div className="container-components">
          <form>
            <h1>Bem-vindo</h1>
            <p>
              Para acessar o controle de estoque da loja, faça seu login usando sua
              conta Google. Caso seja o primeiro acesso informe a Chave de Acesso.
            </p>
            <span>Chave de Acesso:</span>
            <input type="password" id="chave-acesso" />
            <GoogleLogin
              className="google"
              clientId="490339351976-qgvjcr01u4u985vq653s9s73tkteu89q.apps.googleusercontent.com"
              buttonText="Fazer login com o Gmail"
              onSuccess={reponseGoogle}
              onFailure={reponseGoogle}
              cookiePolicy="single_host_origin"
            />
          </form>
        </div>
      </div>
    </>
  );
}
