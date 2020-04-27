import React, { Component } from 'react';
import './style.css'

export default class CriarProduto extends Component {
    constructor() {
        super();
        this.state = {
          product: {
            productCode: {
                value: ""
            },
            productImage: {
                value: ""
            },
            productName: {
              value: ""
            },
            productCategory: {
                value: ""
            },
            productPrice: {
              value: 0
            },
            productQuantity: {
              value: 0
            },
          },
          fileName: ""
        }
    }
    
    manipulador = (evento) => {
        const name = evento.target.name;
        const value = evento.target.value;
    
        this.setState({
          product: {
            ...this.state.product,
            [name]: {
              ...this.state.product[name],
              value
            }
          }
        });
    
        try {
          this.setState({ fileName: evento.target.files[0].name })
        }
        catch {
    
        }
        console.log(this.state.product);
    }
    
    enviarManipulador = (event) => {
        event.preventDefault();
    
        console.dir("Enviado");
    
        console.log(this.state.product);
    }
    render() {
    return (
        <div id="rightsidebar">
          <h2>Novo Produto</h2>
          <hr className="claro"></hr>
          <form className="productForm" onSubmit={this.enviarManipulador}>
            <div>
              <label for="productCode">Código</label>
              <input id="code" type="text" name="productCode" value={this.state.productCode} onChange={this.manipulador}></input>
            </div> 
            <div >
              <h9 className="label">Imagem</h9>
              <label for="productImage" className="productImage">{this.state.fileName !== "" ? this.state.fileName : ""}</label>
              <input id="productImage" type="file" name="productImage" value={this.state.productImage} onChange={this.manipulador} alt="d"></input>
            </div>
            <div>
              <label for="productName">Nome</label>
              <input id="name" type="text" name="productName" value={this.state.productName} onChange={this.manipulador}></input>
            </div>
            <div className="grid">
              <label for="productCategory">Categoria</label>
              <select name="productCategory" value={this.state.productCategory} onChange={this.manipulador}>
                <option value="tvs">TVs</option>
                <option value="eletrodomesticos">Eletrodomésticos</option>
                <option value="videogames">Videogames</option>
                <option value="celulares">Celulares</option>
              </select>
            </div>
            <div >
              <label for="productPrice">Preço</label>
              <input id="price" type="number" name="productPrice" value={this.state.productPrice} onChange={this.manipulador} min="0" step="0.01"></input>
            </div>
            <div >
              <label for="productQuantity">Quantidade</label>
              <input id="quantity" type="number" name="productQuantity" value={this.state.productQuantity} onChange={this.manipulador} min="0" ></input>
            </div>
            <div className="split">
              <button type="reset" className="claro" onClick={() => this.setState({ fileName: "" })}>Limpar</button>
              <button type="submit" className="claro" onClick={() => this.setState({ fileName: "" })}>Criar</button>
            </div>
          </form>
        </div >
    );
    }
}