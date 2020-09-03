import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
