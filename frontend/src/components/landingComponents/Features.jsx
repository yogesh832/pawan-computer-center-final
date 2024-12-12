import React from "react";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 md:px-16 lg:px-32 py-4 md:py-8 w-full">
      {/* Heading and Description */}
      <div className="text-center">
        <h2 className="text-[2.5rem] font-bold mb-4 mt-32">
          <span className="text-[#FF7352]">All-In-One </span>{" "}
          <span className="text-[#00cdc4]"> Cloud Software</span>
        </h2>
        <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto mt-4">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
        {/* Online Billing */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center text-4xl text-blue-500 mb-4 bg-blue-100 rounded-full p-4">
            <FaFileInvoice />
          </div>
          <h3 className="text-2xl font-semibold text-[#FF7352] mb-2">
            Online Billing, Invoicing, & Contracts
          </h3>
          <p className="text-lg text-gray-600">
            Simple and secure control of your organization's financial and legal
            transactions. Send customized invoices and contracts.
          </p>
        </div>

        {/* Easy Scheduling */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center text-4xl text-green-500 mb-4 bg-green-100 rounded-full p-4">
            <FaCalendarAlt />
          </div>
          <h3 className="text-2xl	 font-semibold text-[#FF7352] mb-2">
            Easy Scheduling & Attendance Tracking
          </h3>
          <p className="text-lg text-gray-600 ">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance.
          </p>
        </div>

        {/* Customer Tracking */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center text-4xl text-blue-700 mb-4 bg-blue-100 rounded-full p-4">
            <FaUsers />
          </div>
          <h3 className="text-2xl	 font-semibold text-[#FF7352] mb-2">
            Customer Tracking
          </h3>
          <p className="text-lg text-gray-600">
            Automate and track emails to individuals or groups. Skilline's
            built-in system helps organize your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
