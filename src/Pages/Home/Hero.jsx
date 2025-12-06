import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className=" mt-5 relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/SXnfkBcT/Adobe-Stock-278693728-Preview.jpg')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl "></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-emerald-500">ChefBazar</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
         Chef Bazaar is a modern online platform that connects home cooks with people looking for fresh, homemade food.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            View Meals
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-emerald-500 text-emerald-500 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition"
          >
           Become a Chef
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
