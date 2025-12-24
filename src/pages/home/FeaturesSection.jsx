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
    <section className={`${bgColor} ${textColor} py-12 md:py-16 px-4 sm:px-6 transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-8 md:gap-12">
        {/* 🔸 Top Compliance Banner */}
        <div className={`w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} bg-transparent`}>
          <div className="bg-orange-500/10 text-orange-400 p-1.5 sm:p-2 rounded-full shrink-0 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8.009 8.009 0 0 0 8 0Zm3.646 6.354-4 4a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L7.5 9.293l3.646-3.647a.5.5 0 0 1 .707.708Z" />
            </svg>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-center sm:text-left text-sm sm:text-base lg:text-lg font-medium max-w-2xl`}>
            We are registered with FIU - Govt of India and are <span className="text-orange-500 font-bold tracking-tight">fully compliant</span> with Indian regulations
          </p>
        </div>

        {/* 🟤 Brown Feature Banner */}
        <div className={`${isDark ? 'bg-[#2A1B0E]' : 'bg-orange-100/50'} rounded-2xl py-6 md:py-8 px-5 sm:px-6 flex flex-col lg:flex-row justify-around items-center gap-4 sm:gap-6 lg:gap-4 text-orange-400 font-bold text-center w-full shadow-lg`}>
          <div className="flex flex-col items-center gap-2">
            <FaStar className="text-orange-400 text-xl" />
            <span className="text-sm sm:text-base uppercase tracking-wide">Trade Crypto without owning it</span>
          </div>
          <div className="hidden lg:block w-px h-10 bg-orange-400/20"></div>
          <div className="flex flex-col items-center gap-2">
            <FaStar className="text-orange-400 text-xl" />
            <span className="text-sm sm:text-base uppercase tracking-wide">Margin & P/L in INR</span>
          </div>
          <div className="hidden lg:block w-px h-10 bg-orange-400/20"></div>
          <div className="flex flex-col items-center gap-2">
            <FaStar className="text-orange-400 text-xl" />
            <span className="text-sm sm:text-base uppercase tracking-wide">Deposit INR, Withdraw INR</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-5 sm:gap-8">
          {/* Left Text Content */}
          <div className="flex flex-col gap-2 max-w-2xl text-left">
            <p className="text-orange-500 font-black tracking-[0.2em] text-[10px] uppercase opacity-80">
              Designed To Delight Traders
            </p>
            <h2 className={`text-xl sm:text-3xl lg:text-4xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Like F&O Trading, But Better
            </h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
              Familiar instruments (Futures & Options), familiar interface but
              with crypto underlyings
            </p>
          </div>

          {/* Right Button */}
          <div className="w-full md:w-auto">
            <button onClick={onCryptoVsEquityClick} className={`${isDark ? 'bg-[#1C1F26] border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border-2 cursor-pointer rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-3 hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm active:scale-95`}>
              <span>💡</span>Crypto FnO vs Equity FnO →
            </button>
          </div>
        </div>

        {/* ✅ Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full mt-3 sm:mt-6">
          {/* Feature Item */}
          <div className="flex items-start gap-4 group">
            <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 shrink-0 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="text-green-500 text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className={`font-black text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Start smaller
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm lg:text-base mt-1.5 leading-relaxed opacity-90`}>
                Small lot sizes (BTC contracts @ ~ ₹5000 | ETH contracts @ ~
                ₹2500) to make it easy to get started.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 shrink-0 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="text-green-500 text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className={`font-black text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Trade 24/7/365
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm lg:text-base mt-1.5 leading-relaxed opacity-90`}>
                Crypto markets never close, neither does Delta Exchange India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 shrink-0 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="text-green-500 text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className={`font-black text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enjoy daily expiries
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm lg:text-base mt-1.5 leading-relaxed opacity-90`}>
                Daily, weekly and monthly expiries to give you more trading
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 shrink-0 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="text-green-500 text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className={`font-black text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Do more with less
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm lg:text-base mt-1.5 leading-relaxed opacity-90`}>
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
