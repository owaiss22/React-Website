import React from 'react';
//Image
import img from '../Images/about2.png';
//Component
import LandingPage from './LandingPage';

const About = () => {
    return (
        <>
            <LandingPage title="Welcome To About Page" imgSrc={img} visit="/contact" btnName="Contact Us" />
        </>
    );
}

export default About;