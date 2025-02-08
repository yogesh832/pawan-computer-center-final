import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import AdminPanel from "./AdminPanel";
import Loading from "../../../components/loading/Loading"; // Adjust the path as needed

const DashboardUI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // New states for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleResize = () => {
    // Check if the screen width is less than the "md" breakpoint (768px)
    const isMobile = window.innerWidth < 768;
    setIsMobileView(isMobile);

    if (!isMobile) {
      setIsSidebarOpen(true); // Open sidebar on larger screens
    } else {
      setIsSidebarOpen(false); // Close sidebar on smaller screens
    }
  };

  useEffect(() => {
    handleResize(); // Set initial view state
    window.addEventListener("resize", handleResize); // Listen for screen resizing

    // Simulate a loading delay of 1 second.
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment the next line to simulate an error:
      // setError("An error occurred while loading the dashboard.");
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const toggleSidebar = () => {
    if (isMobileView) {
      setIsSidebarOpen(!isSidebarOpen); // Toggle only in mobile view
    }
  };

  // Render the loading spinner if still loading
  if (loading) {
    return (
      <div className="text-center py-5">
        <Loading />
      </div>
    );
  }

  // Render an error message if an error exists
  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render the dashboard UI when loading is complete and no error exists
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Hamburger icon for mobile */}
      {isMobileView && (
        <div className="flex justify-end md:hidden p-4 bg-gray-800 text-white">
          <button onClick={toggleSidebar} className="text-2xl">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-full md:w-[45%] xl:w-[20%] bg-gray-900 min-h-screen">
          <Sidebar />
        </div>
      )}

      {/* Admin Panel */}
      <div className="flex-grow bg-white p-4">
        <AdminPanel />
      </div>
    </div>
  );
};

export default DashboardUI;
