import React from 'react';
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            <h1 className="text-3xl font-semibold text-center m-3 mb-8">Meet Our Team</h1>
            <AboutUsCard/>
        </div>
    );
};

export default AboutUs;