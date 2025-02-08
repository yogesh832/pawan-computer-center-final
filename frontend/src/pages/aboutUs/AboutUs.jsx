import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading"; // Adjust the path if needed

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Default to null

  useEffect(() => {
    // Simulate a loading delay of 1 second.
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error:
      // setError("An error occurred while loading About Us content.");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // If still loading, show the spinner.
  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  // If there's an error, show the error message.
  if (error) {
    return <p className="text-center py-5 text-red-500">{error}</p>;
  }

  // Render the About Us content once loading is done and no error exists.
  return (
    <div className="py-16 px-6 md:px-32">
      <div className="container mx-auto">
        <h2 className="text-[3rem] font-bold text-center mb-8 text-[#FF7352]">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-7 max-w-4xl mx-auto text-center mb-8">
          Welcome to our learning platform, where curiosity meets knowledge.
          We are committed to empowering learners with high-quality courses,
          expert guidance, and hands-on learning experiences. Our mission is
          to make learning accessible and engaging for everyone, fostering
          personal and professional growth. Join us to explore, learn, and
          succeed in your journey toward excellence.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#FF7352]">Our Vision</h3>
            <p className="text-gray-600 leading-6">
              To be a global leader in education by providing transformative
              learning experiences that inspire innovation and creativity.
            </p>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#00cdc4]">Our Mission</h3>
            <p className="text-gray-600 leading-6">
              To empower individuals with the knowledge and skills needed to
              achieve their goals and contribute meaningfully to society.
            </p>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#FF7352]">Our Values</h3>
            <p className="text-gray-600 leading-6">
              Innovation, inclusivity, integrity, and lifelong learning are
              at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
