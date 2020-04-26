import React from 'react';
import styled from 'styled-components';

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

  function returnCardColor() {
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
            <input id="quant" name="quant" className="text" size="1" type="text" value={produto.quantity} maxLength="5" />
            <div data-app="product.quantity" id="quantidade">
              <input type="button" id="plus" value="-" onClick={retira} />
              <input type="button" id="minus" value="+" onClick={adiciona} />
            </div>
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
            <input id="quant" name="quant" className="text" size="1" type="text" value={produto.quantity} maxLength="5" />
            <div data-app="product.quantity" id="quantidade">
              <input type="button" id="plus" value="-" onClick={retira} />
              <input type="button" id="minus" value="+" onClick={adiciona} />
            </div>
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
          <input id="quant" name="quant" className="text" size="1" type="text" value={produto.quantity} maxLength="5" />
          <div data-app="product.quantity" id="quantidade">
            <input type="button" id="plus" value="-" onClick={retira} />
            <input type="button" id="minus" value="+" onClick={adiciona} />
          </div>
        </div>
      </CardDivAmarelo>
    );
  }

  function adiciona() {
    let value = parseInt(document.getElementById('quant').value);
    value++;
    document.getElementById('quant').value = value;
  }

  function retira() {
    let value = parseInt(document.getElementById('quant').value);
    value--;
    if (value < 1) {
      document.getElementById('quant').value = 1;
    } else {
      document.getElementById('quant').value = value;
    }
  }

  return returnCardColor();
}
