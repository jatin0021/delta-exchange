import React from "react";
import { FaGooglePlay, FaApple, FaAndroid } from "react-icons/fa";
import Markets from "../MainDash";
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
    <section className={`${bgColor} ${textColor} min-h-screen flex items-center justify-center px-6 py-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-28">
        {/* Left Content */}
        <div className="flex-1/5 text-center md:text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-4 bg-transparent border-2 border-orange-400 rounded-full mb-6">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India Flag"
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm font-medium">Made for INDIA</span>
          </div>

          {/* Heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-[2.9rem] font-semibold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Trade Futures & Options <br /> on Bitcoin and Ether
          </h1>

          {/* Subtext */}
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md mx-auto md:mx-0 mb-8`}>
            Elevate your crypto F&O trading with 24/7 open markets, efficient
            margining and INR settlement.
          </p>

          {/* CTA Button */}
          <button onClick={onTradeClick} className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-20 cursor-pointer py-3 rounded-md text-lg mb-8">
            Trade
          </button>

          {/* App download */}
          <div className="flex items-center justify-center md:justify-start gap-8 mt-16">
            <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg font-medium`}>
              Trade On the Go!
            </span>
            <div className="flex gap-6 text-xl">
              <FaGooglePlay className="cursor-pointer hover:text-orange-400" />
              <FaApple className="cursor-pointer hover:text-orange-400" />
              <FaAndroid className="cursor-pointer hover:text-orange-400" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Background Circle */}
          <div className="absolute w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"></div>

          <img
            src="https://www.delta.exchange/_next/image?url=%2Fimages%2Fhomepage%2FheroSection%2Findia-dark.png&w=828&q=75"
            alt="Crypto Trading App"
            className="relative w-[300px] sm:w-[350px] md:w-[420px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
