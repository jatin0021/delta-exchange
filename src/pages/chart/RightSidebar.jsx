import React, { useState, useContext } from "react";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Mycontext from "../../context/Mycontext";

const TradePanel = () => {
  const { mode } = useContext(Mycontext);
  const [isBuy, setIsBuy] = useState(true);
  const [leverageOpen, setLeverageOpen] = useState(false);
  const [makerDropdown, setMakerDropdown] = useState(false);
  const [selectedLeverage, setSelectedLeverage] = useState("200x");
  const [selectedOrderType, setSelectedOrderType] = useState("Maker Only");

  const orderTypes = [
    "Maker Only",
    "Stop Limit",
    "Stop Market",
    "Trailing Stop",
    "Take Profit Market",
    "Take Profit Limit",
  ];

  const leverages = ["1x", "10x", "25x", "50x", "100x", "150x", "200x"];

  return (
    <div
      className={`w-[360px] h-[554px] ${
        mode === "dark"
          ? "bg-[#15161B] border-gray-700"
          : "bg-white border-gray-300"
      } border text-sm flex flex-col overflow-hidden transition-colors duration-300`}
    >
      {/* ===== BUY / SELL TABS ===== */}
      <div className="flex w-full">
        <button
          onClick={() => setIsBuy(true)}
          className={`w-1/2 py-2 font-semibold transition-colors duration-300 ${
            isBuy
              ? "bg-[#00C087] text-white"
              : mode === "dark"
              ? "bg-[#1E1F24] text-gray-400"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Buy | Long
        </button>
        <button
          onClick={() => setIsBuy(false)}
          className={`w-1/2 py-2 font-semibold ${
            !isBuy
              ? "bg-[#FF5B5B] text-white"
              : mode === "dark"
              ? "bg-[#1E1F24] text-gray-400"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Sell | Short
        </button>
      </div>

      {/* ===== LEVERAGE ===== */}
      <div
        className={`relative border-b ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <button
          onClick={() => setLeverageOpen(!leverageOpen)}
          className="w-full flex justify-between items-center px-2 py-2"
        >
          <span>
            <span
              className={mode === "dark" ? "text-gray-400" : "text-gray-700"}
            >
              Leverage
            </span>{" "}
            <span className="text-orange-500 font-semibold">
              {selectedLeverage}
            </span>
          </span>
          {leverageOpen ? (
            <FiChevronUp
              className={mode === "dark" ? "text-gray-400" : "text-gray-700"}
            />
          ) : (
            <FiChevronDown
              className={mode === "dark" ? "text-gray-400" : "text-gray-700"}
            />
          )}
        </button>

        {/* Dropdown Box */}
        {leverageOpen && (
          <div
            className={`absolute top-full left-0 w-full ${
              mode === "dark"
                ? "bg-[#1E1F24] border-gray-700"
                : "bg-gray-50 border-gray-200"
            } border rounded-md p-2 z-10 transition-colors duration-300`}
          >
            <div className="w-full text-center border border-orange-400 rounded-md py-1 font-semibold text-orange-500">
              {selectedLeverage}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              {leverages.map((x) => (
                <button
                  key={x}
                  onClick={() => setSelectedLeverage(x)}
                  className={`flex-1 ${
                    selectedLeverage === x
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="text-gray-500 text-xs mt-2">
              Max position at {selectedLeverage}{" "}
              <span className="text-black font-semibold">100,000.0 USD</span>
            </div>
            <button className="mt-2 w-full bg-orange-100 text-orange-700 py-1 rounded-md">
              Set to {selectedLeverage}
            </button>
          </div>
        )}
      </div>

      {/* ===== ORDER TYPE ===== */}
      <div
        className={`flex border-b mt-3 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <button
          className={`flex-1 py-2 text-center border-b-2 border-orange-500 text-orange-500`}
        >
          Limit
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          } hover:text-orange-500`}
        >
          Market
        </button>
        <div className="relative flex-1">
          <button
            onClick={() => setMakerDropdown(!makerDropdown)}
            className={`w-full flex justify-center items-center gap-1 py-2 ${
              mode === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {selectedOrderType}{" "}
            <AiOutlineQuestionCircle className="text-yellow-400" />
            {makerDropdown ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Dropdown */}
          {makerDropdown && (
            <div
              className={`absolute top-full left-0 w-full ${
                mode === "dark"
                  ? "bg-[#1E1F24] border-gray-700"
                  : "bg-white border-gray-200"
              } border rounded-md shadow-md z-20 text-sm`}
            >
              {orderTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedOrderType(type);
                    setMakerDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 ${
                    mode === "dark" ? "hover:bg-[#2A2B30]" : "hover:bg-gray-100"
                  } ${
                    type === selectedOrderType
                      ? "text-orange-500 font-semibold"
                      : mode === "dark"
                      ? "text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== LIMIT PRICE ===== */}
      <div
        className={`flex justify-between items-center border-b px-2 py-2 mt-3 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
          Limit Price
        </span>
        <span className={mode === "dark" ? "text-gray-500" : "text-gray-400"}>
          Best Bid
        </span>
      </div>

      {/* ===== QUANTITY ===== */}
      <div
        className={`border-b px-2 py-2 mt-3 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div
          className={`flex justify-between ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span>Quantity</span>
          <span className={mode === "dark" ? "text-gray-500" : "text-gray-400"}>
            1 Lot = 0.001 BTC
          </span>
        </div>
        <div className="flex justify-between text-xs mt-2">
          {["10%", "25%", "50%", "75%", "100%"].map((p) => (
            <button
              key={p}
              className={`${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              } hover:text-orange-500`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* ===== BRACKET ORDER ===== */}
      <div
        className={`flex justify-between items-center border-b px-2 py-2 mt-3 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
          Bracket Order
        </span>
        <button
          className={`border text-xs px-2 py-1 rounded-md ${
            mode === "dark"
              ? "border-gray-700 text-gray-400"
              : "border-gray-300 text-gray-600"
          }`}
        >
          + Add TP/SL
        </button>
      </div>

      {/* ===== FUNDS INFO ===== */}
      <div
        className={`border-b px-2 py-2 mt-3 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div
          className={`flex justify-between ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <span className="flex items-center gap-1">
            Funds req. <span className="text-orange-400 font-bold">⟳</span>
          </span>
          <span className={mode === "dark" ? "text-gray-300" : "text-gray-800"}>
            0.00 USD
          </span>
        </div>
        <div
          className={`flex justify-between ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <span>Available Margin</span>
          <span className={mode === "dark" ? "text-gray-300" : "text-gray-800"}>
            0 USD
          </span>
        </div>
      </div>

      {/* ===== ACTION BUTTON ===== */}
      <button className="bg-orange-500 text-white font-semibold py-2 mt-2 mx-2 rounded-sm">
        Get Verified To Trade
      </button>

      {/* ===== FOOTER OPTIONS ===== */}
      <div
        className={`flex justify-start items-center gap-4 text-xs px-2 mt-4 ${
          mode === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <label className="flex items-center gap-1">
          <input type="checkbox" className="accent-orange-500" /> Reduce Only
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" className="accent-orange-500" /> Maker
        </label>
      </div>

      <div
        className={`flex justify-between text-xs px-2 py-2 border-b mt-3 ${
          mode === "dark"
            ? "text-gray-400 border-gray-700"
            : "text-gray-500 border-gray-300"
        }`}
      >
        <span>GTC</span>
        <span>% Fees</span>
        <span>Calculator</span>
      </div>

      {/* ===== OFFER BOX ===== */}
      <div
        className={`flex justify-between items-center px-2 py-3 rounded-b-md text-xs mt-3 ${
          mode === "dark"
            ? "bg-[#1E1F24] text-gray-400"
            : "bg-gray-50 text-gray-700"
        }`}
      >
        <span>
          Save upto{" "}
          <span className="text-green-500 font-medium">50% on fees</span> with
          Scalper Offer
        </span>
        <button className="text-orange-500 flex items-center gap-1 font-semibold">
          Activate <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TradePanel;
