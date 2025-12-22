import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";

const HowToUse = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 px-6 py-12 md:py-20 ${isDark ? "bg-[#121317] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto text-left">
        {/* Heading */}
        <h2 className={`text-[28px] md:text-4xl font-extrabold mb-4 tracking-tight leading-tight ${isDark ? "text-white" : "text-black"}`}>
          How to use Delta Exchange API?
        </h2>
        <p className={`text-[15px] md:text-lg mb-12 max-w-2xl font-medium leading-snug ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          You can use this API to fetch granular data for backtesting, Listen to
          market feed and place orders on Delta Exchange.
        </p>

        {/* Flow Chart Container */}
        <div className={`rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 border ${
          isDark ? "bg-[#1E1F24] border-gray-700" : "bg-gray-50 border-gray-100 shadow-sm"
        }`}>
          {/* Step 1: End User */}
          <div className="flex flex-col items-center text-center">
            <div className={`p-4 rounded-full mb-3 ${isDark ? "bg-gray-800" : "bg-white shadow-sm"}`}>
              <img
                src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fend-user-india.svg&w=128&q=75"
                alt="End User"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className={`text-sm md:text-base font-bold ${isDark ? "text-gray-300" : "text-gray-600"}`}>End User</p>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center flex-1 max-w-[200px]">
            <div className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold shadow-sm ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            }`}>
              Create/Manage API Key
            </div>
            <div className={`border-t-2 border-dashed w-full mt-4 ${isDark ? "border-gray-700" : "border-gray-200"}`}></div>
          </div>

          {/* Step 2: Delta API */}
          <div className="flex flex-col items-center text-center">
            <div className={`p-4 rounded-full mb-3 ${isDark ? "bg-gray-800" : "bg-white shadow-sm"}`}>
              <img
                src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fdelta-api-india.svg&w=128&q=75"
                alt="Delta API"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className={`text-sm md:text-base font-bold ${isDark ? "text-gray-300" : "text-gray-600"}`}>Delta API</p>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center flex-1 max-w-[200px]">
            <div className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold shadow-sm ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            }`}>
              Connect API
            </div>
            <div className={`border-t-2 border-dashed w-full mt-4 ${isDark ? "border-gray-700" : "border-gray-200"}`}></div>
          </div>

          {/* Step 3: Delta Ecosystem */}
          <div className="flex flex-col items-center text-center">
            <div className={`p-4 rounded-full mb-3 ${isDark ? "bg-gray-800" : "bg-white shadow-sm"}`}>
              <img
                src="https://www.delta.exchange/_next/image?url=https%3A%2F%2Fstatic.delta.exchange%2Flanding-page%2Fapi-guide%2Fdelta-india-logo.svg&w=128&q=75"
                alt="Delta Ecosystem"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className={`text-sm md:text-base font-bold ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Delta Ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
