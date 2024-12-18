import React from "react";
import { Link } from "react-router-dom";

const MiniAboutUs = () => {
  return (
    <section className="py-24 relative bg-gray-50">
      <div className="max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-last lg:order-first">
            <div className="pt-24 lg:justify-center sm:justify-end flex">
              <img
                className="rounded-xl object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Us"
              />
            </div>
            <img
              className="rounded-xl object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="About Us"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-10 lg:items-start items-center text-center lg:text-left">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 text-4xl font-bold leading-tight">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-600 text-base font-light leading-relaxed">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex justify-center lg:justify-start gap-12">
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-gray-900 text-4xl font-bold">33+</h3>
                  <p className="text-gray-500 text-sm">Years of Experience</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-gray-900 text-4xl font-bold">125+</h3>
                  <p className="text-gray-500 text-sm">Successful Projects</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-gray-900 text-4xl font-bold">52+</h3>
                  <p className="text-gray-500 text-sm">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
           <Link to={"miniaboutus"}> <button className="w-fit px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out">
              Read More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAboutUs;
