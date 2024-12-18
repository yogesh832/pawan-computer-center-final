import React from "react";

const Courses = () => {
  const courses = [
    {
      duration: "1 Month",
      features: ["Basic content access", "Community support"],
      link: "/one",
    },
    {
      duration: "3 Months",
      features: [
        "Premium content",
        "Access to Q&A sessions",
        "Exclusive webinars",
      ],
      link: "/three",
    },
    {
      duration: "6 Months",
      features: ["All Premium content", "1-on-1 mentoring", "Project reviews"],
      link: "/six",
    },
    {
      duration: "12 Months",
      features: ["Full Course Access", "All mentoring", "Unlimited reviews"],
      link: "/twelve",
    },
    {
      duration: "18 Months",
      features: [
        "Extended support",
        "Priority content",
        "Unlimited mentorship",
      ],
      link: "/eighteen",
    },
    {
      duration: "24 Months",
      features: ["Lifetime Access", "Priority Q&A", "Exclusive content"],
      link: "/twentyfour",
    },
  ];

  return (
    <div className="bg-gray-100 p-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Choose Your Course Duration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                {course.duration}
              </h3>
              <ul className="text-gray-700 mb-6 space-y-2">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href={course.link}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Check Out
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
