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
    // console.log(produtos);
    return (
      <div>
        {produtos.map((produto) => (
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
};
