import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white py-10 mt-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">ChefBazar</h2>
          <p className="mt-3 text-gray-200">
            Fresh meals, premium taste, and daily food solutions designed for you.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-200 transition">Home</li>
            <li className="hover:text-gray-200 transition">Meals</li>
            <li className="hover:text-gray-200 transition">Dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-200 transition">Help Center</li>
            <li className="hover:text-gray-200 transition">Contact Us</li>
            <li className="hover:text-gray-200 transition">Terms & Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-200 mb-3">
            Subscribe to get updates on new meals and offers.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded-l-lg text-black"
            />
            <button className="bg-white text-emerald-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-emerald-500 mt-10 pt-5 text-center text-gray-200">
        © {new Date().getFullYear()} ChefBazar — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
