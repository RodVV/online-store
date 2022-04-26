import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </BrowserRouter>

    );
  }
}
