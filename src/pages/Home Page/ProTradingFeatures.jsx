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
    <section className={`${bgColor} ${textColor} py-20 px-6 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Section Header */}
        <div className="text-center md:text-left">
          <p className="text-orange-500 font-semibold mb-2">Best In Class</p>
          <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pro Trading Features For Everyone
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-2xl px-6 py-6 flex items-start gap-4 border border-transparent ${borderHover} transition shadow-lg`}
            >
              {/* Icon Circle */}
              <div className="bg-orange-500 flex items-center justify-center w-12 h-12 rounded-full text-white text-xl flex-shrink-0">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
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
