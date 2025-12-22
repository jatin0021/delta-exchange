import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const Options = ({ mode }) => {
  const [activeAsset, setActiveAsset] = useState("BTC");
  const [expiry] = useState("29th Oct 2025");

  const isDark = mode === "dark";

  const navigate = useNavigate();

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

  const [activeSide, setActiveSide] = useState("Calls"); // "Calls" or "Puts" for mobile view

  return (
    <div className={`w-full min-h-screen p-4 ${containerClasses}`}>
      {/* --- Top Controls --- Reverted for Desktop */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
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
            24 hr Volume <span className="font-semibold text-white md:text-white">$2151.5M</span>
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

      {/* --- BTC Info & Mobile Toggle --- */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-green-400">
          BTC: <span className="font-semibold">$115,300.8</span>
        </span>
        
        {/* Mobile Call/Put Toggle */}
        <div className="md:hidden flex p-1 rounded-lg bg-gray-900/50 border border-gray-800 w-32">
             <button 
                onClick={() => setActiveSide("Calls")}
                className={`flex-1 py-1 text-[10px] font-bold uppercase rounded transition-all ${activeSide === 'Calls' ? 'bg-orange-500 text-white' : 'text-gray-500'}`}
             >
                Calls
             </button>
             <button 
                onClick={() => setActiveSide("Puts")}
                className={`flex-1 py-1 text-[10px] font-bold uppercase rounded transition-all ${activeSide === 'Puts' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
             >
                Puts
             </button>
        </div>

        <span className={`${labelClasses} hidden md:inline text-sm`}>Time to Expiry: 0d:17h:50m</span>
      </div>

      {/* --- Options Table --- */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className={tableHeaderClasses}>
              {/* Calls Side */}
              {(activeSide === "Calls" || !window.matchMedia("(max-width: 768px)").matches) && (
                <th colSpan={window.matchMedia("(max-width: 768px)").matches ? "4" : "7"} className="py-3 px-4 text-left text-orange-400">
                  Calls
                </th>
              )}
              
              <th className="py-3 px-4 text-center border-x border-gray-700 text-gray-400">
                Strike
              </th>

              {/* Puts Side */}
              {(activeSide === "Puts" || !window.matchMedia("(max-width: 768px)").matches) && (
                <th colSpan={window.matchMedia("(max-width: 768px)").matches ? "4" : "7"} className="py-3 px-4 text-right text-blue-400">
                  Puts
                </th>
              )}
            </tr>

            <tr className={tableHeaderClasses}>
              {/* Desktop Headers (Visible based on mobile toggle or screen width) */}
              {(activeSide === "Calls" || !window.matchMedia("(max-width: 768px)").matches) && (
                <>
                  <th className="px-3 py-2 text-left">Bid Qty BTC</th>
                  <th className="px-3 py-2 text-left">Bid Price / IV</th>
                  <th className="px-3 py-2 text-left">Ask Price / IV</th>
                  <th className="px-3 py-2 text-left">Ask Qty BTC</th>
                  <th className="hidden lg:table-cell px-3 py-2 text-left">Delta</th>
                  <th className="hidden lg:table-cell px-3 py-2 text-left">6H OI Chg.</th>
                  <th className="hidden lg:table-cell px-3 py-2 text-left">OI</th>
                </>
              )}

              <th className="px-3 py-2 text-center border-x border-gray-700 bg-[#1E1F24] z-10 sticky left-0 right-0 md:static">Strike</th>

              {(activeSide === "Puts" || !window.matchMedia("(max-width: 768px)").matches) && (
                <>
                  <th className="hidden lg:table-cell px-3 py-2 text-right">OI</th>
                  <th className="hidden lg:table-cell px-3 py-2 text-right">6H OI Chg.</th>
                  <th className="hidden lg:table-cell px-3 py-2 text-right">Delta</th>
                  <th className="px-3 py-2 text-right">Bid Qty BTC</th>
                  <th className="px-3 py-2 text-right">Bid Price / IV</th>
                  <th className="px-3 py-2 text-right">Ask Price / IV</th>
                  <th className="px-3 py-2 text-right">Ask Qty BTC</th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {optionsData.map((row, i) => (
              <tr
                key={i}
                onClick={() => navigate('/chart/', { state: { strike: row.strike } })}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { strike: row.strike } }); }}
                tabIndex={0}
                role="button"
                className={`border-t ${
                  isDark ? "border-gray-800 hover:bg-[#1E1F24]" : "border-gray-200 hover:bg-gray-50"
                } cursor-pointer transition-colors`}
              >
                {/* Calls Data */}
                {(activeSide === "Calls" || !window.matchMedia("(max-width: 768px)").matches) && (
                  <>
                    <td className="px-3 py-2">{row.bidQty}</td>
                    <td className="px-3 py-2 text-green-400">${row.bidPrice}</td>
                    <td className="px-3 py-2 text-red-400">${row.askPrice}</td>
                    <td className="px-3 py-2">{row.askQty}</td>
                    <td className="hidden lg:table-cell px-3 py-2">{row.delta}</td>
                    <td className="hidden lg:table-cell px-3 py-2">{row.oiChg}</td>
                    <td className="hidden lg:table-cell px-3 py-2">{row.oi}</td>
                  </>
                )}

                <td className="px-3 py-2 text-center border-x border-gray-700 font-semibold bg-[#15161B]/50">
                  {row.strike}
                </td>

                {/* Puts Data */}
                {(activeSide === "Puts" || !window.matchMedia("(max-width: 768px)").matches) && (
                  <>
                    <td className="hidden lg:table-cell px-3 py-2 text-right">{row.oi}</td>
                    <td className="hidden lg:table-cell px-3 py-2 text-right">{row.oiChg}</td>
                    <td className="hidden lg:table-cell px-3 py-2 text-right">{-row.delta}</td>
                    <td className="px-3 py-2 text-right">{row.putBidQty}</td>
                    <td className="px-3 py-2 text-right text-green-400">${row.putBidPrice}</td>
                    <td className="px-3 py-2 text-right text-red-400">${row.putAskPrice}</td>
                    <td className="px-3 py-2 text-right">{row.putAskQty}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Options;
