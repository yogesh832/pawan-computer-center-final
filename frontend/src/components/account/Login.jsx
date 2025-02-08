import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios
import loginimg from "../../assets/loginpage.png";
import Loading from "../../components/loading/Loading"; // Adjust the path as needed

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    registration: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Page-level loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate a loading delay of 1 second on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error on page load:
      // setError("An error occurred while loading the login page.");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Define the schema for validation using Joi
  const schema = Joi.object({
    registration: Joi.string().min(7).max(100).allow("").optional().messages({
      "string.min": "Registration number must be at least 7 characters long",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
      }),
    password: Joi.string().min(4).max(100).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 4 characters long",
    }),
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate the form data
    const { error: validationError } = schema.validate(loginInfo, { abortEarly: false });
    if (validationError) {
      validationError.details.forEach((err) => toast.error(err.message));
      return;
    }

    try {
      console.log("Submitting login info:", loginInfo);
      // Use axios to send the login info
      const response = await axios.post("http://localhost:8000/api/v1/login", loginInfo);
      const result = response.data;

      if (!response.status === 200) {
        toast.error(result.message || "Login failed. Please check your credentials.");
        return;
      }

      toast.success("Login successful");
      localStorage.setItem("token", result.token);
      localStorage.setItem("loggedInUser", result.name);

      // Navigate based on whether a registration number is provided
      if (loginInfo.registration) {
        navigate(`/student/${loginInfo.registration}`, { replace: true });
      } else {
        navigate(`/newuser`, { replace: true });
      }
    } catch (err) {
      console.error("Error during login:", err);
      toast.error("Login failed. Please try again.");
    }
  };

  // Render a loading spinner if still loading
  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  // Render an error message if there's a page-level error
  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render the login form once loading is complete and there's no error
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mt-10 mb-5">Login Now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
        <div className="w-full md:w-1/2 p-6">
          <img src={loginimg} alt="loginimg" className="w-full max-w-md mx-auto" />
        </div>

        <form
          onSubmit={handleLogin}
          className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="registration"
            value={loginInfo.registration}
            onChange={handleChange}
            placeholder="Registration No. (if any)"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Login
          </button>

          <p className="text-center mt-4">Don't have an account?</p>
          <Link to="/signup">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Sign Up Now
            </button>
          </Link>

          <p className="text-center mt-4">Only for Admin</p>
          <Link to="/admin">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Click Here
            </button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
