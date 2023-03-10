import React from 'react';
import Lottie from "lottie-react";
import error from './errorAssets/error.json'
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle("Page Not Found")
    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <p
                        className="text-2xl md:text-3xl font-light leading-normal"
                    >Sorry we couldn't find this page. </p>
                    <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link to='/'>
                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
                    </Link>
                </div>
                <div className="max-w-lg">
                    <Lottie animationData={error} loop={true} />
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;