import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  FaBars,
  FaUser,
  FaHeart,
  FaClipboardList,
  FaPlusCircle,
  FaUsersCog,
  FaChartPie,
  FaHome,
} from "react-icons/fa";
import { MdRateReview, MdManageAccounts } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "My Profile", icon: <FaUser />, path: "/dashboard/profile" },
    { label: "My Orders", icon: <FaClipboardList />, path: "/dashboard/orders" },
    { label: "My Review", icon: <MdRateReview />, path: "/dashboard/review" },
    { label: "Favorite Meal", icon: <FaHeart />, path: "/dashboard/favorite" },
    { label: "Create Meal", icon: <FaPlusCircle />, path: "/dashboard/create-meal" },
    { label: "My Meals", icon: <GiMeal />, path: "/dashboard/my-meals" },
    { label: "Order Requests", icon: <FaClipboardList />, path: "/dashboard/requests" },
    { label: "Manage Users", icon: <MdManageAccounts />, path: "/dashboard/users" },
    { label: "Manage Requests", icon: <FaUsersCog />, path: "/dashboard/manage-requests" },
    { label: "Platform Statistics", icon: <FaChartPie />, path: "/dashboard/statistics" },
  ];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-emerald-500 text-white p-6 transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">DASHBOARD MENU</h2>

        <div className="flex flex-col gap-4">
          {options.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 text-lg font-medium cursor-pointer hover:text-gray-200"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
    <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
