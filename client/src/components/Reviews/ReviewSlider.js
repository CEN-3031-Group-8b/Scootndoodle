import React from 'react'
import ReviewCard from './ReviewCard'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewSlider.css'

export default ({data}) => {
    const reviewList = data.map(review => {
        return <ReviewCard reviewData={review} className='slider-card'/>
    })

    //var slidesToShow = window.innerWidth < 720 ? 2 : 3

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {reviewList}
            </Slider>
        </div>
        
    )
}

//https://medium.com/@renatorib/tackling-responsive-elements-in-react-and-why-ive-created-react-sizes-f7c87e3f9e64#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjljZWY1MzQwNjQyYjE1N2ZhOGE0ZjBkODc0ZmU3OTAwMzYyZDgyZGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE1NzI5MTgwMzYsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjQxMzU2MzMxOTQ4NjMzMTE2MSIsImVtYWlsIjoiYWFyb25sZW9wb2xkMTIyMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkFhcm9uIExlb3BvbGQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FBdUU3bURhRUU3M25GN3ZDMUstcTFjREdpQzRoVTkycDJvWXlibTFyYUF2M3c9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWFyb24iLCJmYW1pbHlfbmFtZSI6Ikxlb3BvbGQiLCJpYXQiOjE1NzI5MTgzMzYsImV4cCI6MTU3MjkyMTkzNiwianRpIjoiMTQ2ODVhZmQ5OGExODZhN2RjMGM0YmJkYzZlNTUwYWY2ODkwYWYwNyJ9.VP3FPqW9VGm9WuAmUvx49rtuhx5w30-ipy5AJ6kpE5PTuwoZ_dLBvQ5vGs_2oVRYPlEEUEPZfTArkS6KNqn3L9rDdmoesvKTKU3Cf-aFTjbd3JyIabsDt49Gk17TXwnl9Q-e6DeMP22Fs1ypQn3NykB1hVPTpkJZw60YTxHq3684GzysjQS-opcwcns7jX63-dXR52IQyt3AniyBpo6VEHHnvwSNHbhRUq6Xm1l1mGIPuyQjCrzpNT_uWOgtixcoX9JfXMe1ekyVXLVIQ1DWoD5d9UyJVpBw8_wK94pM0rHOeFxt2APdDAaVHP7Hi-85IEJs8PqrJ9Aklymhcc3MDw


//https://react-slick.neostack.com/docs/api/#centerPadding