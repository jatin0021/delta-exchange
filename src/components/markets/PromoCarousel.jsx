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
      className={`relative py-10 px-6 md:px-12 w-100vw transition-colors duration-300 ${
        mode === "dark" ? "bg-[#15161B]" : "bg-gray-100"
      }`}
    >
      <div className="relative max-w-[1300px] mx-auto">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full z-10 shadow-lg 
          bg-gray-200 dark:bg-[#2A2A2A] dark:text-white text-gray-700 hover:bg-gray-300 dark:hover:bg-[#3a3a3a]"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full z-10 shadow-lg 
          bg-gray-200 dark:bg-[#2A2A2A] dark:text-white text-gray-700 hover:bg-gray-300 dark:hover:bg-[#3a3a3a]"
        >
          <FaChevronRight size={18} />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar px-8 md:px-10"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[200px] md:min-w-[220px] lg:min-w-[250px] rounded-xl flex-shrink-0 p-5 relative
              bg-orange-50 dark:bg-[#3A1D09] text-gray-800 dark:text-white 
              border border-orange-100 dark:border-none 
              hover:scale-[1.02] transition-transform duration-300 ease-in-out"
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
