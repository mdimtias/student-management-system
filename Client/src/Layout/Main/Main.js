import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';
import Navbar from '../../SharedPage/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;