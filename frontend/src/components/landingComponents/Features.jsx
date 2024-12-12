import React from "react";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";
import featureimg from "../../assets/featureimg.png";

const Features = () => {
  return (
    <div className="">
      <section className="bg-white py-12 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Our Features</h2>
            <p className="text-gray-600 mt-2">
              This very extraordinary feature can make learning activities more efficient.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-10">
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={featureimg}
                alt="Feature"
                className="w-full max-w-md rounded-lg "
              />
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">
                A user interface designed for the classroom
              </h3>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    •
                  </span>
                  Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    •
                  </span>
                  TA’s and presenters can be moved to the front of the class.
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    •
                  </span>
                  Teachers can easily see all students and class data at one time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
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
    </div>
  );
};

export default Features;
