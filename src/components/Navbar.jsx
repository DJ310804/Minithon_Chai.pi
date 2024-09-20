import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png'; // Make sure to replace this with the actual path to your logo

const Navbar = () => {
  return (
<<<<<<< HEAD
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md transition duration-500 ease-in-out hover:bg-blue-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold text-white">MyApp</div>
          <div className="flex items-center space-x-4">
            {/* Sidebar toggle button */}
            <label
              htmlFor="my-drawer-4"
              className="btn btn-primary text-white transition duration-300 ease-in-out hover:bg-blue-500"
            >
              Announcements
            </label>

            {/* Links */}
            <Link to="/" className="text-white transition duration-300 ease-in-out hover:text-gray-200">
              Home
            </Link>
            <Link to="/page1" className="text-white transition duration-300 ease-in-out hover:text-gray-200">
              Page1
            </Link>
            <Link to="/login" className="text-white transition duration-300 ease-in-out hover:text-gray-200">
              Login
            </Link>
            <Link to="/profile" className="text-white transition duration-300 ease-in-out hover:text-gray-200">
              Profile
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Right Drawer */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* Open drawer button is already included in the Navbar */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a href="#">Addmissions starting from 3rd October</a></li>
            <li><a href="#">IEEE hackathon on 28th September</a></li>
          </ul>
=======
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
>>>>>>> 72a471b6da5fc1f9c6ee153a5953aced46529d28
        </div>
      </div>
    </>
  );
};

export default Navbar;
