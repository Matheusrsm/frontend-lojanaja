import React from 'react';


export default function Card({foto}, {nomeProduto}) {

    function adiciona() {
        var value = parseInt(document.getElementById("quant").value);
        value++;
        document.getElementById("quant").value = value;
    }

    function retira() {
        var value = parseInt(document.getElementById("quant").value);
        value--;
        if(value < 1) {
            document.getElementById("quant").value = 1;
        } else {
          document.getElementById("quant").value = value;
        }
    }

    return (
        <div class="card">
            <img src={foto} alt="Produto" width="50%"/>
            <h1>{nomeProduto}</h1>
            <p class="price">R$0,00</p>
            <p>Quantidade: </p>
            <input id="quant" name="quant" class="text" size="1" type="text" value="1" maxlength="5" />
            <div data-app="product.quantity" id="quantidade">  
                <input type="button" id="plus" value='-' onClick={retira} />
                <input type="button" id="minus" value='+' onClick={adiciona} />
            </div>
        </div>
    )
}