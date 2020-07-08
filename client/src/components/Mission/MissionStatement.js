import React from 'react'
import Container from 'react-bootstrap/Container'
import './MissionStatement.css'
import mission_data from './mission_data'

export const MissionStatement = () => (
    <Container className='statement-container'>
        {mission_data[0].componentData}
    </Container>
)