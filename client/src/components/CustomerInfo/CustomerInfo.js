import React from 'react'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './CustomerInfo.css'


class CustomerInfo extends React.Component {
    render() {
        return(
            <Container className = 'customer-info-container'>

                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/ShopPreview">Shop</a></li>
                        <li class="breadcrumb-item"><a href="/Cart">Cart</a></li>
                        <li class="breadcrumb-item active">Place Order</li>
                    </ol>
                </nav>

                <h1>
                    Customer Information
                </h1>
                <hr />

                <div className="container">
                    <form>
                        <div class = "form-group">
                            <label for = "email"> Email: </label>
                            <input type= "email" class = "form-control" id="email" placeholder ="Enter email"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "first-name"> First Name: </label>
                            <input type= "first-name" class = "form-control" id="first-name" placeholder ="First Name"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "last-name"> Last Name: </label>
                            <input type= "last-name" class = "form-control" id="last-name" placeholder ="Last Name"></input>
                        </div>

                        <hr />

                        <h1> Shipping Information </h1>
                        <hr />
                        <div class = "form-group">
                            <label for = "address"> Street Address 1: </label>
                            <input type= "address" class = "form-control" id="address" placeholder ="Enter Address"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "address"> Street Address 2: </label>
                            <input type= "address" class = "form-control" id="address2" placeholder ="Enter Address 2 (optional)"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "City"> City: </label>
                            <input type= "city" class = "form-control" id="city" placeholder ="City"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "State"> State: </label>
                            <input type= "state" class = "form-control" id="state" placeholder ="State"></input>
                        </div>

                        <div class = "form-group">
                            <label for = "zip"> Zip Code: </label>
                            <input type= "zip" class = "form-control" id="zip" placeholder ="Zip code"></input>
                        </div>
                    </form>

                    <Link to="/">
                        <button className="payments" type="button">Proceed to Payment</button>
                    </Link>
                </div>


            </Container>
        );
    };
}

export default CustomerInfo;
