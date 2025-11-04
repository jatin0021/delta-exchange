import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FeaturesSection = ({ mode }) => {
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const navigate = useNavigate();
  const onCryptoVsEquityClick = () => {
    navigate("/cryptovsequity"); 
  }

  return (
    <section className={`${bgColor} ${textColor} pb-10 px-6 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto flex flex-col items-start gap-20">
        {/* 🔸 Top Compliance Banner */}
        <div className={`flex items-center justify-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} bg-transparent`}>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-orange-500/10 text-orange-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8"
              >
                <path d="M8 0a8 8 0 1 0 8 8A8.009 8.009 0 0 0 8 0Zm3.646 6.354-4 4a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L7.5 9.293l3.646-3.647a.5.5 0 0 1 .707.708Z" />
              </svg>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-center text-lg`}>
              We are registered with FIU - Govt of India and are fully compliant
              with Indian regulations
            </p>
          </div>
        </div>

        {/* 🟤 Brown Feature Banner */}
        <div className={`${isDark ? 'bg-[#2A1B0E]' : 'bg-orange-100'} rounded-lg py-4 px-6 flex flex-col sm:flex-row justify-around items-center gap-6 text-orange-400 font-medium text-center w-full max-w-5xl h-24`}>
          <div className="flex items-center gap-2">
            <FaStar className="text-orange-400" />
            <span className="text-xl">Trade Crypto without owning it</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-orange-400" />
            <span className="text-xl">Margin & P/L in INR</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-orange-400" />
            <span className="text-xl">Deposit INR, Withdraw INR</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl gap-8">
          {/* Left Text Content */}
          <div className="flex flex-col gap-3">
            <p className="text-orange-500 font-semibold ">
              Designed To Delight Traders
            </p>
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Like F&O Trading, But Better
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Familiar instruments (Futures & Options), familiar interface but
              with crypto underlyings
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-start md:justify-end w-full md:w-auto">
            <button onClick={onCryptoVsEquityClick} className={`${isDark ? 'bg-[#1C1F26] border-gray-700 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'} border cursor-pointer rounded-lg px-2 text-medium flex items-center gap-1 hover:bg-opacity-80 transition`}>
              <span role="img" aria-label="bulb">
                💡
              </span>{" "}
              Crypto FnO vs Equity FnO →
            </button>
          </div>
        </div>

        {/* ✅ Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mt-6">
          {/* Feature Item */}
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <div>
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Start smaller
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
                Small lot sizes (BTC contracts @ ~ ₹5000 | ETH contracts @ ~
                ₹2500) to make it easy to get started.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <div>
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Trade 24/7/365
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
                Crypto markets never close, neither does Delta Exchange India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <div>
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enjoy daily expiries
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
                Daily, weekly and monthly expiries to give you more trading
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <div>
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Do more with less
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
                Smart margining scheme to enable you to trade more with less
                capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
