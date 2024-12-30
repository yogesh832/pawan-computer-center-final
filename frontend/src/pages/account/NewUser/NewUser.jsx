import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 p-24">
      {/* Main Container */}
      <div className="max-w-4xl w-full h-[550px] bg-white shadow-lg rounded-lg p-8">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Unlock Premium Courses
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Our exclusive premium courses are available only for members! Get
          access to top-notch content that will boost your skills.
        </p>
        <p className="text-md text-gray-500 text-center mb-8">
          Contact us to learn more about premium membership and how you can
          access these valuable resources.
        </p>

        {/* Benefits Section */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center text-center">
            <FaStar className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
            <p className="text-gray-600">
              Gain access to premium courses that aren't available anywhere
              else.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <Link
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
