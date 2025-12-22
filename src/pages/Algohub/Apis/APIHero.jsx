import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";

const APIHero = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 ${isDark ? "bg-[#121317] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left max-w-xl w-full">
          <h1 className="text-[32px] md:text-6xl font-extrabold mb-1 tracking-tight">
            Delta Exchange API
          </h1>
          <h2 className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? "text-gray-200" : "text-gray-900"}`}>
            Automate, Backtest, Deploy
          </h2>
          <p className={`text-[15px] md:text-lg mb-8 leading-snug md:leading-relaxed font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Experience lightning-fast API trading across Crypto Futures and Options
            with Delta API.
          </p>

          <button className="bg-[#f97316] hover:bg-[#ff7e1d] text-white font-bold text-base px-8 py-3.5 rounded-lg transition-all duration-300 w-full md:w-auto shadow-lg shadow-orange-500/20 active:scale-[0.98]">
            Create API Key
          </button>
        </div>

        {/* Right Illustration - Hidden on mobile if needed, or matched to screenshot */}
        <div className="hidden md:flex justify-center md:justify-end w-full md:w-[45%]">
          <img
            src="https://www.delta.exchange/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcase-india.0960f8d8.svg&w=828&q=75"
            alt="Delta API illustration"
            className="w-[80%] md:w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default APIHero;
