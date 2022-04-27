import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="digite aqui"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <List />
      </div>
    );
  }
}
