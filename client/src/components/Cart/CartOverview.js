import React from 'react'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './Cart.css'

class CartOverview extends React.Component {
    render() {
        return(
            <Container className = 'cart-container'>
                <div>
                    this will hold price calculations and be displayed on the side of the shop, cart, and order pages
                </div>

                <div>

                    Cart
                </div>

            </Container>
        );
    };
}
export default CartOverview;
