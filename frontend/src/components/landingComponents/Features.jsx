import React from "react";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 justify-center gap-6 w-full px-4 md:px-16 lg:px-32 py-4 md:py-8">
      {/* Online Billing */}
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-blue-500 mb-4">
          <FaFileInvoice />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Online Billing, Invoicing, & Contracts
        </h3>
        <p className="text-sm text-gray-600">
          Simple and secure control of your organization's financial and legal
          transactions. Send customized invoices and contracts.
        </p>
      </div>

      {/* Easy Scheduling */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-green-500 mb-4">
          <FaCalendarAlt />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Easy Scheduling & Attendance Tracking
        </h3>
        <p className="text-sm text-gray-600">
          Schedule and reserve classrooms at one campus or multiple campuses.
          Keep detailed records of student attendance.
        </p>
      </div>

      {/* Customer Tracking */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6 text-center transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-blue-700 mb-4">
          <FaUsers />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Customer Tracking
        </h3>
        <p className="text-sm text-gray-600">
          Automate and track emails to individuals or groups. Skilline's
          built-in system helps organize your organization.
        </p>
      </div>
    </div>
  );
};

export default Features;
