import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Hero';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
           
         <div>
            <Hero></Hero>
         </div>
         
       <div>
       <HowItWorks></HowItWorks>
       </div>
        </div>
    );
};

export default Home;