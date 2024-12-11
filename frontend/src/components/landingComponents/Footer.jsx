import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#252641] text-white py-12">
      <div className="container mx-auto text-center px-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-teal-400">PCC</div>
            <p className="text-sm text-gray-400">Virtual Class for Zoom</p>
          </div>
        </div>



        {/* Footer Links */}
        <div className="mb-6">
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-teal-400">
              Careers
            </a>
            <a href="#" className="hover:text-teal-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          <p>&copy; 2021 Class Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
