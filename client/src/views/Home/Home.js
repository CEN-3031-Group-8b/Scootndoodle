import React from 'react';
import './Home.css';
import { Video } from '../../components/Video/Video'
import { About } from '../../components/About/About'
import Media from '../../components/Media/Media';
import  ShopPreview  from '../../components/ShopPreview/ShopPreview'
import ReviewSlider from '../../components/Reviews/ReviewSlider';
import sliderData from '../../assets/reviews'
//import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
//import Row from 'react-bootstrap/Row';
import { MissionStatement } from '../../components/Mission/MissionStatement';
//import Container from 'react-bootstrap/Container'

export const Home = () => (
    <React.Fragment>
        <Navigation />
        <Video />
        <ReviewSlider data={sliderData}/>
        <MissionStatement />
        <ShopPreview />
        <About />
        <Media />
    </React.Fragment>
);

// https://github.com/reactjs/react-modal
