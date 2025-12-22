import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const PNLAnalytics = ({ mode }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days");

  return (

    <div className={`h-[calc(100vh-60px)] overflow-y-auto px-6 py-4 ${
      mode === "dark" ? "bg-[#0b0c0f] text-gray-200" : "bg-white text-gray-800"
    }`}>

            {/* --- NEW SECTION: Trading Equity --- */}
      <div className="pt-6 mb-10">
        {/* Header Row */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex gap-12">
            <div>
              <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>Total Unrealized PNL</p>
              <p className="font-semibold text-green-600">₹ 0</p>
            </div>
            <div>
              <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>Delta Cash</p>
              <p className="font-semibold text-green-600">₹ 0</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-green-600">
                <div className="w-4 h-4 bg-green-600 rounded-full" />
                INR
              </div>
              <div className={`flex items-center gap-1 ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                USD
              </div>
            </div>
            <div className={`text-sm px-4 py-2 rounded-md shadow-sm ${
              mode === "dark" ? "bg-purple-900/30 text-purple-300" : "bg-purple-100 text-purple-900"
            }`}>
              <span className="font-semibold">Refer Your Friends</span>
              <p className="text-green-600 text-xs">
                Earn 10% of their trading fees
              </p>
            </div>
          </div>
        </div>

        {/* Period Tabs */}
        <div className="flex items-center gap-4 mb-6">
          {["Last 7 days", "Last 30 days", "Customize"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-5 py-2 rounded-md text-sm font-medium border transition-all ${
                selectedPeriod === period
                  ? "border-orange-500 bg-orange-50 " + (mode === "dark" ? "text-gray-100" : "text-black")
                  : (mode === "dark" 
                      ? "border-gray-600 text-gray-300 bg-[#1E1F24] hover:bg-[#252730]" 
                      : "border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-200")
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Trading Equity Chart Section */}
        <div className={`border rounded-lg p-5 mb-6 ${
          mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-200 bg-white"
        }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className={`font-medium text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}>TRADING EQUITY</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1 text-orange-600">
                <span className="w-3 h-3 bg-orange-500 inline-block rounded-sm" />
                Trading Equity
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <span className="w-3 h-3 border border-green-600 inline-block rounded-full" />
                Deposit
              </div>
              <div className="flex items-center gap-1 text-red-500">
                <span className="w-3 h-3 border border-red-500 inline-block rounded-full" />
                Withdrawal
              </div>
              <div className={`flex items-center gap-1 ${mode === "dark" ? "text-gray-300" : "text-black"}`}>
                <span className={`w-3 h-3 border inline-block rounded-full ${
                  mode === "dark" ? "border-gray-300" : "border-black"
                }`} />
                Liquidation Fees
              </div>
            </div>
          </div>

          <div className={`flex flex-col items-center justify-center h-56 ${
            mode === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            <FaFileAlt className={`text-5xl mb-2 ${mode === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className="text-sm">Data not Found</p>
          </div>
        </div>

        {/* Footnotes */}
        <div className={`text-sm space-y-2 leading-relaxed ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          <p>
            • The chart will show data only for periods when there has been
            transactional activity in your account.
          </p>
          <p>• The chart updates once every 6 hours.</p>
          <p>• Referral income is not included in Trading Equity Chart.</p>
          <p>
            • The daily aggregated liquidation fee is shown at the end of day.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex items-center gap-4 mb-6 border-b pb-3 ${
        mode === "dark" ? "border-gray-700" : "border-gray-200"
      }`}>
        {["All", "Futures", "Options"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all border ${
              selectedTab === tab
                ? "border-orange-500 bg-orange-50 " + (mode === "dark" ? "text-gray-100" : "text-black")
                : (mode === "dark" 
                    ? "border-gray-600 text-gray-300 bg-[#1E1F24] hover:bg-[#252730]" 
                    : "border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-200")
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
        {[
          { label: "Total Realised PNL", value: "₹ 0" },
          { label: "Win Rate", value: "0 %" },
          { label: "Average Win", value: "₹ 0" },
          { label: "Average Loss", value: "₹ 0" },
          { label: "#Trades", value: "0" },
          { label: "Fees Saved - Delta Cash", value: "₹ 0" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>{stat.label}</p>
            <p className={`text-base font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-900"}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className={`border rounded-lg p-5 ${
          mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-200 bg-white"
        }`}>
          <h3 className={`font-medium text-sm mb-4 ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}>Realized PNL</h3>
          <div className={`flex flex-col items-center justify-center h-56 ${
            mode === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            <FaFileAlt className={`text-5xl mb-2 ${mode === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className="text-sm">Data not Found</p>
          </div>
        </div>

        <div className={`border rounded-lg p-5 ${
          mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-200 bg-white"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-medium text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}>Volume Traded</h3>
            <p className="text-green-600 text-sm">₹ 0</p>
          </div>
          <div className={`flex flex-col items-center justify-center h-56 ${
            mode === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            <FaFileAlt className={`text-5xl mb-2 ${mode === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className="text-sm">Data not Found</p>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className={`border rounded-lg p-5 ${
          mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-200 bg-white"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-medium text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}>Fees Paid</h3>
            <p className="text-sm text-green-600">
              Includes Used Delta Cash: ₹ 0 (-%)
            </p>
          </div>
          <div className={`flex flex-col items-center justify-center h-56 ${
            mode === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            <FaFileAlt className={`text-5xl mb-2 ${mode === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className="text-sm">Data not Found</p>
          </div>
        </div>

        <div className={`border rounded-lg p-5 ${
          mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-200 bg-white"
        }`}>
          <h3 className={`font-medium text-sm mb-4 ${mode === "dark" ? "text-gray-300" : "text-gray-800"}`}>Funding</h3>
          <div className={`flex flex-col items-center justify-center h-56 ${
            mode === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            <FaFileAlt className={`text-5xl mb-2 ${mode === "dark" ? "text-gray-600" : "text-gray-400"}`} />
            <p className="text-sm">Data not Found</p>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className={`text-sm space-y-2 border-t pt-4 leading-relaxed mt-8 ${
        mode === "dark" ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"
      }`}>
        <p>
          • Due to the complexity of financial data, there might be nuances and
          delay. Data displayed above is for reference only.
        </p>
        <p>
          • The filter customization enables you to access data spanning a
          maximum of 93 days at once, and it can retrieve information going back
          up to 4 months. Historical data can be downloaded from{" "}
          <span className="text-orange-500 underline cursor-pointer">
            here
          </span>
          .
        </p>
        <p>
          • Positions opened and closed at the same price are not considered as
          trades.
        </p>
      </div>
    </div>
  );
};

export default PNLAnalytics;
