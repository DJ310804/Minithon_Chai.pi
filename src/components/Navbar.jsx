import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md transition duration-500 ease-in-out hover:bg-blue-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-white">MyApp</div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white transition duration-300 ease-in-out hover:text-gray-200">Home</Link>
          <Link to="/page1" className="text-white transition duration-300 ease-in-out hover:text-gray-200">Page1</Link>
          <Link to="/login" className="text-white transition duration-300 ease-in-out hover:text-gray-200">Login</Link>
          <Link to="/profile" className="text-white transition duration-300 ease-in-out hover:text-gray-200">Profile</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
