"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Straddle = ({ mode }) => {
  const isDark = mode === "dark";
  const navigate = useNavigate();

  const containerClasses = isDark
    ? "bg-[#15161B] text-white border-gray-700"
    : "bg-white text-black border-gray-300";

  const tableHeaderClasses = isDark
    ? "bg-[#1E1F24] text-gray-300 border-b border-gray-700"
    : "bg-gray-100 text-gray-700 border-b border-gray-300";

  

  // Example Data
  const data = [
    {
      contract: "MV-BTC-115000-291025",
      description: "BTC Daily Straddle",
      leverage: "200x",
      lastPrice: "$2514.0",
      markPrice: "2303.9",
      change: "+84.45%",
      volume: "$653.88K",
      openInterest: "$54.4K",
      high: "2683",
      low: "1172",
    },
    {
      contract: "MV-BTC-114400-291025",
      description: "BTC Daily Straddle",
      leverage: "200x",
      lastPrice: "$1771.0",
      markPrice: "1726.1",
      change: "+22.73%",
      volume: "$2.92M",
      openInterest: "$77.0K",
      high: "2352",
      low: "1247",
    },
    {
      contract: "MV-BTC-115200-291025",
      description: "BTC Daily Straddle",
      leverage: "200x",
      lastPrice: "$2600.0",
      markPrice: "2501.4",
      change: "+93.74%",
      volume: "$1.59M",
      openInterest: "$34.0K",
      high: "3085.6",
      low: "1155",
    },
    {
      contract: "MV-BTC-114200-291025",
      description: "BTC Daily Straddle",
      leverage: "200x",
      lastPrice: "$1750.0",
      markPrice: "1542.5",
      change: "+20.77%",
      volume: "$2.16M",
      openInterest: "$89.8K",
      high: "2200",
      low: "1325",
    },
    {
      contract: "MV-BTC-114000-291025",
      description: "BTC Daily Straddle",
      leverage: "200x",
      lastPrice: "$1328.0",
      markPrice: "1366.6",
      change: "-9.48%",
      volume: "$1.89M",
      openInterest: "$198.1K",
      high: "2264",
      low: "1291",
    },
  ];

  return (
    <div className={`w-full h-full ${containerClasses}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className={tableHeaderClasses}>
            <tr>
              {[
                "Contract",
                "Description",
                "",
                "Last Price",
                "Mark Price",
                "24h Change",
                "24h Volume",
                "Open Interest",
                "24h Prices",
              ].map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-medium whitespace-nowrap"
                >
                  {header}
                  {["Mark Price", "24h Change", "24h Volume", "Open Interest"].includes(
                    header
                  ) && (
                    <span className="inline-block ml-1 text-gray-400">▲▼</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => {
              const isNegative = item.change.includes("-");
              const changeColor = isNegative ? "text-red-500" : "text-green-500";

              return (
                <tr
                  key={i}
                  onClick={() => navigate('/chart/', { state: { symbol: item.contract } })}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: item.contract } }); }}
                  tabIndex={0}
                  role="button"
                  className={`border-b cursor-pointer ${
                    isDark ? "border-gray-700 hover:bg-[#1E1F24]" : "border-gray-200 hover:bg-gray-100"
                  } transition`}
                >
                  <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                    <FaStar className="text-gray-400" />
                    {item.contract}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{item.description}</td>
                  <td className="px-4 py-3">
                    <span className="bg-[#ff6600] text-white px-2 py-0.5 rounded text-xs font-semibold">
                      {item.leverage}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{item.lastPrice}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{item.markPrice}</td>
                  <td className={`px-4 py-3 whitespace-nowrap ${changeColor}`}>
                    {item.change}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{item.volume}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{item.openInterest}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div>
                      <p>
                        <span className="text-gray-400">High:</span>{" "}
                        <span>{item.high}</span>
                      </p>
                      <p>
                        <span className="text-gray-400">Low:</span>{" "}
                        <span>{item.low}</span>
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Straddle;
