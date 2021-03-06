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
          fileName: "",
          image: ""
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
    }

    manipuladorImagem = (evento) => {
      const name = evento.target.name;
      const value = evento.target.files[0];
      
      this.setState({
        product: {
          ...this.state.product,
          [name]: {
            ...this.state.product[name],
            value
          }
        }
      });
      this.setState({image: evento.target.files[0]})
      
      this.setState({ fileName: evento.target.files[0].name })
    
    }
    
    enviarManipulador = async (event) => {
        event.preventDefault();
        
        //const token = localStorage.getItem('accessToken')

        const formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('product_code', this.state.product.productCode.value)
        formData.append('name', this.state.product.productName.value)
        formData.append('category', this.state.product.productCategory.value)
        formData.append('price', this.state.product.productPrice.value)
        formData.append('quantity', this.state.product.productQuantity.value)
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await api.post('product', formData, config)
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
              <h5 className="label">Imagem</h5>
              <label id="labelImage" for="productImage" className="productImage">{this.state.fileName !== "" ? this.state.fileName : ""}</label>
              <input id="productImage" type="file" name="productImage" onChange={this.manipuladorImagem} alt="d"></input>
            </div>
            <div>
              <label for="productName">Nome</label>
              <input id="name" type="text" name="productName" value={this.state.productName} onChange={this.manipulador}></input>
            </div>
            <div className="grid">
              <label for="productCategory">Categoria</label>
              <select id="selectcategorias" name="productCategory" value={this.state.productCategory} onChange={this.manipulador}>
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