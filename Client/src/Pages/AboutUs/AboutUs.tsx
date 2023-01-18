import React from 'react';
import AboutUsCard from './AboutUsCard';
import aboutData from './aboutData';

const AboutUs = () => {
    return (
        <div className='w-[90%] mx-auto min-h-screen py-20'>
            <h1 className="text-3xl font-semibold text-center m-3 mb-8">Meet Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    aboutData.map(about => <AboutUsCard key={about.id} about={about} />)
                }
            </div>
        </div>
    );
};

export default AboutUs;