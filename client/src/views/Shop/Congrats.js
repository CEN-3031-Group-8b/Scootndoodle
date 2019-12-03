import React from 'react';
import './Congrats.css';

const Congrats = () => {
    return (

        <div className='success'>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                    <li className="breadcrumb-item "><a href={"/ShopPreview"}>Shop</a></li>
                    <li className="breadcrumb-item "><a href={"/Cart"}>Cart</a></li>
                    <li className="breadcrumb-item active"><a href="#">Success</a></li>
                </ol>
            </nav>
            <h3 className={'Greeting'}>Thank You for your order! <br/>
                Your Therapeutic DexteDoodle Tool Will Arrive Promptly!
            </h3>

        </div>
    );
};

export default Congrats;
