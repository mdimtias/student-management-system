import React from 'react';
import Skills from '../../../component/skills/Skills';
import { useTitle } from '../../../hooks/useTitle';
import AboutUs from '../../AboutUs/AboutUs';
import LatestNews from '../../LatestNews/LatestNews';
import Reviews from '../Reviews/Reviews';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    useTitle("Home")
    return (
        <>
            <LatestNews></LatestNews>
            <Reviews></Reviews>
            <Skills></Skills>
            <WhyChooseUs></WhyChooseUs>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;
