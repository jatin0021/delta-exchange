import React from "react";
import { FaShoppingBasket, FaCodeBranch, FaArrowsAltV, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaShoppingBasket />,
    title: "Basket Orders With Margin Benefits",
    desc: "Place multiple orders together as a basket to enjoy margin offsetting",
  },
  {
    icon: <FaCodeBranch />,
    title: "Strategy Builder",
    desc: "Build and analyse trading strategies comprising of group of futures and options",
  },
  {
    icon: <FaArrowsAltV />,
    title: "Deep OTM/ITM Strikes",
    desc: "Trade deep OTM/ITM options strikes with daily and weekly expiry",
  },
  {
    icon: <FaChartLine />,
    title: "Pnl Analytics",
    desc: "Conveniently track and analyse your trading performance",
  },
];

const ProTradingFeatures = ({ mode }) => {
  const isDark = mode === "dark";
  const bgColor = isDark ? "bg-[#0E0F13]" : "bg-gray-50";
  const cardBg = isDark ? "bg-[#161A22]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const borderHover = isDark ? "hover:border-gray-700" : "hover:border-gray-300";

  return (
    <section className={`${bgColor} ${textColor} py-12 md:py-16 px-4 sm:px-6 transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">

        {/* Section Header */}
        <div className="text-center md:text-left max-w-2xl px-2">
          <p className="text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 opacity-80">Best In Class</p>
          <h2 className={`text-xl sm:text-3xl lg:text-4xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pro Trading Features For Everyone
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-[2rem] p-6 sm:p-8 flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-6 border-2 border-transparent ${borderHover} transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] group cursor-pointer`}
            >
              {/* Icon Circle */}
              <div className="bg-orange-500/10 text-orange-500 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-xl sm:text-2xl flex-shrink-0 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-6">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className={`font-black text-lg sm:text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm lg:text-base leading-relaxed opacity-90`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProTradingFeatures;
