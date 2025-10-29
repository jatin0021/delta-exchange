import React, { useState } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const Options = ({ mode }) => {
  const [activeAsset, setActiveAsset] = useState("BTC");
  const [expiry, setExpiry] = useState("29th Oct 2025");

  const isDark = mode === "dark";

  const containerClasses = isDark
    ? "bg-[#15161B] text-white border-gray-700"
    : "bg-white text-black border-gray-300";

  const tableHeaderClasses = isDark
    ? "bg-[#1E1F24] text-gray-300 border-b border-gray-700"
    : "bg-gray-100 text-gray-700 border-b border-gray-300";

  const labelClasses = isDark ? "text-gray-400" : "text-gray-600";

  // Mock Data
  const optionsData = [
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },{
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
    {
      bidQty: 7.79,
      bidPrice: 5682,
      askPrice: 5743,
      askQty: 5.201,
      delta: 0.98,
      oiChg: "5.53K",
      oi: "$8.19K",
      strike: 109600,
      putBidQty: 0.17,
      putBidPrice: 5.5,
      putAskPrice: 6.0,
      putAskQty: 2.597,
    },
    {
      bidQty: 7.79,
      bidPrice: 5291,
      askPrice: 5348,
      askQty: 5.202,
      delta: 0.98,
      oiChg: "-3.11K",
      oi: "$10.25K",
      strike: 110000,
      putBidQty: 7.79,
      putBidPrice: 7.0,
      putAskPrice: 9.0,
      putAskQty: 5.667,
    },
  ];

  return (
    <div className={`w-full min-h-screen p-4 ${containerClasses}`}>
      {/* --- Top Controls --- */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {/* Asset Toggle */}
          {["BTC", "ETH"].map((asset) => (
            <button
              key={asset}
              onClick={() => setActiveAsset(asset)}
              className={`px-4 py-2 text-sm rounded-md border ${
                activeAsset === asset
                  ? "border-orange-400 text-orange-400"
                  : "border-transparent text-gray-400"
              }`}
            >
              {asset}
            </button>
          ))}

          {/* Expiry Dropdown */}
          <div
            className={`flex items-center px-3 py-2 border rounded-md cursor-pointer ${
              isDark
                ? "bg-[#1E1F24] border-gray-700 text-gray-200"
                : "bg-gray-100 border-gray-300 text-gray-700"
            }`}
          >
            {expiry} <FiChevronDown className="ml-2" />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <span className={`text-sm ${labelClasses}`}>
            24 hr Volume <span className="font-semibold text-white">$2151.5M</span>
          </span>
          <button
            className={`flex items-center px-3 py-2 rounded-md text-sm ${
              isDark
                ? "bg-[#1E1F24] border border-gray-700 text-gray-200"
                : "bg-gray-100 border border-gray-300 text-gray-800"
            }`}
          >
            Download <FiChevronDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* --- BTC Info --- */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-green-400">
          BTC: <span className="font-semibold">$115,300.8</span>
        </span>
        <span className={labelClasses}>Time to Expiry: 0d:17h:50m</span>
      </div>

      {/* --- Options Table --- */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className={tableHeaderClasses}>
              {/* Calls */}
              <th colSpan="7" className="py-3 px-4 text-left text-orange-400">
                Calls
              </th>
              <th className="py-3 px-4 text-center border-x border-gray-700 text-gray-400">
                Strike
              </th>
              {/* Puts */}
              <th colSpan="7" className="py-3 px-4 text-right text-blue-400">
                Puts
              </th>
            </tr>

            <tr className={tableHeaderClasses}>
              <th className="px-3 py-2 text-left">Bid Qty BTC</th>
              <th className="px-3 py-2 text-left">Bid Price / IV</th>
              <th className="px-3 py-2 text-left">Ask Price / IV</th>
              <th className="px-3 py-2 text-left">Ask Qty BTC</th>
              <th className="px-3 py-2 text-left">Delta</th>
              <th className="px-3 py-2 text-left">6H OI Chg.</th>
              <th className="px-3 py-2 text-left">OI</th>

              <th className="px-3 py-2 text-center border-x border-gray-700">Strike</th>

              <th className="px-3 py-2 text-right">OI</th>
              <th className="px-3 py-2 text-right">6H OI Chg.</th>
              <th className="px-3 py-2 text-right">Delta</th>
              <th className="px-3 py-2 text-right">Bid Qty BTC</th>
              <th className="px-3 py-2 text-right">Bid Price / IV</th>
              <th className="px-3 py-2 text-right">Ask Price / IV</th>
              <th className="px-3 py-2 text-right">Ask Qty BTC</th>
            </tr>
          </thead>

          <tbody>
            {optionsData.map((row, i) => (
              <tr
                key={i}
                className={`border-t ${
                  isDark ? "border-gray-800 hover:bg-[#1E1F24]" : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="px-3 py-2">{row.bidQty}</td>
                <td className="px-3 py-2 text-green-400">${row.bidPrice}</td>
                <td className="px-3 py-2 text-red-400">${row.askPrice}</td>
                <td className="px-3 py-2">{row.askQty}</td>
                <td className="px-3 py-2">{row.delta}</td>
                <td className="px-3 py-2">{row.oiChg}</td>
                <td className="px-3 py-2">{row.oi}</td>

                <td className="px-3 py-2 text-center border-x border-gray-700 font-semibold">
                  {row.strike}
                </td>

                <td className="px-3 py-2 text-right">{row.oi}</td>
                <td className="px-3 py-2 text-right">{row.oiChg}</td>
                <td className="px-3 py-2 text-right">{-row.delta}</td>
                <td className="px-3 py-2 text-right">{row.putBidQty}</td>
                <td className="px-3 py-2 text-right text-green-400">${row.putBidPrice}</td>
                <td className="px-3 py-2 text-right text-red-400">${row.putAskPrice}</td>
                <td className="px-3 py-2 text-right">{row.putAskQty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Options;
