import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { SocialIcon } from 'react-social-icons'
import InstaGrid from './InstaGrid'
import { FacebookWidget } from './FacebookWidget'
import { ContactForm } from '../ContactForm/ContactForm'

import './index.css'
import './Media.css'
//library.add(faFacebookSquare); 

class Media extends React.Component {
    render() {
        return (
            <div>
                <div id="media" />
                <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        <Row style={{marginLeft: 0, marginRight: 0}}><h2>Contact Us</h2></Row>
                        <Row style={{marginLeft: 0, marginRight: 0}}>
                            <SocialIcon url='https://www.facebook.com/' className='icon-padding' />
                            <SocialIcon url='https://www.instagram.com/scootscribbledoodletest/' style={{marginLeft: '1rem'}} />
                        </Row>
                        <Row style={{marginLeft: 0, marginRight: 0}}>
                            <ContactForm />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <FacebookWidget />
                    </Col>
                </Row>
                </Container>
                <Row>
                    <InstaGrid account="scootscribbledoodletest" numberOfMediaElements={6} />
                </Row>
            </div>
        );
    }
}

export default Media;
