import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backnav bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                TravelNow
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:ml-6">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-white hover:text-blue-600 px-3 py-2 text-lg font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white hover:text-blue-600 px-3 py-2 text-lg font-medium">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white hover:text-blue-600 px-3 py-2 text-lg font-medium">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-white hover:text-blue-600 px-3 py-2 text-lg font-medium">
                  Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              onClick={toggleMenu}
              className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Destinations
            </Link>
            <Link 
              to="/tours" 
              onClick={toggleMenu}
              className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Tours
            </Link>
            <Link 
              to="/bookings" 
              onClick={toggleMenu}
              className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Bookings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
