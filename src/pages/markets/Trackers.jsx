import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const trackersData = [
  {
    contract: "BTC-T",
    description: "Bitcoin Tracker",
    lastPrice: "$112,569.5",
    change: "-1.33%",
    volume: "$1.74K",
    high: "115,431.5",
    low: "112,569.5",
    changePositive: false,
  },
];

const Trackers = ({ mode }) => {
  const isDark = mode === "dark";
  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-68  transition-colors duration-300 ${
        isDark ? "bg-[#0e0f14]" : "bg-gray-50"
      }`}
    >
      <div
        className={`overflow-x-auto rounded-lg border shadow-sm transition-colors duration-300 ${
          isDark
            ? "border-gray-700 bg-[#14151b]"
            : "border-gray-200 bg-white"
        }`}
      >
        <table className="w-full text-sm min-w-[600px]">
          <thead
            className={`text-xs uppercase transition-colors duration-300 ${
              isDark
                ? "bg-[#1c1d23] text-gray-400"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <tr>
              <th className="text-left px-4 py-3 font-medium">Contract</th>
              <th className="text-left px-4 py-3 font-medium">Description</th>
              <th className="text-left px-4 py-3 font-medium">Last Price</th>
              <th className="text-left px-4 py-3 font-medium">24h Change</th>
              <th className="text-left px-4 py-3 font-medium">24h Volume</th>
              <th className="text-left px-4 py-3 font-medium">24h Prices</th>
            </tr>
          </thead>

          <tbody>
            {trackersData.map((item, index) => (
              <tr
                key={index}
                onClick={() => navigate('/chart/', { state: { symbol: item.contract } })}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: item.contract } }); }}
                tabIndex={0}
                role="button"
                className={`border-t transition-colors duration-300 cursor-pointer ${
                  isDark
                    ? "border-gray-700 hover:bg-[#1f2128]"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                {/* Contract */}
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <FaStar
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDark ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {item.contract}
                  </span>
                </td>

                {/* Description */}
                <td
                  className={`px-4 py-3 ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {item.description}
                </td>

                {/* Last Price */}
                <td
                  className={`px-4 py-3 font-semibold ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.lastPrice}
                </td>

                {/* 24h Change */}
                <td
                  className={`px-4 py-3 font-medium ${
                    item.changePositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change}
                </td>

                {/* 24h Volume */}
                <td
                  className={`px-4 py-3 ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {item.volume}
                </td>

                {/* 24h Prices */}
                <td
                  className={`px-4 py-3 ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <div>
                    <span className="font-semibold">High:</span> {item.high}
                    <br />
                    <span className="font-semibold">Low:</span> {item.low}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trackers;
