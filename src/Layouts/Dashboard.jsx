import React, { useState } from 'react';
import { FaBars, FaUser, FaHeart, FaClipboardList, FaPlusCircle, FaUsersCog, FaChartPie, FaHome } from 'react-icons/fa';
import { MdRateReview, MdManageAccounts } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const options = [
   
    { label: 'Home', icon: <FaHome /> },
     { label: 'My Profile', icon: <FaUser /> },
    { label: 'My Orders', icon: <FaClipboardList /> },
    { label: 'My Review', icon: <MdRateReview /> },
    { label: 'Favorite Meal', icon: <FaHeart /> },
    { label: 'Create Meal', icon: <FaPlusCircle /> },
    { label: 'My Meals', icon: <GiMeal /> },
    { label: 'Order Requests', icon: <FaClipboardList /> },
    { label: 'Manage Users', icon: <MdManageAccounts /> },
    { label: 'Manage Requests', icon: <FaUsersCog /> },
    { label: 'Platform Statistics', icon: <FaChartPie /> },
  ];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-emerald-500 text-white p-6 transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">DASHBOARD MENU</h2>

        <div className="flex flex-col gap-4">
          {options.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-lg font-medium cursor-pointer hover:text-gray-200"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64 w-full">
        <button
          className="md:hidden text-3xl text-emerald-500 mb-4"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        <h1 className="text-3xl font-bold text-emerald-500 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {options.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 cursor-pointer hover:shadow-lg transition"
            >
              <div className="text-3xl text-emerald-500">{item.icon}</div>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
