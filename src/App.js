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
  // componentDidMount() {
  //   this.addToCart();
  // }

  // addToCart = (objeto) => {
  //   console.log(objeto);
  // this.setState((prevState) => ({
  //   cart: [...prevState.cart, objeto],
  // }));
  // }), () => {
  //   const { cart } = this.state;
  //   addStorage(cart);
  // });
  // }

  addToCart = (objeto) => {
    objeto.quantity = 1;
    const { cart } = this.state;
    // console.log(objeto);
    this.setState((prevState) => ({
      cart: [...prevState.cart, objeto],
    }));
    // console.log(cart);
    addStorage({ cart });
    // const itemCart = {
    //   ...cart,
    //   quantity: 1,
    // };
    // this.setState((prevState) => ({ cart: [...prevState.cart, itemCart] }));
    // console.log(cart);
    // if (!checkId) {
    // const itemCart = {
    //   title: cart.title,
    //   price: cart.price,
    //   thumbnail: cart.thumbnail,
    //   quantity: 1,
    // };
    // this.setState({
    //   cart: itemCart,
    // });
    //   return (
    //     this.setState((prevState) => ({ cart: [...prevState.cart, itemCart] }))
    //   );
    //   // addStorage(cart);
    // }
    // if (checkId) {
    //   console.log('ola');
    // }
  }

  render() {
    const { cart, quantity } = this.state;
    // console.log(cart);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Search
              { ...props }
              cart={ cart }
              quantity={ quantity }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => (<Cart
              { ...props }
              cart={ cart }
              quantity={ quantity }
            />) }
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
