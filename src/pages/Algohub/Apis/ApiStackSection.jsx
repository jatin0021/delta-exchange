import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";
import { FaBoxes, FaFileAlt, FaChartLine } from "react-icons/fa";

const ApiStackSection = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 py-16 px-6 md:px-16 ${isDark ? "bg-[#141416] text-white" : "bg-gray-50 text-black border-y border-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Text */}
          <div className="max-w-sm">
            <h2 className={`text-[28px] md:text-3xl font-extrabold mb-4 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
              API Stack
            </h2>
            <p className={`text-[15px] md:text-lg font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Market Data at your fingertips with Delta API and Websocket Services
            </p>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col sm:flex-row items-stretch gap-6 flex-grow justify-end">
            {/* Rest API */}
            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              isDark ? "bg-[#1b1b1d] border-gray-700 shadow-xl" : "bg-white border-gray-100 shadow-lg shadow-gray-200/50"
            }`}>
              <h3 className={`font-bold mb-4 text-lg ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                Rest API
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className={`flex items-center gap-2 border px-4 py-3 rounded-lg text-[13px] font-bold transition-all ${
                  isDark ? "bg-[#1f1f22] border-gray-700 text-gray-300 hover:border-orange-500" : "bg-gray-50 border-gray-100 text-gray-600 hover:border-orange-500"
                }`}>
                  <FaBoxes className="text-orange-500" />
                  <span>Order Management</span>
                </div>
                <div className={`flex items-center gap-2 border px-4 py-3 rounded-lg text-[13px] font-bold transition-all ${
                  isDark ? "bg-[#1f1f22] border-gray-700 text-gray-300 hover:border-orange-500" : "bg-gray-50 border-gray-100 text-gray-600 hover:border-orange-500"
                }`}>
                  <FaFileAlt className="text-orange-500" />
                  <span>Historical Data</span>
                </div>
              </div>
            </div>

            {/* Webhooks */}
            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              isDark ? "bg-[#1b1b1d] border-gray-700 shadow-xl" : "bg-white border-gray-100 shadow-lg shadow-gray-200/50"
            }`}>
              <h3 className={`font-bold mb-4 text-lg ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                Webhooks
              </h3>
              <div className={`flex items-center gap-2 border px-4 py-3 rounded-lg text-[13px] font-bold transition-all ${
                isDark ? "bg-[#1f1f22] border-gray-700 text-gray-300 hover:border-orange-500" : "bg-gray-50 border-gray-100 text-gray-600 hover:border-orange-500"
              }`}>
                <FaChartLine className="text-orange-500" />
                <span>Live Trading Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiStackSection;
