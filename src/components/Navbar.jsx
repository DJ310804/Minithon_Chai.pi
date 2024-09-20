import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 py-2.5 dark:bg-gray-900 dark:border-gray-700 transition duration-500 ease-in-out">
        <div className="flex justify-between items-center max-w-screen-xl px-4 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SPIT Connect Logo" className="h-10 mr-2" /> {/* Adjust height as needed */}
            <span className="text-xl font-semibold text-gray-800 dark:text-white">SPIT Connect</span>
          </div>

          {/* Navigation Links in the Center */}
          <div className="flex-grow flex justify-center">
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link to="/track-transport" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Track your transport</Link>
              <Link to="/cafeteria" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Cafeteria</Link>
            </div>
          </div>

          {/* Right Section: Theme Toggle and Login */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Login</Link>
          </div>
        </div>
      </nav> {/* Closing tag added here */}
    </>
  );
};

export default Navbar;

