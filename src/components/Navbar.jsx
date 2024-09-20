import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
