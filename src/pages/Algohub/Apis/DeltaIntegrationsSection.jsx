import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";

const DeltaIntegrationsSection = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <section className={`transition-colors duration-300 py-16 px-6 md:px-16 ${isDark ? "bg-[#121317] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-[28px] md:text-4xl font-extrabold mb-3 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
          Delta Exchange Integrations
        </h2>
        <p className={`text-[15px] md:text-lg mb-10 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Leverage powerful integrations to automate and streamline your
          trading strategies with ease.
        </p>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "TradingView", url: "https://static.delta.exchange/landing-page/api-guide/trading-view.svg" },
            { name: "Tradetron", url: "https://static.delta.exchange/landing-page/api-guide/trade-tron.svg" },
            { name: "AlgoTest", url: "https://static.delta.exchange/landing-page/api-guide/algo-test.svg" },
            { name: "NextLevelBot", url: "https://static.delta.exchange/landing-page/api-guide/next-level-bot.svg" },
          ].map((logo, idx) => (
            <div key={idx} className={`rounded-xl py-10 px-6 flex items-center justify-center border transition-all duration-300 group ${
              isDark ? "bg-[#1E1F24] border-gray-700 hover:border-orange-500/50" : "bg-gray-50 border-gray-100 hover:border-orange-500/30 hover:shadow-sm"
            }`}>
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeltaIntegrationsSection;
