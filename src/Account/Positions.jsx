import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const Positions = ({ mode }) => {
  const [activeView, setActiveView] = useState("Standard");

  return (
    <div className={`flex flex-col h-full w-full ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"}`}>
      {/* Header Buttons */}
      <div className="flex items-center gap-3 p-4">
        <button
          onClick={() => setActiveView("Standard")}
          className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${
            activeView === "Standard"
              ? "border-orange-500 " + (mode === "dark" ? "text-gray-100" : "text-black")
              : (mode === "dark" ? "border-gray-600 text-gray-400 hover:text-gray-200" : "border-gray-200 text-gray-400 hover:text-gray-600")
          }`}
        >
          Standard View
        </button>
        <button
          onClick={() => setActiveView("Risk")}
          className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${
            activeView === "Risk"
              ? "border-orange-500 " + (mode === "dark" ? "text-gray-100" : "text-black")
              : (mode === "dark" ? "border-gray-600 text-gray-400 hover:text-gray-200" : "border-gray-200 text-gray-400 hover:text-gray-600")
          }`}
        >
          Risk View
        </button>
      </div>

      {/* Main Empty State */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <FaRegFileAlt className={`text-5xl mb-3 ${mode === "dark" ? "text-gray-500" : "text-gray-700"}`} />
        <p className={`text-base ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>No open positions</p>
      </div>
    </div>
  );
};

export default Positions;
