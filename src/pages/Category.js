import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const result = await getProductsFromCategoryAndQuery(id, '');
    this.setState({
      produtos: result.results,
    });
  };

  render() {
    const { produtos } = this.state;
    const { addToCart } = this.props;
    // console.log(produtos);
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        {produtos.map((produto) => (
          <div key={ produto.id }>
            <Link
              data-testid="product-detail-link"
              to={ `/details/${produto.id}` }
            >
              <ProductCard
                thumbnail={ produto.thumbnail }
                title={ produto.title }
                id={ produto.id }
                price={ produto.price }
              />
            </Link>
            <button
              type="button"
              onClick={ () => addToCart(produto) }
              data-testid="product-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
