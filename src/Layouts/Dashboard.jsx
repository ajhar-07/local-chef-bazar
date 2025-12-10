import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  FaBars,
  FaTimes,
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
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [role, isReloading] = useRole();

  const dashboardOptions = {
    user: [
      { label: "Home", icon: <FaHome />, path: "/" },
      { label: "My Profile", icon: <FaUser />, path: "/dashboard/profile" },
      { label: "My Orders", icon: <FaClipboardList />, path: "/dashboard/orders" },
      { label: "My Review", icon: <MdRateReview />, path: "/dashboard/review" },
      { label: "Favorite Meal", icon: <FaHeart />, path: "/dashboard/favorite" },
    ],
    chef: [
      { label: "Home", icon: <FaHome />, path: "/" },
      { label: "My Profile", icon: <FaUser />, path: "/dashboard/profile" },
      { label: "Create Meal", icon: <FaPlusCircle />, path: "/dashboard/create-meal" },
      { label: "My Meals", icon: <GiMeal />, path: "/dashboard/my-meals" },
      { label: "Order Requests", icon: <FaClipboardList />, path: "/dashboard/requests" },
    ],
    admin: [
      { label: "Home", icon: <FaHome />, path: "/" },
      { label: "My Profile", icon: <FaUser />, path: "/dashboard/profile" },
      { label: "Manage Users", icon: <MdManageAccounts />, path: "/dashboard/users" },
      { label: "Manage Requests", icon: <FaUsersCog />, path: "/dashboard/manage-requests" },
      { label: "Platform Statistics", icon: <FaChartPie />, path: "/dashboard/statistics" },
    ],
  };

  const options = dashboardOptions[role] || [];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setOpen(true)} className="text-2xl text-emerald-500">
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-emerald-500 text-white p-6 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 flex flex-col`}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">DASHBOARD</h2>

        <div className="flex flex-col gap-4">
          {options.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 text-lg font-medium cursor-pointer hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="text-2xl md:hidden text-white mt-auto"
        >
          <FaTimes />
        </button>
      </div>

      <div className="flex-1 p-6 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
