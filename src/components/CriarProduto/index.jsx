import React, { Component } from 'react';

import api from '../../include/api'

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
        console.log(evento.target.files, evento.target.files[0])
        
        try {
          this.setState({ fileName: evento.target.files[0].name })
        }
        catch {
    
        }
    }
    
    enviarManipulador = async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('accessToken')

        const formData = new FormData()
        formData.append('file', this.state.product.productImage)
        formData.append('product_code', this.state.product.productCode)
        formData.append('name', this.state.product.productName)
        formData.append('category', this.state.product.productCategory)
        formData.append('price', this.state.product.productPrice)
        formData.append('quantity', this.state.product.productQuantity)
        
        console.log(this.state.product.productImage)
        
        const prod = await api({
            method: 'POST',
            url: 'product',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: formData
        })

        console.dir(prod);
    }
    render() {
    return (
        <div className='container-novo-produto'>
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
                <option value="tv">TVs</option>
                <option value="eletrodomestico">Eletrodomésticos</option>
                <option value="videogame">Videogames</option>
                <option value="celular">Celulares</option>
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
        </div>
    );
    }
}