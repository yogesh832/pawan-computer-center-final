import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Gloria Rose",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual images
      text: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."`,
      rating: 5,
      reviews: "12 reviews at Yelp",
    },
    {
      name: "John Smith",
      image: "https://randomuser.me/api/portraits/men/45.jpg", // Replace with actual images
      text: `"TOTC has revolutionized the way we approach online learning. It's an incredibly helpful tool that has helped us increase efficiency and engagement."`,
      rating: 5,
      reviews: "20 reviews at Google",
    },
    {
      name: "Emily Adams",
      image: "https://randomuser.me/api/portraits/women/46.jpg", // Replace with actual images
      text: `"A fantastic platform that has made our online classes more engaging and organized. I highly recommend it for both teachers and students!"`,
      rating: 5,
      reviews: "8 reviews at Yelp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section (Text and Button) */}
        <div className="mb-6 md:mb-0 w-full md:w-1/2">
          <div className="flex items-center">
            <hr className="w-28 border-t-2 border-[#00cdc4]" />
            <p className="text-center font-semibold text-[#FF7352]">
              TESTIMONIAL
            </p>
            <hr className="w-28 border-t-2 border-[#00cdc4]" />
          </div>

          <h2 className="text-5xl font-bold text-[#00cdc4] mb-4 mt-6">
            What They Say?
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Are you too? Please give your assessment
          </p>
          <button className="bg-teal-400 text-white px-6 py-2 rounded-md hover:bg-teal-500">
            Write your assessment
          </button>
        </div>

        {/* Right Section (Carousel for Image and Testimonial) */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="h-48 w-48 rounded-full object-cover"
              />
            </div>
            <div className="bg-white shadow-xl p-6 rounded-lg w-full max-w-xs">
              <p className="text-gray-800 font-semibold mb-2">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {testimonials[currentIndex].name}
              </p>
              <div className="flex items-center text-yellow-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {testimonials[currentIndex].reviews}
              </p>
            </div>
            <div className="flex justify-between mt-4 w-full">
              <button
                onClick={prevTestimonial}
                className="text-teal-400 hover:text-teal-500"
              >
                Previous
              </button>
              <button
                onClick={nextTestimonial}
                className="text-teal-400 hover:text-teal-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
