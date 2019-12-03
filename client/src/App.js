import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import Media   from "./components/Media/Media"
import NotFound from "./views/NotFound"
import Success from './views/Shop/Congrats'
import ShopPreview from './components/ShopPreview/ShopPreview'
import Cart from "./components/Cart/Cart";

import './App.css'



const App = () => {
  return (
      <Router>
        <div className={'App'}>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path='/ShopPreview' component={ShopPreview} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/Success' component={Success}/>
            <Route exact path="/Media" component={Media} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
