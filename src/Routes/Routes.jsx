import React from 'react';
import { createBrowserRouter } from 'react-router';
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Home/Authotication/Login';
import Register from '../Pages/Home/Authotication/Register';
import Dashboard from '../Layouts/Dashboard';
import Profile from '../Pages/Profile/Profile';
import Statistics from '../Pages/Statictics/Statistics';

export const router=createBrowserRouter([
    {path:'/', element:<Mainlayout/>,
        children:[
            {path:'/', element:<Home></Home>}
        ]
    },
    {path:'/login', element:<Login></Login>},
    {path:'/register',element:<Register></Register>},

    {path:'/dashboard', element:<Dashboard></Dashboard>,
        children:[
            {path:'/dashboard',element:<Statistics></Statistics>},
            {path:'/dashboard/statistics',element:<Statistics></Statistics>},
            {path:'/dashboard/profile',element:<Profile></Profile>}
        ]
    }
])