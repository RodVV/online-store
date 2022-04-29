import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      produto: [],
    };
  }

  componentDidMount() {
    this.fetchCategoryId();
  }

  fetchCategoryId = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const dataProd = await response.json();
    // console.log(dataProd);
    this.setState({
      produto: dataProd,
    });
  };

  render() {
    const { produto } = this.state;
    // console.log(produto);
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        Details
        <h1 data-testid="product-detail-name">{ produto.title }</h1>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>{ produto.price }</p>
        <p> Esse produto eh lindo</p>
        <p> Na compra deste produto ganhe uma yogurteira top-therm!!!!</p>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
