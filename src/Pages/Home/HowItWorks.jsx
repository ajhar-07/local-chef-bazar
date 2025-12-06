import React from 'react';
import { FaSearch, FaShoppingCart, FaMotorcycle, FaUtensils, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Framer Motion Variants
const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Animation container for staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card for Customer Flow (Striped/Primary Color)
const CustomerStepCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg h-full relative overflow-hidden bg-white border border-amber-300"
    variants={stepVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.2)' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {/* Striped Background Effect - Primary Color */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 2px, transparent 2px, transparent 8px)` }}></div>
    
    <div className="relative p-4 mb-4 rounded-full bg-emerald-500 text-white shadow-xl">
      <Icon className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{title}</h3>
    <p className="text-gray-600 flex-grow relative z-10">{description}</p>
    <div className="absolute top-2 right-4 text-4xl font-extrabold text-emerald-500 opacity-20">{index}</div>
  </motion.div>
);

// Card for Chef Flow (Clean/Secondary Color)
const ChefStepCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-2xl border-t-4 border-emerald-300 h-full"
    variants={stepVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)' }}
  >
    <div className="p-4 mb-4 rounded-full bg-emerald-500 text-white">
      <Icon className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </motion.div>
);

const HowItWorks = () => {
  const customerSteps = [
    {
      icon: FaSearch,
      title: '1. Explore Local Menus',
      description: 'Enter your location and browse daily menus from verified home chefs near you.',
    },
    {
      icon: FaShoppingCart,
      title: '2. Place & Pay Securely',
      description: 'Select your meal, check the chef\'s availability, and place your order with secure online payment.',
    },
    {
      icon: FaMotorcycle,
      title: '3. Track & Enjoy!',
      description: 'Track your order in real-time from the chef\'s kitchen to your door, then savor your homemade food.',
    },
  ];

  const chefSteps = [
    {
      icon: FaUtensils,
      title: '1. Set Your Menu & Time',
      description: 'Create your profile, post your daily or weekly menu, and set your available cooking hours.',
    },
    {
      icon: FaMoneyBillWave,
      title: '2. Receive Orders',
      description: 'Get notified of incoming orders, manage them on your dashboard, and prepare your delicious meals.',
    },
    {
      icon: FaStar,
      title: '3. Get Paid & Rated',
      description: 'Watch your earnings grow as you build a reputation with positive ratings and repeat customers.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">
            <span className="text-emerald-500">Simple Steps to Great Food</span> 
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Whether you're craving a meal or preparing one, we've simplified the process.
          </p>
        </div>

        {/* --- Customer Flow: Primary Color (Amber) & Striped Style --- */}
        <h3 className="text-3xl font-bold text-center text-emerald-300 mb-10 pt-4">
          Deliciousness Delivered
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {customerSteps.map((step, index) => (
            <CustomerStepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index + 1}
            />
          ))}
        </motion.div>

        {/* --- Chef Flow: Secondary Color (Green) & Clean Style --- */}
        <h3 className="text-3xl font-bold text-center text-emerald-300 mb-10 pt-10 border-t border-gray-200">
         Turn Your Passion into Profit
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {chefSteps.map((step, index) => (
            <ChefStepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;