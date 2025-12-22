import { useRef, useContext } from "react";
import Mycontext from "../../context/Mycontext";
import { FaChevronLeft, FaChevronRight, FaBitcoin } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

export default function PromoCarousel() {
  const { mode } = useContext(Mycontext);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title: "Top Coins",
      type: "coins",
      coins: [
        {
          name: "BTCUSD",
          price: "$115417",
          change: "+1.7%",
          icon: <FaBitcoin className="text-orange-500" />,
        },
        {
          name: "ETHUSD",
          price: "$4217.5",
          change: "+3.69%",
          icon: <SiEthereum className="text-gray-400" />,
        },
        {
          name: "MELANIAUSD",
          price: "$0.1455",
          change: "+45.5%",
          icon: <div className="w-4 h-4 bg-blue-500 rounded-full" />,
        },
        {
          name: "TRUMPUSD",
          price: "$7.919",
          change: "+28.89%",
          icon: <div className="w-4 h-4 bg-blue-700 rounded-full" />,
        },
      ],
    },
    {
      title: "Complete KYC",
      desc: "It only takes 3 minutes",
      button: "GET VERIFIED",
    },
    {
      title: "Zero Closing Fee",
      subtitle: "BTCUSD 30mins · Other Futures 15mins",
      button: "TRADE NOW",
    },
    {
      title: "Straddle Contracts Live",
      desc: "Trade both legs in one contract, Save half the fees",
      button: "TRADE NOW",
    },
    {
      title: "Trade Smarter",
      desc: "Access 24x7 AI-driven insights",
      button: "LEARN MORE",
    },
    {
      title: "Earn Rewards",
      desc: "Stake & earn exciting bonuses",
      button: "START EARNING",
    },
  ];

  return (
    <div
      className={`relative py-4 w-full transition-colors duration-300 ${
        mode === "dark" ? "bg-[#15161B]" : "bg-gray-100"
      }`}
    >
      <div className="relative group">
        {/* Scroll Buttons - Visible on hover or touch */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full z-20 shadow-xl 
          bg-white/90 dark:bg-[#2A2A2A]/90 dark:text-white text-gray-700 hover:bg-white dark:hover:bg-[#3a3a3a] 
          opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center border border-gray-200 dark:border-gray-700"
        >
          <FaChevronLeft size={16} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full z-20 shadow-xl 
          bg-white/90 dark:bg-[#2A2A2A]/90 dark:text-white text-gray-700 hover:bg-white dark:hover:bg-[#3a3a3a] 
          opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center border border-gray-200 dark:border-gray-700"
        >
          <FaChevronRight size={16} />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth no-scrollbar px-2 md:px-4 pb-2"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[210px] md:min-w-[240px] lg:min-w-[270px] rounded-xl flex-shrink-0 p-5 relative
              bg-white dark:bg-[#202126] text-gray-800 dark:text-white 
              border border-gray-100 dark:border-gray-800/50
              hover:shadow-lg dark:hover:shadow-orange-500/5 transition-all duration-300"
            >
              {card.type === "coins" ? (
                <>
                  <h3 className="text-base md:text-lg font-semibold mb-3">
                    Top Coins
                  </h3>
                  <div className="space-y-3">
                    {card.coins.map((coin, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2">
                          {coin.icon}
                          <span>{coin.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{coin.price}</span>
                          <span className="text-green-500">{coin.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {card.title.split(" ")[0]}{" "}
                    <span className="text-green-500">
                      {card.title.split(" ")[1] || ""}
                    </span>
                  </h3>

                  {card.desc && (
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-5">
                      {card.desc}
                    </p>
                  )}
                  {card.subtitle && (
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-5">
                      {card.subtitle}
                    </p>
                  )}

                  {card.button && (
                    <button
                      className="px-3 py-2 rounded-md text-[10px] md:text-xs font-semibold 
                    bg-orange-600 hover:bg-orange-700 text-white dark:bg-[#FDEBD0] dark:text-black dark:hover:bg-[#FFE5B4] transition-colors"
                    >
                      {card.button} →
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
