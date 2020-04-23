import React from 'react';
import GoogleLogin from 'react-google-login';

import './styles.css';

export default function Login() {
  const reponseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="container-login">
      <div className="container-components">
        <form>
          <h1>Bem-vindo</h1>
          <p>
            Para acessar o controle de estoque da loja, faça seu login usando sua
            conta Google.
          </p>
          <GoogleLogin
            className="google"
            clientId="490339351976-qgvjcr01u4u985vq653s9s73tkteu89q.apps.googleusercontent.com"
            buttonText="Fazer login com o Gmail"
            onSuccess={reponseGoogle}
            onFailure={reponseGoogle}
          />
        </form>
      </div>
    </div>
  );
}
