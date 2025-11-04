import React from "react";
import {
  FaLink,
  FaDatabase,
  FaChartLine,
  FaHistory,
  FaNetworkWired,
} from "react-icons/fa";

const DeltaIntegrationsSection = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ------------------ INTEGRATIONS ------------------ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Delta Exchange Integrations
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10">
            Leverage powerful integrations to automate and streamline your
            trading strategies with ease.
          </p>

          {/* Integration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TradingView */}
            <div className="bg-[#181818] rounded-2xl py-8 px-6 flex items-center justify-center border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/trading-view.svg"
                alt="TradingView"
                className="opacity-100"
              />
            </div>

            {/* Tradetron */}
            <div className="bg-[#181818] rounded-2xl py-8 px-6 flex items-center justify-center border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
               <img
                src="https://static.delta.exchange/landing-page/api-guide/trade-tron.svg"
                alt="TradingView"
                className="opacity-100"
              />
            </div>

            {/* AlgoTest */}
            <div className="bg-[#181818] rounded-2xl py-8 px-6 flex items-center justify-center border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/algo-test.svg"
                alt="TradingView"
                className="opacity-100"
              />
            </div>

            {/* NextLevelBot */}
            <div className="bg-[#181818] rounded-2xl py-8 px-6 flex items-center justify-center border border-[#222] hover:border-[#ff7a00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7a00]/20">
              <img
                src="https://static.delta.exchange/landing-page/api-guide/next-level-bot.svg"
                alt="TradingView"
                className="opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeltaIntegrationsSection;
