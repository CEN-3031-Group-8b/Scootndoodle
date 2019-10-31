import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="https://images.theconversation.com/files/45375/original/s7kt4vmq-1396412167.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" className="App-logo" alt="logo" />
                <p>
                    (Insert picture of product above on shop page)
                    <Link to="/Pay">
                        <form action = "/Pay" method = "post">
                            <input type = "submit" value = "Buy"/>
                        </form>
                    </Link>
                </p>
                <a
                    className="App-link"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
