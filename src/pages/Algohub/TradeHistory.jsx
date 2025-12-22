import React, { useState } from "react";

const TradeHistory = ({ mode }) => {
  const [selectedTab, setSelectedTab] = useState("futures");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedProduct, setSelectedProduct] = useState("BTCUSD");

  const months = [
    "December", "November", "October", "September",
    "August", "July", "June", "May",
    "April", "March", "February", "January"
  ];

  const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0003 9.99996V12H4.00033V9.99996H2.66699V12C2.66699 12.7333 3.26699 13.3333 4.00033 13.3333H12.0003C12.7337 13.3333 13.3337 12.7333 13.3337 12V9.99996H12.0003ZM11.3337 7.33329L10.3937 6.39329L8.66699 8.11329V2.66663H7.33366V8.11329L5.60699 6.39329L4.66699 7.33329L8.00033 10.6666L11.3337 7.33329Z" fill="currentColor"/>
    </svg>
  );

  const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10" height="12">
      <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" fill="currentColor"/>
    </svg>
  );

  const ChevronDown = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.849 3.771 8.62 0l1.078 1.077-4.85 4.85L0 1.076 1.077 0 4.85 3.771Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className={`min-h-screen ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-gray-50"}`}>
      {/* Header Section */}
      <div className={`${mode === "dark" ? "bg-[#15161B]" : "bg-white"} border-b ${
        mode === "dark" ? "border-gray-700" : "border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${
                mode === "dark" ? "text-gray-100" : "text-gray-900"
              }`}>
                Trade History
              </h1>
              <h5 className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Download month wise historical trade data of Options & Futures.
              </h5>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://static.delta.exchange/web/trade-history/trade-history-india.png" 
                alt="Trade History" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className={`${mode === "dark" ? "bg-[#15161B]" : "bg-white"} border-b ${
        mode === "dark" ? "border-gray-700" : "border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTab("futures")}
                disabled={selectedTab === "futures"}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedTab === "futures"
                    ? "bg-orange-500 text-white cursor-not-allowed"
                    : mode === "dark"
                    ? "bg-[#1E1F24] text-gray-300 hover:bg-[#252730] border border-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                futures
              </button>
              <button
                onClick={() => setSelectedTab("options")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedTab === "options"
                    ? "bg-orange-500 text-white"
                    : mode === "dark"
                    ? "bg-[#1E1F24] text-gray-300 hover:bg-[#252730] border border-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                options
              </button>
            </div>

            {/* Dropdowns */}
            <div className="flex gap-3">
              {/* Year Dropdown */}
              <div className="relative">
                <button className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
                  mode === "dark" 
                    ? "bg-[#1E1F24] border-gray-600 text-gray-200" 
                    : "bg-white border-gray-300 text-gray-700"
                } hover:border-orange-500 transition-colors`}>
                  <span className="text-sm font-medium">{selectedYear}</span>
                  <ChevronDown />
                </button>
              </div>

              {/* Product Dropdown */}
              <div className="relative">
                <button className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
                  mode === "dark" 
                    ? "bg-[#1E1F24] border-gray-600 text-gray-200" 
                    : "bg-white border-gray-300 text-gray-700"
                } hover:border-orange-500 transition-colors`}>
                  <span className="text-sm font-medium">{selectedProduct}</span>
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Delta India Section */}
        <div className="mb-6">
          <h3 className={`text-lg font-semibold mb-6 ${
            mode === "dark" ? "text-gray-200" : "text-gray-800"
          }`}>
            Delta India
          </h3>

          {/* Months Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {months.map((month) => (
              <div
                key={month}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  mode === "dark"
                    ? "bg-[#1E1F24] border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
                } transition-all`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${
                    mode === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}>
                    {month}
                  </span>
                  <div className={mode === "dark" ? "text-gray-500" : "text-gray-400"}>
                    <ChevronRight />
                  </div>
                </div>

                <button className={`flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all ${
                  mode === "dark"
                    ? "border-orange-500 text-orange-500 hover:bg-orange-500/10"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}>
                  <DownloadIcon />
                  <span className="text-xs font-medium">CSV</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
