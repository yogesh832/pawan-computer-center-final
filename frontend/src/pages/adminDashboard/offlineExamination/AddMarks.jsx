// AddMarks.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import BackBtn from "../BackBtnForAll/BackBtn";
import { Link } from "react-router-dom";

const AddMarks = () => {
  const [registrationNumber, setRegistrationNumber] = useState(""); // State for student ID
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registrationNumber) {
      navigate(`/add-marks/${registrationNumber}`); // Add leading slash to the path
    }
  };
  

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg m-5">
      <Link to="/dashboard"> 
      {/* <BackBtn /> */}
      </Link>
      <div className="bg-blue-600 rounded-t-lg p-4">
        <h2 className="text-3xl font-semibold text-center text-white">
          Offline Examination
        </h2>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="registrationNumber"
            >
              Student ID<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="registrationNumber"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarks;
