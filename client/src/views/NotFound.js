import React from 'react';

const NotFound = () => {
        return(
            <div>
                    <a>Page not found, please return home</a>
                    <h1>
                            <a href="http://localhost:3000/Home">
                                    <button className="homeButton">
                                            <span>Home</span>
                                    </button>
                            </a>
                    </h1>
            </div>
        )
}

export default NotFound;
