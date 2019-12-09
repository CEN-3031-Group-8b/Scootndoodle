import React from 'react';
//import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='footer-container'>
                <Row className="justify-content-center">
                    this is the footer
                </Row>
                <Row className="justify-content-center">
                    media links here
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Footer