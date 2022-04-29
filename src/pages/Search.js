import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Cart from './Cart';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      produtos: [],
      // cart: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchInput: value,
    });
  }

  handleClick = async () => {
    const { searchInput } = this.state;
    const result = await getProductsFromCategoryAndQuery('', searchInput);
    // console.log(result);
    this.setState({
      searchInput: '',
      produtos: result.results,
    });
  }

  addToCart = (objeto) => {
    // console.log(objeto);
    this.setState((prevState) => ({
      cart: [...prevState.cart, objeto],
    }));
  }

  render() {
    const { searchInput, produtos, cart } = this.state;
    // console.log(cart);
    return (
      <div>
        <input
          type="text"
          placeholder="digite aqui"
          data-testid="query-input"
          value={ searchInput }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <List />
        { produtos.length === 0 && <p>Nenhum produto foi encontrado</p> }
        {produtos.map((produto) => (
          <>
            <Link
              key={ produto.id }
              data-testid="product-detail-link"
              to={ `/details/${produto.id}` }
            >
              <ProductCard
                key={ produto.id }
                thumbnail={ produto.thumbnail }
                title={ produto.title }
                id={ produto.id }
                price={ produto.price }
              />
            </Link>
            <button
              type="button"
              onClick={ () => this.addToCart(produto) }
              key={ `btn-${produto.id}` }
              data-testid="product-add-to-cart"
            >
              add Cart
            </button>
            <Cart
              itens={ cart }
            />
          </>
        ))}
      </div>
    );
  }
}
