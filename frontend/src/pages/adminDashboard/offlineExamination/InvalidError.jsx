import React from "react";

const InvalidError = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-red-600">Invalid Input</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 mt-4">{message}</p>
        <div className="mt-6 text-center">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidError;
