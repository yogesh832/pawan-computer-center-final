// ProgressBar.js
import React from "react";

const ProgressBar = ({ currentDay, totalDays }) => {
  const percentage = (currentDay / totalDays) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 relative">
      <div
        className="bg-green-500 h-full rounded-full flex items-center justify-center transition-all"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-white font-bold">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
