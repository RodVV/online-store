import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Details from './pages/Details';
import { addStorage } from './services/storage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     cart: getStorage(),
  //   });
  // }

  addToCart = (objeto) => {
    // console.log(objeto);
    this.setState((prevState) => ({
      cart: [...prevState.cart, objeto],
    }), () => {
      const { cart } = this.state;
      addStorage(cart);
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Search
              { ...props }
              cart={ cart }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => <Cart { ...props } cart={ cart } /> }
          />
          <Route
            path="/category/:id"
            render={ (props) => (<Category
              { ...props }
              cart={ cart }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<Details
              { ...props }
              cart={ cart }
              addToCart={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>

    );
  }
}
