import React from 'react';
import useRole from '../../Hooks/useRole';
import Userstatistics from './Userstatistics';
import Adminstatistics from './Adminstatistics';
import Sellerstatistics from './Sellerstatistics';

const Statistics = () => {
    const[role,isReloading]=useRole()
    if (isReloading) {
        return<p>Loading......</p>
    }
    return (
        <div>
          {role==="user" && <Userstatistics></Userstatistics>}
          {role==="admin" && <Adminstatistics></Adminstatistics>}
          {role==="seller" && <Sellerstatistics></Sellerstatistics>}
        </div>
    );
};

export default Statistics;