import React from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = ({ mode }) => {
  const links = [
    { name: "Watchlist", path: "/markets/watchlist" },
    { name: "Options", path: "/markets/options" },
    { name: "Futures", path: "/markets/futures" },
    { name: "Straddle", path: "/markets/straddle" },
    { name: "Trackers", path: "/markets/trackers" },
    { name: "Analytics", path: "/markets/analytics" },
  ];

  const containerClasses =
    mode === "dark"
      ? "bg-[#15161B] text-white border-b border-gray-700"
      : "bg-white text-black border-b border-gray-300";

  const activeLinkClasses =
    "relative text-orange-500 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-8 after:bg-orange-500 font-bold";

  const inactiveLinkClasses =
    "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

  return (
    <div className={`w-full md:static sticky top-0 md:top-0 z-[90] ${containerClasses}`}>
      <div className="flex justify-between items-center px-4 md:px-6 py-0 md:h-12 overflow-hidden">
        {/* Left side: navigation links - Horizontal scroll on mobile */}
        <div className="flex space-x-6 md:space-x-8 text-sm font-medium items-center overflow-x-auto no-scrollbar whitespace-nowrap py-2 md:py-0 h-full flex-grow">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-200 shrink-0 h-full flex items-center ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              {link.name}
              {link.name === "Straddle" && (
                <span className="ml-1 px-1 py-0.5 bg-orange-500 text-[8px] text-white rounded font-black uppercase leading-none md:hidden">New</span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Search Icon for Mobile */}
        <div className="md:hidden flex items-center px-1">
          <button className={`p-1.5 rounded-full transition-colors ${mode === "dark" ? "text-gray-400 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Right side: volume info + download */}
        <div className="hidden sm:flex items-center space-x-3 text-sm shrink-0 ml-4 h-full">
          <p className="text-gray-400 whitespace-nowrap">
            24 hr Volume{" "}
            <span className={mode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}>
              $2,151.5M
            </span>
          </p>
          <button
            className={`px-3 py-1 rounded-md border text-sm transition-colors ${
              mode === "dark"
                ? "border-gray-700 bg-[#1E1F24] text-gray-300 hover:bg-[#24252A]"
                : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Download ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
