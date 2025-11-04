import React from "react";

const APIHero = () => {
  return (
    <section className="bg-[#121212] text-white min-h-[65vh] flex items-center justify-center px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Delta Exchange API
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-3">
            <span className="text-white">Automate, Backtest, Deploy</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            Experience lightning-fast API trading across Crypto Futures and Options
            with Delta API.
          </p>

          <button className="bg-[#f97316] hover:bg-[#ff7e1d] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-300">
            Create API Key
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end w-full md:w-[45%]">
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
