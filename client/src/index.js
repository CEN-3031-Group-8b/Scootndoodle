import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './components/Forum/Reducers/index';
import { Provider } from 'react-redux';
import ListPosts from './components/Forum/Containers/ListPosts';
import Login from './components/Forum/Containers/Login';
import CreateAccount from './components/Forum/Containers/CreateAccount';
import LoadingComponent from './components/Forum/Containers/LoadingComponent';
import AuthenticatedComponent from './components/Forum/Containers/AuthenticatedComponent';
import PostDetail from './components/Forum/Containers/PostDetail';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Router>
        <Provider store = {createStoreWithMiddleware(reducers)}>
        <App />
        <LoadingComponent>
            <Switch>
            <Route path="/CreateAccount" component={CreateAccount}/>
            <Route path="/Login" component={Login}/>
            <AuthenticatedComponent>
                <Route path="/:id" component={PostDetail}/>
                <Route exact path="/" component={ListPosts}/>
            </AuthenticatedComponent>
            </Switch>
        </LoadingComponent>
        </Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
