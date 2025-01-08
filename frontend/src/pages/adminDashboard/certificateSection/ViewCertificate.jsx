import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import bgImg from "../../../assets/bg-img.png";
import bgBorder from "../../../assets/bgBorder.png"
// import BackBtn from "../BackBtnForAll/BackBtn";

const ViewCertificate = () => {
  const { registrationNumber } = useParams(); // Extracting registration number from URL params
  const [registrationNo, setRegistrationNo] = useState(""); // For manual input
  const [student, setStudent] = useState(null); // Student data
  const [marks, setMarks] = useState([]); // Marks data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [monthsOfCourse, setMonthsOfCourse] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  // Handle Registration Number Input
  const handleRegistrationNoChange = (event) => {
    setRegistrationNo(event.target.value);
  };

  // Function to compute dates when the student data is fetched
// Function to compute dates when the student data is fetched
const computeCourseDates = (createdAt, monthsOfCourse) => {
  const startDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const endDate = new Date(
    new Date(createdAt).setMonth(new Date(createdAt).getMonth() + monthsOfCourse)
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return { startDate, endDate };
};

// Fetch Student Information
const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  setError("");
  const regNoToUse = registrationNo || registrationNumber;

  if (!regNoToUse) {
    setError("Please provide a registration number.");
    setLoading(false);
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/student/one-student/${regNoToUse}`
    );
    const studentData = response.data;

    const courseDuration = parseInt(studentData.course.split(" ")[0]);
    const { startDate, endDate } = computeCourseDates(
      studentData.createdAt,
      courseDuration
    );

    // Compare last date with the present date
    const currentDate = new Date();
    const parsedLastDate = new Date(
      new Date(studentData.createdAt).setMonth(
        new Date(studentData.createdAt).getMonth() + courseDuration
      )
    );

    if (parsedLastDate >= currentDate) {
      setError("The course completion date has passed. Cannot show the result.");
      setLoading(false);
      return;
    }

    // Set valid data to state
    setStudent(studentData);
    setMonthsOfCourse(courseDuration);
    setFirstDate(startDate);
    setLastDate(endDate);
  } catch (err) {
    console.error("Error fetching student data:", err);
    setError(
      "Failed to fetch student data. Please check the registration number and try again."
    );
  } finally {
    setLoading(false);
  }
};

  // Fetch Marks Data
  useEffect(() => {
    const fetchStudentResult = async () => {
      const regNoToUse = registrationNumber || student?.registrationNumber;
      if (!regNoToUse) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/studentsResult/${regNoToUse}`
        );
        setMarks(response.data);
      } catch (error) {
        console.error("Error fetching student result data:", error);
        setError("Error fetching student result data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResult();
  }, [registrationNumber, student?.registrationNumber]);

  // PDF Download Logic
  const downloadPDF = () => {
    const certificateDiv = document.getElementById("certificateDiv");
    html2canvas(certificateDiv, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Link to="/dashboard">
        {/* <BackBtn />/ */}
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8">
        Certificate Tracking
      </h1>

      {student && (
        <button
          onClick={downloadPDF}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Download Certificate as PDF
        </button>
      )}

      {!student && (
        <div className="bg-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold text-black mb-4">
            Track Certificate
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="registrationNo"
                className="block text-black text-sm font-bold mb-2"
              >
                Registration Number *
              </label>
              <input
                type="text"
                id="registrationNo"
                value={registrationNo}
                onChange={handleRegistrationNoChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Request
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        student && (
          <div
            id="certificateDiv"
            className="relative w-[900px] h-[594px] m-20 border-2 border-gray-400"
          >
            <img
              src={bgImg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            />
            <img
              src={bgBorder}
              alt="Certificate Border"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 2 }}
            />
            <div className="relative z-10 p-8 mx-[100px] my-[180px]">
              <p className="leading-8 text-xl text-gray-700">
                This is to certify that Mr./Miss.{" "}
                <span className="text-base font-extrabold">
                  {student.firstname} {student.lastname}
                </span>
                , S/O, D/O, W/O{" "}
                <span className="text-base font-extrabold">
                  {student.fathername}
                </span>
                , with the registration number{" "}
                <span className="text-base font-extrabold">
                  {student.registrationNumber}
                </span>
                , has successfully completed the{" "}
                <span className="text-base font-extrabold">
                  {student.courseOption}
                </span>{" "}
                course during the period of{" "}
                <span className="text-base font-extrabold">
                  {firstDate} to {lastDate}
                </span>
                . The grade obtained is{" "}
                <span className="text-base font-extrabold">{marks.grade}</span>,
                with a score of{" "}
                <span className="text-base font-extrabold">
                  {marks.totalMarks} out of{" "}
                  {(marks.marksData ? marks.marksData.length : 0) * 100}
                </span>{" "}
                and with
                <span className="text-base font-extrabold">
                  {" "}
                  {marks.percentage}%
                </span>
                . The course was conducted at{" "}
                <span className="text-base font-extrabold">
                  PAWAN COMPUTER CENTER
                </span>
                .
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ViewCertificate;
