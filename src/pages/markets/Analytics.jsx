import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ReferenceLine,
} from "recharts";
import { FaChevronDown } from "react-icons/fa";

/**
 * OptionsDashboard
 * - mode prop controls dark/light, use: <OptionsDashboard mode={mode} />
 * - All chart data arrays are empty placeholders (API should fill them)
 * - Recharts used for charts; Tailwind classes are conditionally applied via isDark
 */

const expiryOptions = [
  "All",
  "D1 - Exp: 30/10/25",
  "W1 - Exp: 31/10/25",
  "D3 - Exp: 01/11/25",
  "W2 - Exp: 07/11/25",
  "W3 - Exp: 14/11/25",
  "M2 - Exp: 28/11/25",
];

const currencyOptions = ["BTC", "ETH", "SOL"];

const SectionHeader = ({
  title,
  selectedExpiry,
  setSelectedExpiry,
  selectedTime,
  setSelectedTime,
  isDark,
}) => {
  const [openExpiry, setOpenExpiry] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <h3 className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          {title}
        </h3>

        {/* Expiry dropdown (custom) */}
        <div className="relative">
          <button
            onClick={() => setOpenExpiry((s) => !s)}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border ${
              isDark ? "bg-[#1E1F24] border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            {selectedExpiry}
            <FaChevronDown />
          </button>

          {openExpiry && (
            <div
              className={`absolute z-30 mt-2 w-60 rounded-md shadow-md overflow-hidden ${
                isDark ? "bg-[#1E1F24] border border-gray-700 text-gray-200" : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {expiryOptions.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedExpiry(opt.split(" ")[0]);
                    setOpenExpiry(false);
                  }}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2A2B32]`}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeframe dropdown (simple) */}
        <div className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className={`text-sm rounded-md border px-2 py-1 ${
              isDark ? "bg-[#1E1F24] border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            <option>Last 12 hours</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
        </div>
      </div>

      {/* Right controls: legend + currency */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>Calls</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>Puts</span>
          </div>
        </div>

        <div>
          <select
            className={`text-sm rounded-md border px-3 py-1 ${
              isDark ? "bg-[#1E1F24] border-gray-700 text-gray-200" : "bg-white border-gray-200 text-gray-700"
            }`}
            // keep selected currency local in parent when integrating API
          >
            {currencyOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const ChartCard = ({ children, isDark }) => {
  return (
    <div
      className={`rounded-xl border p-4 mb-6 transition-colors duration-300 ${
        isDark ? "bg-[#1E1F24] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
};

const EmptyPlaceholder = ({ isDark }) => (
  <div className={`w-full h-full flex items-center justify-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
    No data yet
  </div>
);

const OptionsDashboard = ({ mode = "light" }) => {
  const isDark = mode === "dark";
  const navigate = useNavigate();

  // Local controls for each chart (expiry/time) - these will be used when you hook API
  const [oiExpiry, setOiExpiry] = useState("D1");
  const [oiTime, setOiTime] = useState("Last 12 hours");

  const [volExpiry, setVolExpiry] = useState("D1");
  const [ivrvTime, setIvRvTime] = useState("Daily");

  const [ivrvExpiry, setIvRvExpiry] = useState("D1");
  const [impliedExpiry, setImpliedExpiry] = useState("D1");

  // Placeholder: keep data arrays empty — API should populate these with objects like:
  // { strike: 108800, calls: 2000000, puts: 800000 } for bar charts
  const emptyData = [];

  // For line charts (IV vs RV) you might expect: { time: '2025-10-23 12:00', iv: 40, rv: 60 }
  const emptyLineData = [];

  return (
    <div className={`w-full px-4 md:px-6 lg:px-8 py-6 ${isDark ? "bg-[#121317]" : "bg-gray-50"}`}>

      <div className="flex flex-wrap gap-3 mb-6">
        {[
          "Recent Trades",
          "Taker Activity",
          "Implied Volatility",
          "Volume",
          "Open Interest",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm font-medium border shadow-sm transition ${
              tab === "Open Interest"
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-[#1E1F24] border-gray-700 text-gray-200 hover:bg-[#2A2B32]"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Open Interest Change */}
      <ChartCard isDark={isDark}>
        <SectionHeader
          title="Open Interest Change"
          selectedExpiry={oiExpiry}
          setSelectedExpiry={setOiExpiry}
          selectedTime={oiTime}
          setSelectedTime={setOiTime}
          isDark={isDark}
        />

        <div className="w-full h-[360px]">
          {emptyData.length === 0 ? (
            <EmptyPlaceholder isDark={isDark} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emptyData} margin={{ top: 10, right: 20, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#2A2B32" : "#e5e7eb"} />
                <XAxis dataKey="strike" tick={{ fill: isDark ? "#aaa" : "#555" }} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1F24" : "#fff", borderColor: isDark ? "#333" : "#e5e7eb" }} />
                <Bar dataKey="calls" fill="#22c55e" />
                <Bar dataKey="puts" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </ChartCard>

      {/* Volume vs Strike */}
      <ChartCard isDark={isDark}>
        <SectionHeader
          title="Volume vs Strike"
          selectedExpiry={volExpiry}
          setSelectedExpiry={setVolExpiry}
          selectedTime={oiTime}
          setSelectedTime={setOiTime}
          isDark={isDark}
        />

        <div className="w-full h-[360px]">
          {emptyData.length === 0 ? (
            <EmptyPlaceholder isDark={isDark} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emptyData} margin={{ top: 10, right: 20, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#2A2B32" : "#e5e7eb"} />
                <XAxis dataKey="strike" tick={{ fill: isDark ? "#aaa" : "#555" }} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1F24" : "#fff", borderColor: isDark ? "#333" : "#e5e7eb" }} />
                <Bar dataKey="calls" fill="#22c55e" />
                <Bar dataKey="puts" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </ChartCard>

      {/* IV vs RV (line) */}
      <ChartCard isDark={isDark}>
        <SectionHeader
          title="IV vs RV"
          selectedExpiry={ivrvExpiry}
          setSelectedExpiry={setIvRvExpiry}
          selectedTime={ivrvTime}
          setSelectedTime={setIvRvTime}
          isDark={isDark}
        />

        <div className="w-full h-[360px]">
          {emptyLineData.length === 0 ? (
            <EmptyPlaceholder isDark={isDark} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emptyLineData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#2A2B32" : "#e5e7eb"} />
                <XAxis dataKey="time" tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <YAxis tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1F24" : "#fff", borderColor: isDark ? "#333" : "#e5e7eb" }} />
                <Line type="monotone" dataKey="iv" stroke="#ef4444" dot={false} name="Implied Volatility" />
                <Line type="monotone" dataKey="rv" stroke="#22c55e" dot={false} name="Realised Volatility" />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </ChartCard>

      {/* IV-RV (line with zero baseline and sd bands) */}
      <ChartCard isDark={isDark}>
        <SectionHeader
          title="IV-RV"
          selectedExpiry={ivrvExpiry}
          setSelectedExpiry={setIvRvExpiry}
          selectedTime={ivrvTime}
          setSelectedTime={setIvRvTime}
          isDark={isDark}
        />

        <div className="w-full h-[360px]">
          {emptyLineData.length === 0 ? (
            <EmptyPlaceholder isDark={isDark} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emptyLineData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#2A2B32" : "#e5e7eb"} />
                <XAxis dataKey="time" tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <YAxis tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1F24" : "#fff", borderColor: isDark ? "#333" : "#e5e7eb" }} />
                {/* Zero baseline */}
                <ReferenceLine y={0} stroke={isDark ? "#444" : "#ddd"} />
                <Line type="monotone" dataKey="ivrv" stroke="#111827" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </ChartCard>

      {/* Implied Volatility (smile) */}
      <ChartCard isDark={isDark}>
        <SectionHeader
          title="Implied Volatility"
          selectedExpiry={impliedExpiry}
          setSelectedExpiry={setImpliedExpiry}
          selectedTime={ivrvTime}
          setSelectedTime={setIvRvTime}
          isDark={isDark}
        />

        <div className="w-full h-[360px]">
          {emptyLineData.length === 0 ? (
            <EmptyPlaceholder isDark={isDark} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emptyLineData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#2A2B32" : "#e5e7eb"} />
                <XAxis dataKey="strike" tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <YAxis tick={{ fill: isDark ? "#aaa" : "#555" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1F24" : "#fff", borderColor: isDark ? "#333" : "#e5e7eb" }} />
                <Line type="monotone" dataKey="iv" stroke="#111827" dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </ChartCard>
      {/* ======= Filters + Recent Options Trades Section ======= */}
      <section
  className={`mt-8 rounded-2xl border p-5 transition-all duration-300 flex flex-col lg:flex-row justify-between gap-6 ${
    isDark
      ? "bg-[#1E1F24] border-gray-700 text-gray-200"
      : "bg-gray-100 border-gray-300 text-gray-700"
  }`}
>
  {/* Left Section — Filters */}
  <div
    className={`border rounded-xl p-4 flex-shrink-0`}
    style={{ width: "420px", height: "400px" }}
  >
    <h2 className="text-base font-semibold mb-3">Filters</h2>

    {/* Underlying */}
    <div className="mb-3">
      <label className="block text-sm mb-1">Underlying</label>
      <select
        className={`w-full p-2 rounded-md border text-sm ${
          isDark
            ? "bg-[#1E1F24] border-gray-700 text-gray-200"
            : "bg-gray-100 border-gray-300 text-gray-700"
        }`}
      >
        <option>All</option>
        <option>BTC</option>
        <option>ETH</option>
      </select>
    </div>

    {/* Contract */}
    <div className="mb-3">
      <label className="block text-sm mb-1">Contract</label>
      <select
        className={`w-full p-2 rounded-md border text-sm ${
          isDark
            ? "bg-[#1E1F24] border-gray-700 text-gray-200"
            : "bg-gray-100 border-gray-300 text-gray-700"
        }`}
      >
        <option>All</option>
        <option>Call</option>
        <option>Put</option>
      </select>
    </div>

    {/* Notional Range */}
    <div className="mb-3">
      <label className="block text-sm mb-1">Notional ($)</label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Min ($)"
          className={`w-1/2 p-2 rounded-md border text-sm ${
            isDark
              ? "bg-[#1E1F24] border-gray-700 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-700"
          }`}
        />
        <span className="text-sm">to</span>
        <input
          type="text"
          placeholder="Max ($)"
          className={`w-1/2 p-2 rounded-md border text-sm ${
            isDark
              ? "bg-[#1E1F24] border-gray-700 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-700"
          }`}
        />
      </div>
    </div>

    {/* Expiry */}
    <div className="mb-4">
      <label className="block text-sm mb-1">Expiry</label>
      <select
        className={`w-full p-2 rounded-md border text-sm ${
          isDark
            ? "bg-[#1E1F24] border-gray-700 text-gray-200"
            : "bg-gray-100 border-gray-300 text-gray-700"
        }`}
      >
        <option>All</option>
        <option>30/10/25</option>
        <option>31/10/25</option>
        <option>07/11/25</option>
      </select>
    </div>

    {/* Clear All */}
    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 rounded-md text-sm transition">
      Clear All
    </button>
  </div>

  {/* Right Section — Recent Options Trades */}
  <div
    className={`border rounded-xl p-4 flex flex-col`}
    style={{ width: "1080px", height: "315px" }}
  >
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-base font-semibold">
        Recent Options Trades{" "}
        <span
          className={`text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          (Upto Last 500 trades)
        </span>
      </h2>
    </div>

    {/* Scrollable Table */}
    <div className="flex-1 overflow-y-auto rounded-md">
      <table className="w-full text-sm border-collapse">
        <thead
          className={`sticky top-0 z-10 ${
            isDark ? "bg-[#1E1F24]" : "bg-gray-100"
          }`}
        >
          <tr
            className={`font-semibold ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <th className="py-2 px-3 text-left">Underlying</th>
            <th className="py-2 px-3 text-left">Contract</th>
            <th className="py-2 px-3 text-left">Strike</th>
            <th className="py-2 px-3 text-left">Expiry Date</th>
            <th className="py-2 px-3 text-left">Price</th>
            <th className="py-2 px-3 text-left">Notional ($)</th>
            <th className="py-2 px-3 text-left">Taker</th>
            <th className="py-2 px-3 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr
              key={i}
              onClick={() => navigate('/chart/', { state: { symbol: 'ETH', strike: '4,200' } })}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: 'ETH', strike: '4,200' } }); }}
              tabIndex={0}
              role="button"
              className={`border-t cursor-pointer ${
                isDark ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <td className="py-2 px-3">ETH</td>
              <td className="py-2 px-3">Call</td>
              <td className="py-2 px-3">4,200</td>
              <td className="py-2 px-3">30/10/25</td>
              <td className="py-2 px-3 text-green-500">5.5 ↑</td>
              <td className="py-2 px-3">3,213.01</td>
              <td className="py-2 px-3">Buy</td>
              <td className="py-2 px-3">22:32:36</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p
      className={`text-right text-xs mt-3 ${
        isDark ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Last Updated: 29th Oct 2025, 22:31
    </p>
  </div>
</section>



    </div>
  );
  
};

export default OptionsDashboard;
