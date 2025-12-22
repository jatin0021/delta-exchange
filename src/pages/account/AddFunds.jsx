import React from "react";

const AddFunds = ({ mode }) => {
  return (
    <div className={`h-[calc(100vh-60px)] overflow-y-auto p-4 ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Banner Message */}
      <div className={`text-center text-sm md:text-base font-medium py-3 rounded-md shadow-sm border ${
        mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-100 border-gray-200"
      }`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          Complete identity verification to add funds
        </span>
      </div>

      {/* Placeholder content for future use */}
      <div className={`flex flex-col items-center justify-center mt-20 ${
        mode === "dark" ? "text-gray-500" : "text-gray-400"
      }`}>
        <p className="text-sm">
          Add Funds section will be available after verification.
        </p>
      </div>
    </div>
  );
};

export default AddFunds;
