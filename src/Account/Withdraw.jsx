import React from "react";

const Withdraw = ({ mode }) => {
  return (
    <div className={`h-screen overflow-y-auto ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Top Banner */}
      <div className={`border rounded-md mx-4 mt-4 text-center py-3 ${
        mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-100 border-gray-200"
      }`}>
        <p className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          Complete identity verification to enable withdrawals
        </p>
      </div>

      {/* Empty content area */}
      <div className={`flex justify-center items-center h-[80vh] ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>
        <p className="text-sm">No content available yet</p>
      </div>
    </div>
  );
};

export default Withdraw;
