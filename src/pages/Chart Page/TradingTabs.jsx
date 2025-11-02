import React, { useState, useContext } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import Mycontext from "../../Context/Mycontext";

const TradingTabs = () => {
  const { mode } = useContext(Mycontext);
  const [activeTab, setActiveTab] = useState("Positions");

  const tabs = [
    "Positions",
    "Open Orders",
    "Stop Orders",
    "Tracker Assets",
    "Fills",
    "Order History",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Positions":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Open Position</p>
          </div>
        );
      case "Open Orders":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Open Orders</p>
          </div>
        );
      case "Stop Orders":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Stop Orders</p>
          </div>
        );
      case "Tracker Assets":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Tracker Assets</p>
          </div>
        );
      case "Fills":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Fills Available</p>
          </div>
        );
      case "Order History":
        return (
          <div className={`flex flex-col items-center justify-center h-full ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <FaRegFileAlt size={42} className={`${mode === "dark" ? "text-gray-600" : "text-gray-400"} mb-3`} />
            <p>No Order History</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full ${mode === "dark" ? "bg-[#15161B] text-gray-300 border-gray-700" : "bg-white text-gray-700 border-gray-300"} border overflow-hidden transition-colors duration-300`}>
      {/* Tabs Header */}
      <div className={`flex items-center ${mode === "dark" ? "border-gray-700" : "border-gray-300"} border-b text-sm font-medium overflow-x-auto`}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-3 whitespace-nowrap transition-all ${
              activeTab === tab
                ? mode === "dark" ? "text-white font-semibold" : "text-gray-900 font-semibold"
                : mode === "dark" ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"
            }`}
            style={{ flexShrink: 0 }}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 h-[466px] min-h-[350px]">{renderContent()}</div>
    </div>
  );
};

export default TradingTabs;
