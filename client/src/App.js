import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Section from "./components/Navigation/Section"
//import ListPosts from "./components/Forum/Containers/ListPosts"

import './App.css'
import Cart from "./components/Cart/Cart";
import Congrats from "./views/Shop/Congrats";
import ShopPreview from "./components/ShopPreview/ShopPreview";


const App = () => {
  return (
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Cart' component={Cart} />
        <Route exact path='/Success' component={Congrats} />
        <Route exact path='/ShopPreview' component={ShopPreview} />
        <Route path='/Forum' />
        {/* <Section
          title="Media"
          subtitle=''
          dark={true}
          id="Media"
        /> */}
        <Route component={NotFound}/>
      </Switch>
  );
};

export default App;
