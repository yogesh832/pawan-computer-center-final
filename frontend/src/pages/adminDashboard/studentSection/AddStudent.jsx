import React, { useEffect,useState } from "react";
import axios from "axios";
// import BackBtn from "../BackBtnForAll/BackBtn";
// import { Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading"

const AddStudent = () =>{
    
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    state: "",
    district: "",
    course: "",
    courseOption: "",
    mothername: "",
    fathername: "",
    qualification: "",
    contactno: "",
    guardiancontact: "",
    adhar: "",
    gender: "",
    category: "",
    religion: "",
    maritalstatus: "",
    address: "",
    presentaddress: "",
    photo: null,
    signature: null,
    marksheet: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("");


  const courseOptions = {
    "": [],
    "1 Month Certificate Course": [
      "CERTIFICATE IN FUNDAMENTAL(RV01001)",
      "CERTIFICATE IN MS EXCEL(RV01003)",
      "CERTIFICATE IN MS POWER POINT(RV01004)",
      "CERTIFICATE IN MS WORD(RV01002)",
    ],
    "3 Months Certificate Course": [
      "Advanced Level Graphic Design(RV03039)",
      "Advanced Level Video Production(RV03040)",
      "CERTIFICATE IN ADOBE IN-DESIGN(RV03023)",
      "CERTIFICATE IN ADOBE PREMIER(RV03012)",
      "CERTIFICATE IN AJAX(RV03026)",
      "CERTIFICATE IN ASP.NET, ADO.NET(RV03019)",
      "CERTIFICATE IN AUTOCAD [2D & 3D](RV03032)",
      "CERTIFICATE IN C(RV03018)",
      "CERTIFICATE IN C ++(RV03020)",
      "CERTIFICATE IN COMPUTER BASIC(RV03003)",
      "CERTIFICATE IN CORE JAVA(RV03033)",
      "CERTIFICATE IN COREL DRAW(RV03011)",
      "CERTIFICATE IN DOTNET PROGRAMMING(RV03038)",
      "CERTIFICATE IN DREAMWEAVER(RV03017)",
      "CERTIFICATE IN ENGLISH & REGIONAL LANGUAGE $ TYPING(RV03036)",
      "CERTIFICATE IN EXCEL(RV03041)",
      "CERTIFICATE IN HINDI TYPING(RV03006)",
      "CERTIFICATE IN HTML(RV03027)",
      "CERTIFICATE IN ILLUSTRATOR(RV03024)",
      "CERTIFICATE IN SERVLET, JSP, JDBC(RV03029)",
      "CERTIFICATE IN SOUND FORGE(RV03015)",
      "CERTIFICATE IN SPOKEN ENGLISH(RV03004)",
      "CERTIFICATE IN VISUAL BASIC(RV03028)",
      "CERTIFICATE COURSE IN REVIT ARCHITECTURE(RVV03008)",
      "CERTIFICATE IN 3D STUDIO MAX(RV03013)",
      "CERTIFICATE IN AFTER EFFECTS(RV03014)",
      "DIPLOMA IN COMPUTER APPLICATION(RV03001)",
    ],
    "6 Months Certificate Course": [
      "DIPLOMA IN MOBILE REPAIRING & SOFTWARE INSTALLATION(RVV06021)",
      "CERTIFICATE IN COMPUTER BASIC AND TALLY(RV06016)",
      "CERTIFICATE IN ENGLISH AND HINDI TYPING(RV06018)",
      "DIPLOMA IN BASIC MULTIMEDIA(RV06011)",
      "DIPLOMA IN COMPUTER APPLICATION ACCOUNTING(RV06009)",
      "DIPLOMA IN COMPUTER PROGRAMMING(RV06007)",
      "DIPLOMA IN DESK TOP PUBLISHING(RV06003)",
      "CERTIFICATE IN COMPUTER APPLICATION(RV06017)",
      "CERTIFICATE IN DECORATIVE PAINTINGS(RVV06045)",
      "Certificate in Digital Marketing(RV06020)",
      "CERTIFICATE IN GRAPHIC DESIGNING(RV06014)",
      "TO WEAR WITH ANGELA WOLF (RVV06006)",
      "DIPLOMA IN WEB TECHNOLOGY(RV06006)",
    ],
    "12 Months Advance Diploma Course": [
      "ADVANCE DIPLOMA IN COMPUTER APPLICATION(RV18001)",
      "Master Diploma in Computer information(EV18002)",
    ],
    "12 Months Diploma Course": [
      "Advance Diploma in Barbering(RVV24004)",
      "ADVANCE DIPLOMA IN COMPUTER HARDWARE & NETWORKING ENGINEERING(RV24003)",
      "ADVANCE DIPLOMA IN FINANCIAL ACCOUNTING(RV24006)",
      "ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY(RV24004)",
      "ADVANCE DIPLOMA IN NURSERY TEACHER TRAINNING(RVV24001)",
      "Diploma in Computer Application (RV24005)",
      "UNDER GRADUATE DIPLOMA IN FASHION DESIGNING(RVV24006)",
      "POST GRADUATE DIPLOMA IN INFORMATION TECHNOLOGY(RV24001)",
    ],
    "12 Months Health Care Course": [
      "Health Care",
      "Health Care",
    ],
    "24 Months Health Care Course": [
      "Health Care",
      "Health Care",
    ],
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];


 // Simulate an initial loading delay of 1 second
 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);
  return () => clearTimeout(timer);
}, []);
  

  


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "course") {
      setSelectedCourse(value);
      setFormData({ ...formData, course: value, courseOption: "" });
    }
      const file = e.target.files[0]; // Get the uploaded file
  const maxFileSize = 1 * 1024 * 1024; // 1MB size limit
  const fieldName = e.target.name; // Identify which field triggered the change

  if (!file) return; // No file selected, exit early

  if (file.size > maxFileSize) {
    alert(`${fieldName} file size must be less than 1MB.`);
    e.target.value = ""; // Clear the invalid file
    return;
  }

 

  // Handle the valid file (e.g., store in state or upload directly)
  console.log(`${fieldName} is valid. File size: ${file.size / 1024 / 1024} MB`);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add additional validation logic here if needed

    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      }

      console.log("Submitting form data:", data);

      const response = await axios.post(
        "http://localhost:8000/api/v1/student/add-student",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from server:", response.data);

      setFormData({
        firstname: "",
        lastname: "",
        dob: "",
        state: "",
        district: "",
        course: "",
        courseOption: "",
        mothername: "",
        qualification: "",
        contactno: "",
        guardiancontact: "",
        adhar: "",
        gender: "",
        category: "",
        religion: "",
        maritalstatus: "",
        address: "",
        presentaddress: "",
        photo: null,
        signature: null,
        marksheet: null,
      });
      setError("");
    } catch (error) {
      setError("Failed to add student. Please try again.");
      console.error("Axios Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <div className="container mx-auto p-4">
    {loading ? (
      // Display the full-page loading spinner
      <p className="text-center py-5">
        <Loading />
      </p>
    ) : error ? (
      // Display an error message if one exists
      <p className="text-center py-5 text-red-500">{error}</p>
    ) : (
      // Otherwise, display the Add Student form
      <>
      <h1 className="text-2xl font-semibold mb-4">Add Student</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700"
              >
                District:
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Course:
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Course</option>
                <option value="1 Month Certificate Course">
                  1 Month Certificate Course
                </option>
                <option value="3 Months Certificate Course">
                  3 Months Certificate Course
                </option>
                <option value="6 Months Certificate Course">
                  6 Months Certificate Course
                </option>
                <option value="12 Months Diploma Course">
                12 Months Diploma Course
                </option>
                <option value="12 Months Advance Diploma Course">
                12 Months Advance Diploma Course
                </option>
                {/* <option value="24 Months Diploma Course">
                24 Months Diploma Course
                </option> */}
                <option value="12 Months Health Care Course">
                12 Months Health Care Course
                </option>
                <option value="24 Months Health Care Course">
                24 Months Health Care Course
                </option>
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="courseOption"
                className="block text-sm font-medium text-gray-700"
              >
                Course Option:
              </label>
              <select
                id="courseOption"
                name="courseOption"
                value={formData.courseOption}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
                disabled={!selectedCourse}
              >
                <option value="">Select Course Option</option>
                {courseOptions[selectedCourse]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="mothername"
                className="block text-sm font-medium text-gray-700"
              >
                Mother's Name:
              </label>
              <input
                type="text"
                id="mothername"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="fathername"
                className="block text-sm font-medium text-gray-700"
              >
                Father's Name:
              </label>
              <input
                type="text"
                id="fathername"
                name="fathername"
                value={formData.fathername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification:
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="contactno"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number:
              </label>
              <input
                type="tel"
                id="contactno"
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="guardiancontact"
                className="block text-sm font-medium text-gray-700"
              >
                Guardian's Contact:
              </label>
              <input
                type="tel"
                id="guardiancontact"
                name="guardiancontact"
                value={formData.guardiancontact}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="adhar"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhaar Number:
              </label>
              <input
                type="text"
                id="adhar"
                name="adhar"
                value={formData.adhar}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-700"
              >
                Religion:
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="maritalstatus"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status:
              </label>
              <select
                id="maritalstatus"
                name="maritalstatus"
                value={formData.maritalstatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Marital Status</option>
                {maritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Permanent Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              ></textarea>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="presentaddress"
                className="block text-sm font-medium text-gray-700"
              >
                Present Address:
              </label>
              <textarea
                id="presentaddress"
                name="presentaddress"
                value={formData.presentaddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              ></textarea>
            </div>




{/* img upload */}
            <div className="w-full md:w-1/2 px-4 mb-4">
            <p className="text-blue-500 text-sm"><span className="text-red-500">NOTE:</span>Images must be less then 1 MB each</p>
      <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
        Upload Photo:
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        accept="image/*"
      />
    </div>

    <div className="w-full md:w-1/2 px-4 mb-4">
      <label
        htmlFor="signature"
        className="block text-sm font-medium text-gray-700"
      >
        Upload Signature:
      </label>
      <input
        type="file"
        id="signature"
        name="signature"
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        accept="image/*"
      />
    </div>

    <div className="w-full md:w-1/2 px-4 mb-4">
      <label
        htmlFor="marksheet"
        className="block text-sm font-medium text-gray-700"
      >
        Upload Marksheet:
      </label>
      <input
        type="file"
        id="marksheet"
        name="marksheet"
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        accept="image/*,application/pdf"
      />
    </div>




            <div className="w-full px-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Student"}
              </button>
            </div>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        </>
      )}
    </div>
  );
};

export default AddStudent;