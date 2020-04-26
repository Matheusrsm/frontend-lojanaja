import React from 'react';
import styled from 'styled-components';

import './styles.css';

export default function Cards({ produto }) {
  const CardDiv = styled.div`
        width: 250px;
        heigth: 350px;
        background: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center
    `;
  const CardDivAmarelo = styled.div`
        width: 250px;
        heigth: 350px;
        background: yellow;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center
  `;
  const CardDivVermelho = styled.div`
        width: 250px;
        heigth: 350px;
        background: red;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center
  `;

  function enableInput(id) {
    const card = document.getElementById(id);
    const btn = document.getElementById('edit-save');

    if (card.hasAttribute('disabled')) {
      card.removeAttribute('disabled');
      btn.innerHTML = 'Salvar';
      return null;
    }
    // salvar aleração na quantidade aqui
    card.setAttribute('disabled', 'disabled');
    btn.innerHTML = 'Editar';
  }

  function returnCardColor() {
    let qtd = produto.quantity;
    if (produto.quantity >= 10) {
      return (
        <CardDiv className="card">
          <img src={produto.image} alt="Produto" width="50%" />
          <h1>{produto.name}</h1>
          <p className="price">
            R$
            {produto.price}
          </p>
          <div className="container-quantidade">
            <p>Quantidade: </p>
            <input
              id={`quant-${produto.product_code}`}
              name="quant"
              className="quant"
              size="1"
              type="number"
              defaultValue={qtd}
              maxLength="5"
              disabled="disabled"
              onChange={(e) => qtd = e.target.value}
              min="0"
            />
            <button id="edit-save" type="button" onClick={() => enableInput(`quant-${produto.product_code}`)}>
              Editar
            </button>
          </div>
        </CardDiv>
      );
    } if (produto.quantity === 0) {
      return (
        <CardDivVermelho className="card">
          <img src={produto.image} alt="Produto" width="50%" />
          <h1>{produto.name}</h1>
          <p className="price">
            R$
            {produto.price}
          </p>
          <div className="container-quantidade">
            <p>Quantidade: </p>
            <input
              id={`quant-${produto.product_code}`}
              name="quant"
              className="quant"
              size="1"
              type="number"
              defaultValue={qtd}
              maxLength="5"
              disabled="disabled"
              onChange={(e) => qtd = e.target.value}
              min="0"
            />
            <button id="edit-save" type="button" onClick={() => enableInput(`quant-${produto.product_code}`)}>
              Editar
            </button>
          </div>
        </CardDivVermelho>
      );
    }
    return (
      <CardDivAmarelo className="card">
        <img src={produto.image} alt="Produto" width="50%" />
        <h1>{produto.name}</h1>
        <p className="price">
          R$
          {produto.price}
        </p>
        <div className="container-quantidade">
          <p>Quantidade: </p>
          <input
            id={`quant-${produto.product_code}`}
            name="quant"
            className="quant"
            size="1"
            type="number"
            defaultValue={qtd}
            maxLength="5"
            disabled="disabled"
            onChange={(e) => qtd = e.target.value}
            min="0"
          />
          <button id="edit-save" type="button" onClick={() => enableInput(`quant-${produto.product_code}`)}>
            Editar
          </button>
        </div>
      </CardDivAmarelo>
    );
  }

  return returnCardColor();
}
