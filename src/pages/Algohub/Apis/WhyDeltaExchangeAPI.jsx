import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";
import {
  FaFileAlt,
  FaLayerGroup,
  FaClock,
  FaBolt,
  FaPython,
  FaBitcoin,
  FaArrowRight,
} from "react-icons/fa";

const WhyDeltaExchangeAPI = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 py-16 px-6 md:px-16 ${isDark ? "bg-[#121317] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className={`text-[28px] md:text-4xl font-extrabold mb-3 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
          Why Delta Exchange API?
        </h2>
        <p className={`text-[15px] md:text-lg mb-10 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Experience lightning-fast API trading across different markets for
          Institutional & Professional Traders.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {[
            { icon: <FaFileAlt size={32} />, title: "Simple Documentation" },
            { icon: <FaLayerGroup size={32} />, title: "Programming Independence" },
            { icon: <FaClock size={32} />, title: "Minimal Latency" },
            { icon: <FaBolt size={32} />, title: "Fast Order Placement" },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-4 rounded-xl p-6 border transition-all duration-300 ${
              isDark ? "bg-[#1E1F24] border-gray-700 hover:border-orange-500/50" : "bg-gray-50 border-gray-100 hover:border-orange-500/30 shadow-sm"
            }`}>
              <div className="text-orange-500">{item.icon}</div>
              <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* API Docs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {/* REST API DOCS */}
          <div className={`rounded-xl p-6 flex flex-col sm:flex-row items-start justify-between border transition-all duration-300 ${
            isDark ? "bg-[#1E1F24] border-gray-700 hover:border-orange-500/50" : "bg-gray-50 border-gray-100 shadow-sm hover:border-orange-500/30"
          }`}>
            <div className="flex items-start gap-4 mb-4 sm:mb-0">
              <FaPython size={45} className="text-[#3776AB]" />
              <div>
                <h4 className="text-lg font-bold mb-1">
                  Rest API Docs: Python
                </h4>
                <p className={`text-sm leading-relaxed max-w-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Rest API in Python operates on HTTP principles to perform
                  specific operations on resources.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-orange-500 text-sm font-bold flex items-center hover:underline whitespace-nowrap"
            >
              Click Here <FaArrowRight size={12} className="ml-1" />
            </a>
          </div>

          {/* CCXT Integration */}
          <div className={`rounded-xl p-6 flex flex-col sm:flex-row items-start justify-between border transition-all duration-300 ${
            isDark ? "bg-[#1E1F24] border-gray-700 hover:border-orange-500/50" : "bg-gray-50 border-gray-100 shadow-sm hover:border-orange-500/30"
          }`}>
            <div className="flex items-start gap-4 mb-4 sm:mb-0">
              <FaBitcoin size={45} className="text-[#f7931a]" />
              <div>
                <h4 className="text-lg font-bold mb-1">
                  CCXT Integration
                </h4>
                <p className={`text-sm leading-relaxed max-w-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  CCXT library is used for building cross-exchange trading algorithms.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/ccxt/ccxt"
              className="text-orange-500 text-sm font-bold flex items-center hover:underline whitespace-nowrap"
            >
              Click Here <FaArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-left">
          <button className="bg-orange-500 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-[0.98]">
            Explore API Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDeltaExchangeAPI;
