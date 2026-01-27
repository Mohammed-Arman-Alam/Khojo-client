import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/PGV8Vjfk/banner-img.png')] bg-top bg-no-repeat bg-cover"> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    );
};

export default RootLayout;