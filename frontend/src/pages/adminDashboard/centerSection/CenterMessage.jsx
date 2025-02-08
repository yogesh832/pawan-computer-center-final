import React, { useState, useEffect } from "react";
import Loading from "../../../components/loading/Loading"; // Adjust the path as needed

const CenterMessage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-6xl font-bold text-yellow-500 mb-4">🚧</div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Page Under Construction
        </h1>
        <p className="text-lg text-gray-600">
          This page is currently being built. Please visit again later!
        </p>
      </div>
    </div>
  );
};

export default CenterMessage;
