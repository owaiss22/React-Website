import React from 'react';
//Image
import img from '../Images/laptop.jpg';
//Component
import LandingPage from './LandingPage';

const Home = () => {
    return (
        <>
            <LandingPage title="Grow Your Business With" imgSrc={img} visit="/services" btnName="Get Started" />
        </>
    );
}

export default Home;