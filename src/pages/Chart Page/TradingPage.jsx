import React, { useContext } from "react";
import Mycontext from "../../Context/Mycontext";

const OrderBookSection = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";
  // theme-based classes
  const baseStyle = isDark
    ? "bg-[#1E1F24] border-gray-700 text-gray-200"
    : "bg-gray-100 border-gray-300 text-gray-700";

  const headerStyle = isDark ? "text-gray-300" : "text-gray-800";
  const subHeaderStyle = isDark ? "text-gray-400" : "text-gray-600";
  const subtleText = isDark ? "text-gray-300" : "text-gray-600";
  const smallText = isDark ? "text-gray-400" : "text-gray-600";
  const borderClr = isDark ? "border-gray-700" : "border-gray-300";
  const hoverRow = isDark ? "hover:bg-[#1E1F24]/40" : "hover:bg-gray-50";

  // buy/sell colors
  const buyText = isDark ? "text-green-400" : "text-green-700";
  const buyBar = isDark ? "bg-green-900/30" : "bg-green-200/40";
  const sellText = isDark ? "text-red-400" : "text-red-700";
  const sellBar = isDark ? "bg-red-900/30" : "bg-red-200/40";

  // container sizing (lg exact 319x450, smaller screens scaled)
  const sizeClasses =
    "w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] md:w-[280px] md:h-[400px] lg:w-[319px] lg:h-[554px]";

  // sample rows (static)
  const buyRows = [
    { price: "1093.87", size: "33.1", total: "390.9", width: "60%" },
    { price: "1093.48", size: "30.9", total: "357.8", width: "50%" },
    { price: "1093.12", size: "27.3", total: "326.4", width: "40%" },
    { price: "1092.96", size: "22.4", total: "299.1", width: "35%" },
    { price: "1092.75", size: "19.8", total: "276.7", width: "30%" },
    { price: "1092.41", size: "15.7", total: "248.9", width: "25%" },
    { price: "1092.10", size: "10.4", total: "223.2", width: "20%" },
  ];

  const sellRows = [
    { price: "1094.21", size: "25.4", total: "299.2", width: "60%" },
    { price: "1094.35", size: "28.1", total: "324.8", width: "50%" },
    { price: "1094.58", size: "31.2", total: "352.7", width: "40%" },
    { price: "1094.79", size: "34.5", total: "384.1", width: "30%" },
    { price: "1095.02", size: "38.2", total: "412.3", width: "25%" },
    { price: "1095.24", size: "40.7", total: "440.1", width: "20%" },
    { price: "1095.51", size: "42.8", total: "466.2", width: "15%" },
  ];

  const trades = [
    { time: "14:22:35", price: "1094.23", size: "12.4", type: "buy" },
    { time: "14:22:37", price: "1094.28", size: "8.9", type: "sell" },
    { time: "14:22:40", price: "1094.31", size: "15.3", type: "buy" },
    { time: "14:22:42", price: "1094.39", size: "10.8", type: "sell" },
    { time: "14:22:45", price: "1094.45", size: "7.5", type: "buy" },
    { time: "14:22:50", price: "1094.52", size: "11.2", type: "sell" },
    { time: "14:22:55", price: "1094.59", size: "9.8", type: "buy" },
    { time: "14:23:00", price: "1094.62", size: "14.0", type: "sell" },
  ];

  return (
    <div
      className={`${sizeClasses}  flex flex-col overflow-hidden border shadow-lg transition-all duration-300 ${baseStyle}`}
    >
      {/* BUY */}
      <section className={`flex-1 border-b overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ${borderClr}`}>
        <div className={`text-center ${headerStyle} text-xs font-semibold py-2 border-b ${borderClr}`}>
          BUY ORDERS
        </div>

        <div className={`grid grid-cols-3 ${subHeaderStyle} text-[11px] uppercase px-2 py-1 border-b ${borderClr}`}>
          <div>Price</div>
          <div className="text-center">Size</div>
          <div className="text-right">Total</div>
        </div>

        <div className="text-[12px] font-medium relative">
          {buyRows.map((row, i) => (
            <div
              key={i}
              className={`relative grid grid-cols-3 items-center py-[3px] px-2 ${buyText} ${hoverRow}`}
            >
              <div className={`${subtleText} truncate`}>{row.price}</div>
              <div className={`${smallText} text-center truncate`}>{row.size}</div>
              <div className={`${smallText} text-right truncate`}>{row.total}</div>

              <div
                className={`${buyBar} absolute right-0 top-0 h-full rounded-l-lg pointer-events-none`}
                style={{ width: row.width }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SELL */}
      <section className={`flex-1 border-b overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ${borderClr}`}>
        <div className={`text-center ${headerStyle} text-xs font-semibold py-2 border-b ${borderClr}`}>
          SELL ORDERS
        </div>

        <div className={`grid grid-cols-3 ${subHeaderStyle} text-[11px] uppercase px-2 py-1 border-b ${borderClr}`}>
          <div>Price</div>
          <div className="text-center">Size</div>
          <div className="text-right">Total</div>
        </div>

        <div className="text-[12px] font-medium relative">
          {sellRows.map((row, i) => (
            <div
              key={i}
              className={`relative grid grid-cols-3 items-center py-[3px] px-2 ${sellText} ${hoverRow}`}
            >
              <div className={`${subtleText} truncate`}>{row.price}</div>
              <div className={`${smallText} text-center truncate`}>{row.size}</div>
              <div className={`${smallText} text-right truncate`}>{row.total}</div>

              <div
                className={`${sellBar} absolute left-0 top-0 h-full rounded-r-lg pointer-events-none`}
                style={{ width: row.width }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* TRADES */}
      <section className={`flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent ${borderClr}`}>
        <div className={`text-center ${headerStyle} text-xs font-semibold py-2 border-b ${borderClr}`}>
          RECENT TRADES
        </div>

        <div className={`grid grid-cols-3 ${subHeaderStyle} text-[11px] uppercase px-2 py-1 border-b ${borderClr}`}>
          <div>Time</div>
          <div className="text-center">Price</div>
          <div className="text-right">Size</div>
        </div>

        <div className="text-[12px] font-medium">
          {trades.map((trade, i) => {
            const typeText = trade.type === "buy" ? buyText : sellText;
            return (
              <div
                key={i}
                className={`grid grid-cols-3 items-center py-[3px] px-2 ${typeText} ${hoverRow}`}
              >
                <div className={`${subtleText} truncate`}>{trade.time}</div>
                <div className={`text-center ${subtleText} truncate`}>{trade.price}</div>
                <div className={`${smallText} text-right truncate`}>{trade.size}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OrderBookSection;
