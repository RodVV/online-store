import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
  }

  render() {
    const { cart } = this.props;
    const { quantidade } = this.state;
    console.log(cart);
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
              <ProductCard
                thumbnail={ produto.thumbnail }
                title={ produto.title }
                id={ produto.id }
                price={ produto.price }
              />
            </div>
            <div data-testid="shopping-cart-product-quantity">
              <button
                data-testid="product-increase-quantity"
                type="button"
              >
                +
              </button>
              <p>
                xablau
                { quantidade }
              </p>
              <button
                data-testid="product-decrease-quantity"
                type="button"
              >
                -
              </button>
            </div>
          </div>
        ))}
        ;

      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Cart;
