import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import InvalidError from "./InvalidError"; // Import the InvalidError component

const ViewMarks = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null); // State for status
  const navigate = useNavigate();

  // Fetch the list of students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/student/all-student-result");
      if (Array.isArray(response.data)) {
        const allStudentsResult = response.data;
        const allStudentsResponse = await axios.get("http://localhost:8000/api/v1/student/all-student");
        if (Array.isArray(allStudentsResponse.data)) {
          const allStudents = allStudentsResponse.data;
          const studentsWithDetails = allStudentsResult.map(studentResult => {
            const studentDetails = allStudents.find(student => student.registrationNumber === studentResult.registrationNumber);
            return {
              ...studentResult,
              name: studentDetails ? `${studentDetails.firstname} ${studentDetails.lastname}` : "Unknown",
              course: studentDetails ? studentDetails.course : "Unknown"
            };
          });
          setStudents(studentsWithDetails);
          setStatus(200); // Set status to 200 if data is fetched successfully
        } else {
          setError("Unexpected data format from all-student API");
          setStatus(null); // Reset status if there is an error
        }
      } else {
        setError("Unexpected data format from all-student-result API");
        setStatus(null); // Reset status if there is an error
      }
    } catch (error) {
      setError("Error fetching data");
      setStatus(null); // Reset status if there is an error
    } finally {
      setLoading(false);
    }
  };

  // Close the error prompt
  const closeError = () => {
    setError("");
  };

  // Handle view result button click
  const handleViewResult = async (registrationNumber) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/student/get-result/${registrationNumber}`);
      if (response.status === 200) {
        navigate(`/studentResult/${registrationNumber}`);
      } else {
        setError("Error fetching result");
      }
    } catch (error) {
      setError("Error fetching result");
    }
  };

  // Fetch students data on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  // Return loading state if applicable
  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5">
      {error && <InvalidError message={error} onClose={closeError} />}
      {!error && (
        <>
          <Link to="/dashboard">
            {/* <BackBtn /> */}
          </Link>

          <div className="bg-blue-600 rounded-t-lg p-4">
            <h2 className="text-3xl font-semibold text-center text-white">
              Offline Examination Marks
            </h2>
          </div>
          <div className="p-4">
            {status === 200 && (
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
                      <tr key={student.registrationNumber}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{student.registrationNumber}</td>
                        <td className="border px-4 py-2">{student.name}</td>
                        <td className="border px-4 py-2">{student.course}</td>
                        <td className="border px-4 py-2">
                          <button
                            onClick={() => handleViewResult(student.registrationNumber)}
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                            View Result
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewMarks;