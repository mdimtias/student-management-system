import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import LatestNews from '../../LatestNews/LatestNews';

const Home = () => {
    return (
        <>
            <LatestNews></LatestNews>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;