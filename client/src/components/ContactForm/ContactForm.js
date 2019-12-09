import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropogation();
    }

    console.log('contact form submitted!!')
}

export const ContactForm = () => (
    <Form>
        <Form.Row>
            <Col>
                <Form.Control placeholder="First name" style={{marginBottom: '1rem'}}/>
            </Col>
            <Col>
                <Form.Control placeholder="Email" style={{marginBottom: '1rem'}}/>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Control placeholder="Subject" style={{marginBottom: '1rem'}}/>
            </Col>
        </Form.Row>
        <Form.Row>
            <Form.Control as="textarea" rows="4" style={{marginBottom: '1rem'}}/>
        </Form.Row>
        <Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form.Row>
        
    </Form>
)