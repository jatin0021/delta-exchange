import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Watchlist = ({ mode }) => {
  const isDark = mode === "dark";
  const navigate = useNavigate();

  const containerClasses = isDark
    ? "bg-[#15161B] text-white border-gray-700"
    : "bg-white text-black border-gray-300";

  const tableHeaderClasses = isDark
    ? "bg-[#1E1F24] text-gray-300 border-b border-gray-700"
    : "bg-gray-100 text-gray-700 border-b border-gray-300";

  const tableTextClasses = isDark ? "text-gray-400" : "text-gray-500";

  // Simulated empty data
  const data = [];

  return (
    <div className={`w-full h-full ${containerClasses}`}>
      <div className="overflow-x-auto mt-0">
        <table className="w-full text-sm border-collapse">
          <thead className={tableHeaderClasses}>
            <tr>
              {[
                "Contract",
                "Description",
                "Last Price",
                "Mark Price",
                "24h Change",
                "24h Volume",
                "Open Interest",
                "24h Prices",
                "Funding",
              ].map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-medium whitespace-nowrap cursor-pointer"
                >
                  {header}
                  {/* Sort icon */}
                  {["Mark Price", "24h Change", "24h Volume", "Open Interest", "Funding"].includes(
                    header
                  ) && (
                    <span className="inline-block ml-1 text-gray-400">▲▼</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="py-16 text-center text-gray-500 text-sm"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FiSearch size={40} className="mb-3 text-gray-500" />
                    <p className={tableTextClasses}>No Products Found</p>
                  </div>
                </td>
              </tr>
              ) : (
              data.map((item, i) => (
                <tr
                  key={i}
                  onClick={() => navigate('/chart/', { state: { symbol: item.contract } })}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/chart/', { state: { symbol: item.contract } }); }}
                  tabIndex={0}
                  role="button"
                  className="border-b border-gray-700 cursor-pointer"
                >
                  <td className="px-4 py-2">{item.contract}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.lastPrice}</td>
                  <td className="px-4 py-2">{item.markPrice}</td>
                  <td className="px-4 py-2">{item.change}</td>
                  <td className="px-4 py-2">{item.volume}</td>
                  <td className="px-4 py-2">{item.openInterest}</td>
                  <td className="px-4 py-2">{item.prices}</td>
                  <td className="px-4 py-2">{item.funding}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
