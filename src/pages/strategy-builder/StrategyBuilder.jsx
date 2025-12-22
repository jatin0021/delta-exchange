import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

const StrategyBuilder = ({ mode }) => {
  const [activeView, setActiveView] = useState("chart");
  const [activeChartTab, setActiveChartTab] = useState("open-interest");
  const [activeHoldingsTab, setActiveHoldingsTab] = useState("positions");
  const [selectedTimeframe, setSelectedTimeframe] = useState("D1");

  // Generate realistic Open Interest data
  const generateOpenInterestData = () => {
    const data = [];
    const atmStrike = 86600;
    
    for (let i = 0; i < 43; i++) {
      const strike = 82400 + (i * 400);
      const distanceFromATM = Math.abs(strike - atmStrike) / 1000;
      
      // Calls peak around ATM and slightly above
      const callsBase = Math.max(0, 15000000 - (distanceFromATM * distanceFromATM * 50000));
      const calls = callsBase + (Math.random() * 2000000);
      
      // Puts peak around ATM and slightly below
      const putsBase = Math.max(0, 12000000 - (distanceFromATM * distanceFromATM * 45000));
      const puts = putsBase + (Math.random() * 1500000);
      
      data.push({
        strike,
        calls: Math.round(calls),
        puts: Math.round(puts),
        isATM: strike === atmStrike,
      });
    }
    
    return data;
  };

  // Generate Open Interest Change data
  const generateOIChangeData = () => {
    const data = [];
    const atmStrike = 86600;
    
    for (let i = 0; i < 43; i++) {
      const strike = 82400 + (i * 400);
      const distanceFromATM = Math.abs(strike - atmStrike) / 1000;
      
      // More volatile changes around ATM
      const callsChange = (Math.random() - 0.5) * (10000000 - distanceFromATM * 300000);
      const putsChange = (Math.random() - 0.5) * (8000000 - distanceFromATM * 250000);
      
      data.push({
        strike,
        callsChange: Math.round(callsChange),
        putsChange: Math.round(putsChange),
        isATM: strike === atmStrike,
      });
    }
    
    return data;
  };

  // Generate Volume vs Strike data
  const generateVolumeData = () => {
    const data = [];
    const atmStrike = 86600;
    
    for (let i = 0; i < 43; i++) {
      const strike = 82400 + (i * 400);
      const distanceFromATM = Math.abs(strike - atmStrike) / 1000;
      
      // Volume peaks sharply at ATM
      const callsVolumeBase = Math.max(0, 100000000 - (distanceFromATM * distanceFromATM * 400000));
      const putsVolumeBase = Math.max(0, 85000000 - (distanceFromATM * distanceFromATM * 350000));
      
      const callsVolume = callsVolumeBase + (Math.random() * 10000000);
      const putsVolume = putsVolumeBase + (Math.random() * 8000000);
      
      data.push({
        strike,
        callsVolume: Math.round(callsVolume),
        putsVolume: Math.round(putsVolume),
        isATM: strike === atmStrike,
      });
    }
    
    return data;
  };

  const openInterestData = generateOpenInterestData();
  const oiChangeData = generateOIChangeData();
  const volumeData = generateVolumeData();

  // Calculate totals for stats
  const totalCalls = openInterestData.reduce((sum, item) => sum + item.calls, 0);
  const totalPuts = openInterestData.reduce((sum, item) => sum + item.puts, 0);
  const pcr = (totalPuts / totalCalls).toFixed(2);
  const maxPain = 93200;

  const totalCallsVolume = volumeData.reduce((sum, item) => sum + item.callsVolume, 0);
  const totalPutsVolume = volumeData.reduce((sum, item) => sum + item.putsVolume, 0);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 rounded-lg shadow-lg border ${
          mode === "dark" 
            ? "bg-[#1E1F24] border-gray-700" 
            : "bg-white border-gray-200"
        }`}>
          <p className="text-sm font-semibold mb-2">Strike: ${label?.toLocaleString()}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: ${Math.abs(entry.value).toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Format large numbers
  const formatYAxis = (value) => {
    if (Math.abs(value) >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    }
    return value.toLocaleString();
  };

  // Render chart based on active tab
  const renderChart = () => {
    const chartColors = {
      calls: "#10b981",
      puts: "#ef4444",
      grid: mode === "dark" ? "#374151" : "#e5e7eb",
      text: mode === "dark" ? "#9ca3af" : "#6b7280",
    };

    switch (activeChartTab) {
      case "open-interest":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold">Open Interest</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    mode === "dark"
                      ? "bg-[#1E1F24] border-gray-700 text-gray-300"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="D1">D1</option>
                  <option value="W1">W1</option>
                  <option value="M1">M1</option>
                </select>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                    Tot. Calls: ${(totalCalls / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                    Tot. Puts: ${(totalPuts / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                  PCR: {pcr}
                </div>
                <div className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                  Max Pain: {maxPain.toLocaleString()}
                </div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={openInterestData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis
                  dataKey="strike"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={formatYAxis}
                  label={{
                    value: "Open Interest ($)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: chartColors.text, fontSize: 12 },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="circle"
                />
                <ReferenceLine
                  x={86600}
                  stroke="#999999"
                  strokeDasharray="3 3"
                  label={{
                    value: "BTC: 86,600",
                    position: "top",
                    fill: chartColors.text,
                    fontSize: 11,
                  }}
                />
                <Bar dataKey="calls" fill={chartColors.calls} radius={[3, 3, 0, 0]} name="Calls" />
                <Bar dataKey="puts" fill={chartColors.puts} radius={[3, 3, 0, 0]} name="Puts" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case "oi-change":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold">Open Interest Change</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    mode === "dark"
                      ? "bg-[#1E1F24] border-gray-700 text-gray-300"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="Last 12 hours">Last 12 hours</option>
                  <option value="Last 24 hours">Last 24 hours</option>
                  <option value="Last 7 days">Last 7 days</option>
                </select>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={oiChangeData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis
                  dataKey="strike"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={formatYAxis}
                  label={{
                    value: "Open Interest Change ($)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: chartColors.text, fontSize: 12 },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
                <ReferenceLine y={0} stroke={chartColors.grid} strokeWidth={2} />
                <ReferenceLine
                  x={86600}
                  stroke="#999999"
                  strokeDasharray="3 3"
                  label={{
                    value: "BTC: 86,600",
                    position: "top",
                    fill: chartColors.text,
                    fontSize: 11,
                  }}
                />
                <Bar dataKey="callsChange" radius={[3, 3, 3, 3]} name="Calls Change">
                  {oiChangeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.callsChange >= 0 ? chartColors.calls : chartColors.puts} />
                  ))}
                </Bar>
                <Bar dataKey="putsChange" radius={[3, 3, 3, 3]} name="Puts Change">
                  {oiChangeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.putsChange >= 0 ? chartColors.calls : chartColors.puts} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case "volume-strike":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold">Volume vs Strike</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    mode === "dark"
                      ? "bg-[#1E1F24] border-gray-700 text-gray-300"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="D1">D1</option>
                  <option value="W1">W1</option>
                  <option value="M1">M1</option>
                </select>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                    Tot. Calls: ${(totalCallsVolume / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>
                    Tot. Puts: ${(totalPutsVolume / 1000000).toFixed(2)}M
                  </span>
                </div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={volumeData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis
                  dataKey="strike"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <YAxis
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                  tickFormatter={formatYAxis}
                  label={{
                    value: "Volume ($)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: chartColors.text, fontSize: 12 },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
                <ReferenceLine
                  x={86600}
                  stroke="#999999"
                  strokeDasharray="3 3"
                  label={{
                    value: "BTC: 86,600",
                    position: "top",
                    fill: chartColors.text,
                    fontSize: 11,
                  }}
                />
                <Bar dataKey="callsVolume" fill={chartColors.calls} radius={[3, 3, 0, 0]} name="Calls Volume" />
                <Bar dataKey="putsVolume" fill={chartColors.puts} radius={[3, 3, 0, 0]} name="Puts Volume" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      default:
        return <div className="flex items-center justify-center h-full text-gray-500">Select a chart type</div>;
    }
  };

  return (
    <div
      className={`w-full h-full ${
        mode === "dark" ? "bg-[#0b0c0f] text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Main Container */}
      <div className="flex flex-col h-full">
        {/* Product Header */}
        <div
          className={`h-[50px] border-b flex items-center justify-between px-4 ${
            mode === "dark" ? "bg-[#15161B] border-gray-700" : "bg-white border-gray-300"
          }`}
        >
          {/* Left Section - View Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView("option-chain")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition ${
                  activeView === "option-chain"
                    ? mode === "dark"
                      ? "bg-[#2A2B30] text-white"
                      : "bg-gray-200 text-gray-900"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.4 14.4V9.594H3.6a.6.6 0 0 1 0-1.2h4.8V3.6a.6.6 0 0 1 1.2 0v4.794h4.8a.6.6 0 1 1 0 1.2H9.6V14.4a.6.6 0 1 1-1.2 0M6 13.2a.6.6 0 1 1 0 1.2H3.6a.6.6 0 1 1 0-1.2zm8.4 0a.6.6 0 1 1 0 1.2H12a.6.6 0 1 1 0-1.2zM6 10.8A.6.6 0 1 1 6 12H3.6a.6.6 0 1 1 0-1.2zm8.4 0a.6.6 0 1 1 0 1.2H12a.6.6 0 1 1 0-1.2zM6 6a.6.6 0 0 1 0 1.2H3.6a.6.6 0 0 1 0-1.2zm8.4 0a.6.6 0 1 1 0 1.2H12A.6.6 0 1 1 12 6zM6 3.6a.6.6 0 0 1 0 1.2H3.6a.6.6 0 0 1 0-1.2zm8.4 0a.6.6 0 1 1 0 1.2H12a.6.6 0 1 1 0-1.2z"
                    fill="currentColor"
                  />
                </svg>
                Option Chain
              </button>
              <button
                onClick={() => setActiveView("chart")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition ${
                  activeView === "chart"
                    ? mode === "dark"
                      ? "bg-[#2A2B30] text-white"
                      : "bg-gray-200 text-gray-900"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75 3H5.25V4.5H3.75V13.5H5.25V15H6.75V13.5H8.25V4.5H6.75V3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.25 6H12.75V3H11.25V6H9.75V11.25H11.25V15H12.75V11.25H14.25V6Z"
                    fill="currentColor"
                  />
                </svg>
                Chart
              </button>
            </div>

            {/* Contract Selector */}
            <button
              className={`flex items-center gap-2 px-4 py-1.5 rounded border text-sm font-medium ${
                mode === "dark"
                  ? "bg-[#1E1F24] border-gray-700 hover:bg-[#2A2B30]"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              C-BTC-82400-171225
              <span className="ml-2 text-orange-500 font-semibold">200x</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="5"
                viewBox="0 0 9 5"
              >
                <path
                  fill="currentColor"
                  d="M7.833.13a.51.51 0 01.68 0 .419.419 0 010 .627l-3.846 3.55a.51.51 0 01-.68 0L.141.757C-.047.584-.047.303.14.13s.492-.173.68 0l3.506 3.235L7.833.13z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex overflow-hidden" style={{ height: "590px" }}>
          {/* Left Section - Chart */}
          <div className="flex flex-col border-r h-full" style={{ width: "63.5%" }}>
            {/* Chart Tabs */}
            <div
              className={`flex items-center gap-4 px-4 py-2 border-b ${
                mode === "dark" ? "bg-[#15161B] border-gray-700" : "bg-white border-gray-300"
              }`}
            >
              <button
                onClick={() => setActiveChartTab("open-interest")}
                className={`px-3 py-1.5 text-sm rounded transition ${
                  activeChartTab === "open-interest"
                    ? mode === "dark"
                      ? "bg-[#2A2B30] text-white border-b-2 border-orange-500"
                      : "bg-gray-100 text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Open Interest
              </button>
              <button
                onClick={() => setActiveChartTab("oi-change")}
                className={`px-3 py-1.5 text-sm rounded transition ${
                  activeChartTab === "oi-change"
                    ? mode === "dark"
                      ? "bg-[#2A2B30] text-white border-b-2 border-orange-500"
                      : "bg-gray-100 text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                OI Change
              </button>
              <button
                onClick={() => setActiveChartTab("volume-strike")}
                className={`px-3 py-1.5 text-sm rounded transition ${
                  activeChartTab === "volume-strike"
                    ? mode === "dark"
                      ? "bg-[#2A2B30] text-white border-b-2 border-orange-500"
                      : "bg-gray-100 text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Volume vs Strike
              </button>
            </div>

            {/* Chart Area */}
            <div
              className={`flex-1 overflow-auto ${
                mode === "dark" ? "bg-[#0b0c0f]" : "bg-gray-50"
              }`}
            >
              {renderChart()}
            </div>
          </div>

          {/* Right Section - Orders Basket */}
          <div
            className={`flex flex-col ${
              mode === "dark" ? "bg-[#15161B]" : "bg-white"
            }`}
            style={{ width: "36.5%" }}
          >
            {/* Orders Basket Header */}
            <div
              className={`px-4 py-3 border-b flex items-center justify-between ${
                mode === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Orders Basket</span>
                <button
                  className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                    mode === "dark"
                      ? "bg-[#2A2B30] text-gray-300 hover:bg-[#35363C]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.172 2.05.222.636 1.636 7 8l6.364-6.364L11.95.222 7 5.172Z"
                      fill="currentColor"
                    />
                  </svg>
                  Add Futures
                </button>
              </div>
              <span className="text-xs text-gray-500">BTC Contracts</span>
            </div>

            {/* Orders Basket Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <img
                src="https://static.delta.exchange/web/basket-order/basket-order-light-default.gif"
                alt="basket-order-default"
                className="w-32 h-32 mb-4 opacity-80"
              />
              <div className="text-center mb-6">
                <p className="text-sm font-medium mb-1">
                  + Add Contracts from Options Chain
                </p>
                <p className={`text-xs ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  Selected contracts will show up here
                </p>
              </div>
              <a
                href="https://guides.delta.exchange/delta-exchange-user-guide/trading-guide/order-types/basket-orders"
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-orange-500 hover:text-orange-600 flex items-center gap-1"
              >
                Learn more about basket orders
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0L14 0 14 14 0 14z" />
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="M5.833 3.5v1.167H2.917v6.416h6.416V8.167H10.5v3.5c0 .322-.261.583-.583.583H2.333c-.322 0-.583-.261-.583-.583V4.083c0-.322.261-.583.583-.583h3.5zm6.417-1.75v4.667h-1.167V3.74L6.537 8.287l-.824-.824 4.545-4.546H7.583V1.75h4.667z"
                    />
                  </g>
                </svg>
              </a>
            </div>

            {/* Available Margin */}
            <div
              className={`px-4 py-3 border-t ${
                mode === "dark" ? "border-gray-700 bg-[#1E1F24]" : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Available Margin</span>
                <span className="text-sm font-medium">0 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Holdings */}
        <div
          className={`h-[400px] border-t ${
            mode === "dark" ? "bg-[#15161B] border-gray-700" : "bg-white border-gray-300"
          }`}
        >
          {/* Holdings Tabs */}
          <div
            className={`flex items-center justify-between px-4 py-2 border-b ${
              mode === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveHoldingsTab("positions")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "positions"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Positions
              </button>
              <button
                onClick={() => setActiveHoldingsTab("open-orders")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "open-orders"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Open Orders
              </button>
              <button
                onClick={() => setActiveHoldingsTab("stop-orders")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "stop-orders"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Stop Orders
              </button>
              <button
                onClick={() => setActiveHoldingsTab("tracker-assets")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "tracker-assets"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Tracker Assets
              </button>
              <button
                onClick={() => setActiveHoldingsTab("risk-margin")}
                className={`px-3 py-1.5 text-sm transition relative ${
                  activeHoldingsTab === "risk-margin"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Risk & Margin Details
                {activeHoldingsTab === "risk-margin" && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => setActiveHoldingsTab("fills")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "fills"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Fills
              </button>
              <button
                onClick={() => setActiveHoldingsTab("order-history")}
                className={`px-3 py-1.5 text-sm transition ${
                  activeHoldingsTab === "order-history"
                    ? mode === "dark"
                      ? "text-white border-b-2 border-orange-500"
                      : "text-gray-900 border-b-2 border-orange-500"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Order History
              </button>
            </div>
          </div>

          {/* Holdings Content */}
          <div className="flex-1 flex items-center justify-center h-[calc(100%-50px)]">
            <div className="text-center">
              <svg
                width="72"
                height="72"
                fill="none"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4"
              >
                <path
                  d="M57 66H15C12.6131 66 10.3239 65.0518 8.63604 63.364C6.94821 61.6761 6 59.3869 6 57V9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H51C51.7957 6 52.5587 6.31607 53.1213 6.87868C53.6839 7.44129 54 8.20435 54 9V45H66V57C66 59.3869 65.0518 61.6761 63.364 63.364C61.6761 65.0518 59.3869 66 57 66ZM54 51V57C54 57.7957 54.3161 58.5587 54.8787 59.1213C55.4413 59.6839 56.2043 60 57 60C57.7957 60 58.5587 59.6839 59.1213 59.1213C59.6839 58.5587 60 57.7957 60 57V51H54ZM48 60V12H12V57C12 57.7957 12.3161 58.5587 12.8787 59.1213C13.4413 59.6839 14.2044 60 15 60H48ZM18 21H42V27H18V21ZM18 33H42V39H18V33ZM18 45H33V51H18V45Z"
                  fill="url(#paint0_linear_859_2274)"
                  stroke={mode === "dark" ? "#374151" : "#D1D5DB"}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_859_2274"
                    x1="59.3333"
                    y1="71.5"
                    x2="18.8584"
                    y2="-10.6003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={mode === "dark" ? "#333842" : "#E5E7EB"} />
                    <stop offset="1" stopColor={mode === "dark" ? "#191A1F" : "#F3F4F6"} />
                  </linearGradient>
                </defs>
              </svg>
              <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                No Open Position
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;
