import React, { useContext } from "react";
import Mycontext from "../../context/Mycontext";

const ChartSection = () => {
  const { mode } = useContext(Mycontext);
  
  return (
    <div
      className={`${
        mode === "dark" 
          ? "bg-[#15161B] border-gray-700" 
          : "bg-white border-gray-200"
      } border shadow-sm overflow-hidden transition-colors duration-300`}
      style={{
        width: "840px",
        height: "554px",
      }}
    >
      {/* Header Tabs */}
      <div className={`flex items-center border-b text-sm font-medium ${
        mode === "dark" ? "border-gray-700" : "border-gray-200"
      }`}>
        <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-500">
          Traded Price
        </button>
        <button className={`px-4 py-2 ${
          mode === "dark" 
            ? "text-gray-400 hover:text-gray-200" 
            : "text-gray-500 hover:text-black"
        }`}>
          Mark Price
        </button>
        <button className={`px-4 py-2 ${
          mode === "dark" 
            ? "text-gray-400 hover:text-gray-200" 
            : "text-gray-500 hover:text-black"
        }`}>
          Funding
        </button>
        <button className={`px-4 py-2 ${
          mode === "dark" 
            ? "text-gray-400 hover:text-gray-200" 
            : "text-gray-500 hover:text-black"
        }`}>
          Depth
        </button>
      </div>

      {/* Empty chart area (will hold API data later) */}
      <div className={`flex items-center justify-center h-[calc(553px-42px)] ${
        mode === "dark" 
          ? "bg-[#15161B] text-gray-500" 
          : "bg-white text-gray-400"
      } text-sm transition-colors duration-300`}>
        Chart data will be loaded here...
      </div>
    </div>
  );
};

export default ChartSection;
