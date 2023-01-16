import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Home</h1>
            <Link to="/register" className='btn btn-success mx-5 text-white font-bold'>Register</Link>
            <Link to="/login" className='btn btn-success text-white font-bold'>Log In</Link>
        </div>
    );
};

export default Home;