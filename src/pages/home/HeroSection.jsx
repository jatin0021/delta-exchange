import React from "react";
import { FaGooglePlay, FaApple, FaAndroid } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ mode }) => {
  const navigate = useNavigate();
  const onTradeClick = () => {
    navigate("/markets");
  }
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";

  return (
    <section className={`${bgColor} ${textColor} py-12 md:py-24 lg:py-32 flex items-center justify-center px-4 sm:px-6 transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 w-full">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent border-2 border-orange-400/80 rounded-full mb-5 sm:mb-8 text-orange-400">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India Flag"
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover"
            />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase">Made for INDIA</span>
          </div>

          {/* Heading */}
          <h1 className={`text-2xl sm:text-4xl lg:text-[3.2rem] font-bold sm:font-semibold leading-[1.2] mb-5 sm:mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Trade Futures & Options <br className="hidden sm:block" /> on Bitcoin and Ether
          </h1>

          {/* Subtext */}
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0 mb-8 sm:mb-10 leading-relaxed`}>
            Elevate your crypto F&O trading with 24/7 open markets, efficient
            margining and INR settlement.
          </p>

          {/* CTA Button */}
          <button onClick={onTradeClick} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 transition-all transform active:scale-95 text-white font-bold px-10 sm:px-16 cursor-pointer py-3.5 rounded-lg text-lg mb-10 sm:mb-12 shadow-lg shadow-orange-500/20">
            Trade Now →
          </button>

          {/* App download */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 mt-4">
            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base font-bold uppercase tracking-widest`}>
              Trade On the Go!
            </span>
            <div className="flex gap-8 text-2xl sm:text-xl">
              <FaGooglePlay className="cursor-pointer hover:text-orange-500 transition-colors" title="Google Play" />
              <FaApple className="cursor-pointer hover:text-orange-500 transition-colors" title="App Store" />
              <FaAndroid className="cursor-pointer hover:text-orange-500 transition-colors" title="Android APK" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative order-1 md:order-2 w-full max-w-[320px] sm:max-w-md lg:max-w-lg">
          {/* Background Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-orange-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

          <img
            src="https://www.delta.exchange/_next/image?url=%2Fimages%2Fhomepage%2FheroSection%2Findia-dark.png&w=828&q=75"
            alt="Crypto Trading App"
            className="relative w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:rotate-1 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
