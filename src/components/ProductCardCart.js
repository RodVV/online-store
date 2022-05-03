import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCardCart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
      // multiPrice: 0,
    };
  }

  componentDidMount = () => {
    const { produto } = this.props;
    this.setState({
      quantity: produto.quantity,
    });
  }

  handleQuantity = (produto, action) => {
    const { quantity } = this.state;
    if (action === 'adiciona') {
      this.setState({
        quantity: quantity + 1,
      });
    }
    if (action === 'subtrai') {
      this.setState({
        quantity: quantity - 1,
      });
    }
  }

  render() {
    const { title, price, thumbnail, produto } = this.props;
    const { quantity } = this.state;
    // console.log(id);
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <div data-testid="shopping-cart-product-quantity">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.handleQuantity(produto, 'adiciona') }
            // disabled={ produto.quantity === produto.available_quantity }
          >
            +
          </button>
          <p>
            { quantity }
          </p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            // disabled={ produto.quantity <= 1 }
            onClick={ () => this.handleQuantity(produto, 'subtrai') }
          >
            -
          </button>
          <button
            data-testid="product-remove"
            type="button"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

ProductCardCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  produto: PropTypes.shape.isRequired,
};

export default ProductCardCart;
