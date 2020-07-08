import React from 'react'
import Container from 'react-bootstrap/Container'
import about_data from './about_data'

import './About.css'

export const About = () => (
    <Container className='about-container' id='about'>
        {about_data[0].componentData}
    </Container>
)