import React from "react";
import whatIs1 from "../../assets/whatIs1.png";
import whatIs2 from "../../assets/whatIs2.png";

const WhatIs = () => {
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto text-center px-4 md:px-16 lg:px-8">
        <h2 className="text-[2.5rem] font-bold mb-4 text-[#FF7352]">
          What is <span className="text-[#00cdc4]">PCC</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
          PCC ( Pawan Computer Center ) is a platform that allows educators to
          create online classes whereby they can store the course materials
          online; manage assignments, quizzes, and exams; monitor due dates;
          grade results and provide students with feedback all in one place.
        </p>
        {/* Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {/* For Instructors */}
          <div className="relative rounded-lg shadow-lg overflow-hidden max-w-[600px] max-h-[400px] mx-auto">
            <img
              src={whatIs1}
              alt="Instructor"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <p className="text-3xl font-semibold">FOR INSTRUCTORS</p>
              <button className="mt-2 px-6 py-3 bg-transparent border-white border text-xl rounded-full hover:bg-white hover:text-black transition">
                Start a class today
              </button>
            </div>
          </div>

          {/* For Students */}
          <div className="relative bg-[#DFDCDC] rounded-lg shadow-lg overflow-hidden max-w-[600px] max-h-[400px] mx-auto">
            <img
              src={whatIs2}
              alt="Student"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <p className="text-3xl font-semibold">FOR STUDENTS</p>
              <button className="mt-2 px-6 py-3 bg-[#00cdc4] text-white text-xl rounded-full hover:bg-[#00b5a5] transition">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
