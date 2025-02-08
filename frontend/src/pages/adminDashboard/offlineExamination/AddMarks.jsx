import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InvalidError from "./InvalidError"; // Import the InvalidError component
import AddStudentMarks from "./AddStudentMarks"; // Import the next component

const AddMarks = () => {
  const [registrationNumber, setRegistrationNumber] = useState(""); // State for student ID
  const [error, setError] = useState(""); // State for error message
  const [status, setStatus] = useState(null); // State for status
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!registrationNumber) {
        throw new Error("Invalid registration number"); // Throw error if input is empty
      }

      // Simulate validation (e.g., length check)
      if (registrationNumber.trim().length < 6) {
        throw new Error("Registration number must be at least 6 characters long");
      }

      // Simulate API call to validate registration number
      const response = await fetch(`http://localhost:5000/validate/${registrationNumber.trim()}`);
      if (response.status === 200) {
        setStatus(200);
        navigate(`/add-marks/${registrationNumber.trim()}`); // Navigate if input is valid
      } else {
        throw new Error("Invalid registration number");
      }
    } catch (error) {
      setError(error.message || "Invalid"); // Set error message
      setStatus(null);
    }
  };

  // Close the error prompt
  const closeError = () => {
    setError("");
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
        {error && <InvalidError message={error} onClose={closeError} />}
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
              className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ${
                error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
          {!error && (
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        {status === 200 && <AddStudentMarks registrationNumber={registrationNumber} />}
      </div>
    </div>
  );
};

export default AddMarks;