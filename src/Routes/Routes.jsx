import React from 'react';
import { createBrowserRouter } from 'react-router';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Home/Authotication/Login';
import Register from '../Pages/Home/Authotication/Register';

export const router=createBrowserRouter([
    {path:'/', element:<Mainlayout/>,
        children:[
            {path:'/', element:<Home></Home>}
        ]
    },
    {path:'/login', element:<Login></Login>},
    {path:'/register',element:<Register></Register>},
])