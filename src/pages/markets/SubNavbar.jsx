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
    "relative text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-orange-500";

  const inactiveLinkClasses =
    "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200";

  return (
    <div className={`w-full ${containerClasses}`}>
      <div className="flex justify-between items-center px-4 md:px-6 py-1 overflow-hidden">
        {/* Left side: navigation links - Horizontal scroll on mobile */}
        <div className="flex space-x-6 md:space-x-8 text-sm font-medium items-center overflow-x-auto no-scrollbar whitespace-nowrap py-2 flex-grow">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-200 shrink-0 ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right side: volume info + download - Hidden on small mobile */}
        <div className="hidden sm:flex items-center space-x-3 text-sm shrink-0 ml-4">
          <p className="text-gray-400">
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
