import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

export default function FuturesTable() {
  // Sample static data (you can replace this with real API data)
  const [data] = useState([
    {
      contract: "BTCUSDT",
      description: "Bitcoin / USDT",
      lastPrice: "67,842.12",
      change24h: "+1.25%",
      volume24h: "$14.3B",
      openInterest: "$8.9B",
      price24h: [67500, 67200, 67000, 67400, 67800, 67650, 67842],
      funding: "0.0100%",
    },
    {
      contract: "ETHUSDT",
      description: "Ethereum / USDT",
      lastPrice: "2,492.78",
      change24h: "-0.62%",
      volume24h: "$8.7B",
      openInterest: "$4.2B",
      price24h: [2520, 2490, 2505, 2480, 2470, 2485, 2492],
      funding: "0.0082%",
    },
    {
      contract: "SOLUSDT",
      description: "Solana / USDT",
      lastPrice: "162.45",
      change24h: "+3.20%",
      volume24h: "$2.5B",
      openInterest: "$1.1B",
      price24h: [158, 160, 161, 159, 162, 163, 162.45],
      funding: "0.0115%",
    },
    {
      contract: "BNBUSDT",
      description: "Binance Coin / USDT",
      lastPrice: "582.23",
      change24h: "+0.45%",
      volume24h: "$1.4B",
      openInterest: "$860M",
      price24h: [575, 580, 578, 581, 583, 585, 582],
      funding: "0.0095%",
    },
  ]);

  const navigate = useNavigate();

  // helper for change color
  const isPositive = (change) => change.startsWith("+");

  return (
    <div className="bg-[#0f0f10] text-gray-200 rounded-xl w-full overflow-x-auto border border-gray-800">
      {/* Table Header */}
      <table className="min-w-full text-sm md:text-base">
        <thead>
          <tr className="text-gray-400 border-b border-gray-800 text-left">
            <th className="px-4 py-3 font-medium">Contract</th>
            <th className="px-4 py-3 font-medium">Description</th>
            <th className="px-4 py-3 font-medium">Last Price</th>
            <th className="px-4 py-3 font-medium">24h Change</th>
            <th className="px-4 py-3 font-medium">24h Volume</th>
            <th className="px-4 py-3 font-medium">Open Interest</th>
            <th className="px-4 py-3 font-medium">24h Prices</th>
            <th className="px-4 py-3 font-medium">Funding</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              onClick={() => navigate('/chart/', { state: { symbol: item.contract } })}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: item.contract } }); }}
              tabIndex={0}
              role="button"
              className="border-b border-gray-800 hover:bg-[#1a1a1b] transition cursor-pointer"
            >
              <td className="px-4 py-3 font-semibold text-white">
                {item.contract}
              </td>
              <td className="px-4 py-3">{item.description}</td>
              <td className="px-4 py-3">{item.lastPrice}</td>
              <td
                className={`px-4 py-3 flex items-center gap-1 ${
                  isPositive(item.change24h)
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {isPositive(item.change24h) ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowDownRight />
                )}
                {item.change24h}
              </td>
              <td className="px-4 py-3">{item.volume24h}</td>
              <td className="px-4 py-3">{item.openInterest}</td>

              {/* 24h Price Mini Chart (using basic div bars) */}
              <td className="px-4 py-3">
                <div className="flex items-end gap-1 h-10">
                  {item.price24h.map((p, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 w-1 rounded-sm"
                      style={{
                        height: `${((p - Math.min(...item.price24h)) /
                          (Math.max(...item.price24h) -
                            Math.min(...item.price24h))) *
                          100}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </td>

              <td className="px-4 py-3 text-gray-300">{item.funding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
