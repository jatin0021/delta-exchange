import React, { useContext } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Mycontext from "../../Context/Mycontext";

export default function TopBar() {
  const { mode } = useContext(Mycontext);
  const data = {
    pair: "BTCUSD",
    price: 107978.5,
    change: -2.93,
    volume: "949.6M",
    oi: "60.5M",
    nextFunding: "0.0100% /8h",
    fundingTime: "07:15:33s",
    high: "111,973.0",
    low: "107,287.0",
  };

  const isUp = data.change > 0;

  return (
    <div className={`w-full ${mode === "dark" ? "bg-[#15161B] text-gray-200 border-gray-700" : "bg-white text-gray-800 border-gray-300"} border-b px-6 py-2 flex items-center justify-between flex-wrap text-[13px] font-medium transition-colors duration-300`}>
      {/* ===== Left Section ===== */}
      <div className="flex items-center space-x-2">
        <span className={`${mode === "dark" ? "text-gray-300" : "text-gray-700"} font-semibold`}>{data.pair}</span>
        <span
          className={`text-base font-semibold ${
            isUp ? "text-green-400" : "text-red-400"
          }`}
        >
          ${data.price.toLocaleString()}
        </span>
        {isUp ? (
          <FaArrowUp className="text-green-400 text-xs mt-[2px]" />
        ) : (
          <FaArrowDown className="text-red-400 text-xs mt-[2px]" />
        )}
      </div>

      {/* ===== Middle Section ===== */}
      <div className={`hidden lg:flex items-center justify-center gap-8 text-[13px] font-normal ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>24h Change </span>
          <span className={isUp ? "text-green-500" : "text-red-500"}>
            {data.change}%
          </span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>24h Vol. </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>${data.volume}</span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>OI </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>${data.oi}</span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Est. Next Funding </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>{data.nextFunding}</span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>Next Funding In </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>{data.fundingTime}</span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>24h High </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>${data.high}</span>
        </div>
        <div>
          <span className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>24h Low </span>
          <span className={mode === "dark" ? "text-white" : "text-gray-800"}>${data.low}</span>
        </div>
      </div>

      {/* ===== Right Section ===== */}
      <div className="flex items-center space-x-2">
        <button className="text-[13px] text-yellow-400 hover:text-yellow-300 font-medium">
          Contract Details ▾
        </button>
      </div>

      {/* ===== Responsive Stack (for small screens) ===== */}
      <div className="flex lg:hidden flex-col w-full mt-2 text-[12px] text-gray-300 space-y-1">
        <div className="flex flex-wrap justify-between">
          <span>24h Change: <span className={isUp ? "text-green-400" : "text-red-400"}>{data.change}%</span></span>
          <span>Vol: ${data.volume}</span>
          <span>OI: ${data.oi}</span>
        </div>
        <div className="flex flex-wrap justify-between">
          <span>High: ${data.high}</span>
          <span>Low: ${data.low}</span>
        </div>
      </div>
    </div>
  );
}
