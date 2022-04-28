import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Category from './pages/Category';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/cart" component={ Cart } />
          <Route path="/category/:id" component={ Category } />
        </Switch>
      </BrowserRouter>

    );
  }
}
