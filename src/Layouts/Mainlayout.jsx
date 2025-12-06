import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Mainlayout = () => {
    return (
        <div className='bg-emerald-50'>
         <header>
            <Navbar></Navbar>
            </header> 
         <main className='mx-auto w-11/12'>
            <Outlet></Outlet>
            </main> 
         <footer>
            <Footer></Footer>
            </footer> 
        </div>
    );
};

export default Mainlayout;