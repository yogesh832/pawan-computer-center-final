import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleButtonClick = () => {
    // Close the menu after clicking Register or Sign In button
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    // Toggle the menu visibility for mobile view
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f3f2f8] px-5 flex justify-between items-center py-4">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-24" />
        </Link>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          About
        </Link>
        <Link
          to="/course"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Courses
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/gallery"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Gallery
        </Link>
      </div>

      {/* Register and Sign In Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/signup"
          className="w-32 px-4 py-2 bg-[#00cdc4] text-white text-center rounded-3xl hover:bg-[#00b5a5] text-sm transition duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          Register Now
        </Link>
        <Link
          to="/login"
          className="w-32 px-4 py-2 bg-[#ffffff] text-gray-700 text-center rounded-3xl hover:bg-gray-200 text-sm transition duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700">
          <span className="material-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-[#f3f2f8] py-4 flex flex-col items-center space-y-4">
          <Link
          to="/"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          About
        </Link>
        <Link
          to="/course"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Courses
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/gallery"
          className="text-gray-700 hover:text-[#00cdc4] transition-colors"
        >
          Gallery
        </Link>

          <Link to="/signup">
            <button
              className="w-32 px-4 py-2 bg-[#00cdc4] text-white text-center rounded-3xl text-sm transition duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              Register Now
            </button>
          </Link>

          <Link to="/login">
            <button
              className="w-32 px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-3xl hover:bg-gray-200 text-sm transition duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
