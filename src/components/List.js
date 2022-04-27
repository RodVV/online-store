import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.buscaCategories();
  }

  buscaCategories = async () => {
    const categorias = await getCategories();
    this.setState({
      categorias,
    });
  };

  render() {
    const { categorias } = this.state;
    console.log(categorias);
    return (
      <div>
        { categorias.map((categoria) => (
          <Link
            data-testid="category"
            to="/search"
            key={ categoria.id }
          >
            { categoria.name }
          </Link>
        ))}
      </div>
    );
  }
}
