import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 w-full fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <NavLink to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors">
          DIPA SAPTAL
        </NavLink>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="font-medium text-gray-600 hover:text-yellow-600">HOME</NavLink>
          <NavLink to="/about" className="font-medium text-gray-600 hover:text-yellow-600">ABOUT</NavLink>
          <NavLink to="/projects" className="font-medium text-gray-600 hover:text-yellow-600">PROJECTS</NavLink>
          <NavLink to="/contact" className="font-medium text-gray-600 hover:text-yellow-600">CONTACT</NavLink>
          <NavLink to="/resume" className="font-medium text-gray-600 hover:text-yellow-600">RESUME</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
