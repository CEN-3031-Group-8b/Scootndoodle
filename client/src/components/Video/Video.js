import React from 'react'
import Demo from '../../assets/demo.mov'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Container from 'react-bootstrap/Container'
import './Video.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Video = () => (
    <div className='video-container'>
        <video id='background-video' loop autoPlay muted>
            <source src={Demo} type="video/mp4" />
            <source src={Demo} type="video/ogg" />
            Your browswer does not support this video.
        </video>

        <div className='video-text'>
            <Col>
                <Row className='justify-content-center justify-text-center'>
                    <h1 className='display-5'>Fun and Engaging Writing Support!</h1>
                </Row>
                <Row className='justify-content-center justify-text-center'>
                    <p>
                        Used by pre-writers, differently developing doodlers and
                        even adults! The earlier children master written communication
                        skills better than they do academically.
                    </p>
                </Row>
            </Col>
            
            
        </div>
    </div>
)