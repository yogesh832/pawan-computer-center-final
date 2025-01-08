import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import BackBtn from "../BackBtnForAll/BackBtn";

const ViewMarks = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the list of students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/student/all-student");
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setError("Unexpected data format");
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch students data on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  // Return loading or error state if applicable
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5">
      <Link to="/dashboard">
        {/* <BackBtn /> */}
      </Link>

      <div className="bg-blue-600 rounded-t-lg p-4">
        <h2 className="text-3xl font-semibold text-center text-white">
          Offline Examination Marks
        </h2>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Sl.No.</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Student Registration Number</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Student Name</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Course</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Result</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{student.registrationNumber}</td>
                  <td className="border px-4 py-2">
                    {student.firstname} {student.lastname}
                  </td>
                  <td className="border px-4 py-2">{student.course}</td>
                  <td className="border px-4 py-2">
                    <Link to={`/studentResult/${student.registrationNumber}`}>
                      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        View Result
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewMarks;
