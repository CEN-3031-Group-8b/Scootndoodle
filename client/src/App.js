import React, {useState, useRef, useEffect} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from "./views/Home/Home"
import Pay from "./views/Pay/Pay"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"

const paypal = require('paypal-rest-sdk');


const App = () => {
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 9.95,
        description: "Car therapeutic tool for toddlers",
        img: "assets/car.jpeg"
    };

    useEffect(() => {

    });

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Pay" component={Pay}/>
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );

}

export default App;

