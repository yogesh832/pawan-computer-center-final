import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Hero Image */}
      <img
        src={heroimg}
        alt="Hero"
        className="w-full h-full object-cover rounded-b-3xl"
      />

      <div className="absolute inset-0  rounded-b-3xl"></div>

      {/* Text Section */}
      <div className="absolute inset-0 flex items-center justify-start p-8 sm:p-16 lg:p-24 text-black">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Find Your
            <br />
            Perfect Learning
            <br />
            <span className="text-[#FF7352]">Institute</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            Unlock your potential and build job-ready skills by joining a
            premier learning institute. Take the first step towards a brighter
            career today!
          </p>
          <Link to="/contact">
            <button className="flex items-center px-6 py-3 bg-[#00cdc4] text-white rounded-full hover:bg-[#00b5a5] transition duration-300 ease-in-out text-base">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
