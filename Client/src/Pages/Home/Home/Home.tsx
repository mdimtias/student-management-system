import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../../../component/skills/Skills';
import AboutUs from '../../AboutUs/AboutUs';
import LatestNews from '../../LatestNews/LatestNews';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <>
            <LatestNews></LatestNews>
            <Skills></Skills>
            <WhyChooseUs></WhyChooseUs>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;