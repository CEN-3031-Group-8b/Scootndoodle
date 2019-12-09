import React from 'react'
import './ReviewCard.css'

export default ({reviewData}) => {
    return (
        <React.Fragment>
            <div className='card-padding'>
                <p>"{reviewData.content}"</p>
                <strong style={{fontSize: '0.9em'}}>{reviewData.name}</strong>,
                {' '}
                <small className='rev-source'>{reviewData.position}</small>
            </div>

        </React.Fragment>
    )
}