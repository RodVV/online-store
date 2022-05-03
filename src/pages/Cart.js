import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCardCart from '../components/ProductCardCart';
// import { addStorage, getStorage } from './services/storage';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    // console.log(quantity);
    if (cart.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div>
        {cart.map((produto) => (
          <div key={ produto.id }>
            <div data-testid="shopping-cart-product-name">
              <ProductCardCart
                thumbnail={ produto.thumbnail }
                title={ produto.title }
                id={ produto.id }
                price={ produto.price }
                quantity={ produto.quantity }
                produto={ produto }
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};

export default Cart;
