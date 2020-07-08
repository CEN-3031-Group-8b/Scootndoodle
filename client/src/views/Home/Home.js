import React from 'react';
import './Home.css';
import { Video } from '../../components/Video/Video'
import { About } from '../../components/About/About'
import Media from '../../components/Media/Media';
import ReviewSlider from '../../components/Reviews/ReviewSlider';
import sliderData from '../../assets/reviews'
//import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
//import Row from 'react-bootstrap/Row';
import { MissionStatement } from '../../components/Mission/MissionStatement';
import ShopPreview from '../Shop/ShopPreview';

export const Home = () => (
    <div>
        <Navigation />
        <Video />
        <ReviewSlider data={sliderData}/>
        <MissionStatement />
        <ShopPreview/>
        <About />
        <Media />
    </div>
)

// https://github.com/reactjs/react-modal
