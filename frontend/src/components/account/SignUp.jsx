import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi";
import "react-toastify/dist/ReactToastify.css";
import loginimg from "../../assets/loginpage.png";
import Loading from "../../components/loading/Loading"; // Adjust the path if needed

const SignUp = () => {
  // Page-level loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state for sign up info
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Joi schema for validation
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be less than 100 characters long",
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

  // Simulate a loading delay on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error on page load:
      // setError("An error occurred while loading the sign up page.");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for sign up
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate the form data
    const { error: validationError } = schema.validate(signUpInfo, { abortEarly: false });
    if (validationError) {
      validationError.details.forEach((err) => toast.error(err.message));
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpInfo),
      });

      const result = await response.json();

      console.log("Response:", response);
      console.log("Result:", result);

      if (!response.ok) {
        return toast.error(result.message || "Sign up failed. Please try again.");
      }

      toast.success("Sign up successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.error("Error:", err);
      toast.error("Sign up failed. Please try again.");
    }
  };

  // If still loading, show the spinner
  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  // If an error exists, show the error message
  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render the sign-up form once loading is complete and no error exists
  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-10 mb-5">Sign Up Now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen">
        <div className="w-full md:w-1/2 p-6">
          <img src={loginimg} alt="Sign Up" className="w-full max-w-md mx-auto" />
        </div>

        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={signUpInfo.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={signUpInfo.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={signUpInfo.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up Now
          </button>

          <p className="text-center mt-4">Already have an account?</p>
          <Link to="/login" className="w-full">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
