import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    contract: "BTCUSD",
    description: "Bitcoin Perpetual",
    leverage: "200x",
    lastPrice: "$112,681.0",
    change: "-1.05%",
    volume: "$799.45M",
    openInterest: "$49.6M",
    high: "116064",
    low: "112047",
    funding: "0.0100%",
    changePositive: false,
    category: "LAYER 1",
  },
  {
    contract: "ETHUSD",
    description: "Ethereum Perpetual",
    leverage: "200x",
    lastPrice: "$4,010.90",
    change: "-2.09%",
    volume: "$937.35M",
    openInterest: "$33.9M",
    high: "4174.85",
    low: "3929.7",
    funding: "0.0100%",
    changePositive: false,
    category: "SMART CONTRACTS",
  },
  {
    contract: "SOLUSD",
    description: "Solana Perpetual",
    leverage: "100x",
    lastPrice: "$194.5010",
    change: "-3.32%",
    volume: "$282.94M",
    openInterest: "$16.0M",
    high: "203.992",
    low: "190.295",
    funding: "0.0100%",
    changePositive: false,
    category: "SOLANA ECOSYSTEM",
  },
  {
    contract: "AVAXUSD",
    description: "Avalanche Perpetual",
    leverage: "100x",
    lastPrice: "$19.4880",
    change: "-3.87%",
    volume: "$5.75M",
    openInterest: "$880.5K",
    high: "20.516",
    low: "19.13",
    funding: "-0.0112%",
    changePositive: false,
    category: "LAYER 1",
  },
  {
    contract: "BCHUSD",
    description: "Bitcoin Cash Perpetual",
    leverage: "100x",
    lastPrice: "$562.51",
    change: "+0.37%",
    volume: "$4.60M",
    openInterest: "$492.2K",
    high: "570",
    low: "549.68",
    funding: "-0.0260%",
    changePositive: true,
    category: "LAYER 1",
  },
  {
    contract: "XRPUSD",
    description: "Ripple Perpetual",
    leverage: "100x",
    lastPrice: "$2.6132",
    change: "-0.45%",
    volume: "$55.17M",
    openInterest: "$2.4M",
    high: "2.688",
    low: "2.5666",
    funding: "0.0064%",
    changePositive: false,
    category: "DEFI",
  },
];

const tabs = [
  "ALL",
  "LAYER 1",
  "SMART CONTRACTS",
  "SOLANA ECOSYSTEM",
  "DEFI",
  "AI",
  "RWA",
  "GAMING",
  "NFT",
];

const CryptoTable = ({ mode }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const navigate = useNavigate();

  const isDark = mode === "dark";

  const containerClasses = isDark
    ? "bg-[#15161B] text-white border-gray-700"
    : "bg-white text-black border-gray-200";

  const tableHeaderClasses = isDark
    ? "bg-[#1E1F24] text-gray-300"
    : "bg-gray-50 text-gray-600";

  const tableRowHover = isDark ? "hover:bg-[#1E1F24]" : "hover:bg-gray-50";

  const borderColor = isDark ? "border-gray-700" : "border-gray-100";

  const filteredData =
    activeTab === "ALL"
      ? data
      : data.filter((item) => item.category === activeTab);

  return (
    <div
      className={`w-full px-4 md:px-6 lg:px-8 py-4 rounded-md border ${containerClasses}`}
    >
      {/* Tabs */}
      <div
        className={`flex flex-wrap gap-2 mb-4 border-b pb-2 overflow-x-auto ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 text-sm rounded-md whitespace-nowrap transition ${
              tab === activeTab
                ? isDark
                  ? "bg-orange-900 text-orange-400 font-semibold"
                  : "bg-orange-100 text-orange-600 font-semibold"
                : isDark
                ? "text-gray-400 hover:text-orange-400"
                : "text-gray-500 hover:text-orange-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className={`w-full text-sm border-collapse border ${borderColor}`}
        >
          <thead className={`${tableHeaderClasses} uppercase text-xs`}>
            <tr>
              <th className="text-left px-3 py-2">Contract</th>
              <th className="text-left px-3 py-2">Description</th>
              <th className="text-left px-3 py-2">Last Price</th>
              <th className="text-left px-3 py-2">24h Change</th>
              <th className="text-left px-3 py-2">24h Volume</th>
              <th className="text-left px-3 py-2">Open Interest</th>
              <th className="text-left px-3 py-2">24h Prices</th>
              <th className="text-left px-3 py-2">Funding</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <tr
                  key={i}
                  onClick={() => navigate('/chart/', { state: { symbol: item.contract } })}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: item.contract } }); }}
                  tabIndex={0}
                  role="button"
                  className={`border-t ${borderColor} ${tableRowHover} transition duration-150 cursor-pointer`}
                >
                  <td className="px-3 py-2 font-semibold">{item.contract}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span>{item.description}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          isDark
                            ? "bg-orange-900 text-orange-400"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {item.leverage}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2">{item.lastPrice}</td>
                  <td
                    className={`px-3 py-2 font-medium ${
                      item.changePositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </td>
                  <td className="px-3 py-2">{item.volume}</td>
                  <td className="px-3 py-2">{item.openInterest}</td>
                  <td className="px-3 py-2">
                    <div>
                      <span className="font-semibold">High:</span> {item.high}
                      <br />
                      <span className="font-semibold">Low:</span> {item.low}
                    </div>
                  </td>
                  <td
                    className={`px-3 py-2 font-medium ${
                      item.funding.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.funding}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className={`text-center py-6 italic ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  No data available for "{activeTab}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
