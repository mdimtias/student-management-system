import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import LatestNews from '../../LatestNews/LatestNews';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <>
            <LatestNews></LatestNews>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
        </>
    );
};

export default Home;