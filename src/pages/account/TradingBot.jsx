import React from "react";

const TradingBot = ({ mode }) => {
  return (
    <div className={`h-full overflow-y-auto ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Top Banner */}
      <div 
        className={`border rounded-md mx-4 mt-4 text-center py-3 ${
          mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-100 border-gray-200"
        }`}
      >
        <p className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
          Complete identity verification to access Trade Bot features
        </p>
      </div>

      {/* Empty content area */}
      <div className={`flex justify-center items-center h-[calc(100vh-200px)] ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>
        <p className="text-sm">No trade bot activity available</p>
      </div>
    </div>
  );
};

export default TradingBot;
