import React, { useState, useEffect } from "react";
import Courses from "../../components/courses/Courses";
import Loading from "../../components/loading/Loading"; // Adjust the path as needed

const Course = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Default error is null

  useEffect(() => {
    // Simulate a loading delay of 1 second.
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error:
      // setError("An error occurred while loading courses.");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p className="text-center py-5 text-red-500">{error}</p>;
  }

  return <Courses />;
};

export default Course;
