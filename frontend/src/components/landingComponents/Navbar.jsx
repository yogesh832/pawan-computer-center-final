import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md"; // Close icon from React Icons
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#f3f2f8] px-5 flex justify-between items-center py-4 relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-24" />
          <span className=" text-lg font-semibold text-gray-800">
            PAWAN COMPUTER CENTER
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
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

      {/* Desktop Buttons */}
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
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <MdClose className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-32 left-0 w-full bg-[#f3f2f8] py-4 flex flex-col items-center space-y-4 shadow-lg z-50"
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-[#00cdc4] transition-colors"
            onClick={handleButtonClick}
          >
            Home
          </Link>
          <hr className="w-full border-gray-300" />
          <Link
            to="/about"
            className="text-gray-700 hover:text-[#00cdc4] transition-colors"
            onClick={handleButtonClick}
          >
            About
          </Link>
          <hr className="w-full border-gray-300" />
          <Link
            to="/course"
            className="text-gray-700 hover:text-[#00cdc4] transition-colors"
            onClick={handleButtonClick}
          >
            Courses
          </Link>
          <hr className="w-full border-gray-300" />
          <Link
            to="/contact"
            className="text-gray-700 hover:text-[#00cdc4] transition-colors"
            onClick={handleButtonClick}
          >
            Contact
          </Link>
          <hr className="w-full border-gray-300" />
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-[#00cdc4] transition-colors"
            onClick={handleButtonClick}
          >
            Gallery
          </Link>
          <hr className="w-full border-gray-300" />
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
              className="w-32 px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-3xl hover:bg-gray-300 text-sm transition duration-300 ease-in-out"
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
