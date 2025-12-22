import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";

const ApiPricing = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 py-16 px-6 md:px-16 ${isDark ? "bg-[#121317] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className={`text-[28px] md:text-4xl font-extrabold mb-4 tracking-tight ${isDark ? "text-white" : "text-black"}`}>API Pricing</h2>
        <p className={`text-[15px] md:text-lg mb-12 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Market Data at your fingertips with Delta API and Websocket Services
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Free Trading API Card */}
          <div className={`rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-center hover:shadow-xl transition-all duration-300 border ${
            isDark 
              ? "bg-gradient-to-br from-[#1E1F24] to-[#121317] border-gray-700 hover:border-orange-500/30" 
              : "bg-white border-gray-100 shadow-md hover:shadow-orange-500/10"
          }`}>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-3 italic tracking-tighter text-orange-500">
                FREE Trading API
              </h3>
              <p className={`text-sm md:text-[15px] font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Market Data at your fingertips with Delta API
                <br className="hidden md:block" /> and Websocket Services
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-6">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/trading-api.svg"
                alt="Trading API"
                className="w-24 md:w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Free Data API Card */}
          <div className={`rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-center hover:shadow-xl transition-all duration-300 border ${
            isDark 
              ? "bg-gradient-to-br from-[#1E1F24] to-[#121317] border-gray-700 hover:border-yellow-500/30" 
              : "bg-white border-gray-100 shadow-md hover:shadow-yellow-500/10"
          }`}>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-3 italic tracking-tighter text-yellow-500">
                FREE Data API
              </h3>
              <p className={`text-sm md:text-[15px] font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Market Data at your fingertips with Delta API
                <br className="hidden md:block" /> and Websocket Services
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-6">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/data-api.svg"
                alt="Data API"
                className="w-24 md:w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPricing;
