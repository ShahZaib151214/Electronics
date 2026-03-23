import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-blue-600">
              ELECTRO<span className="text-gray-900">NICS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <FiSearch size={20} />
            </button>
            <Link to="/login" className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <FiUser size={20} />
            </Link>
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors relative">
              <FiShoppingCart size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 animate-in slide-in-from-top duration-300">
          <div className="px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-semibold ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center space-x-6 border-t border-gray-100">
              <Link to="/login" className="flex items-center space-x-2 text-gray-600">
                <FiUser size={20} />
                <span>Account</span>
              </Link>
              <button className="flex items-center space-x-2 text-gray-600">
                <FiShoppingCart size={20} />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
