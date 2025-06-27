import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';

const Main = () => {
    return (
       <>
        <Navbar />
        <Outlet />
        <Footer />
       </>
    );
};

export default Main;