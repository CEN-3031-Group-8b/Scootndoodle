import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import  Shop from './views/Shop/Shop'
import Media   from "./components/Media/Media"
import NotFound from "./views/NotFound"
import Section from "./components/Navigation/Section"

import './App.css'
import AdminPortal from './views/Admin/AdminPortal';
import {Orders} from './views/Admin/Orders';
import PaymentTest from './views/PaymentTesting/PaymentTest';
//import productPhotos from './Shop/Cart/DSC_0056.JPG'
import { Link } from 'react-router-dom';
import HippoController from './views/Shop/Cart/Product/HippoController';
import CarController from './views/Shop/Cart/Product/CarController';
import mainCart from './views/Shop/Cart/mainCart';
import CartList from './views/Shop/Cart/Product/product-list.component'
//import {CartOverview} from "./Shop/Cart/CartOverview"
import CartView from "./views/PaymentTesting/CartView"



const App = () => {
  return (
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Shop' component={Shop} />
        <Route exact path='/AdminPortal' component={Orders} />
        <Route exact path='/Payment' component={CartView} />
        <Route exact path='/HippoController' component={HippoController} />
        <Route exact path='/CarController' component={CarController} />
        <Route exact path='/create-product' component={mainCart} />
        <Route exact path='/product-list' component={CartList} />
        <Route path='/Forum' />
        <Route component={NotFound}/>
      </Switch>
  );
};

export default App;