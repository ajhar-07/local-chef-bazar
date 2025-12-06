import React from 'react';
import { createBrowserRouter } from 'react-router';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';

export const router=createBrowserRouter([
    {path:'/', element:<Mainlayout/>,
        children:[
            {path:'/', element:<Home></Home>}
        ]
    }
])