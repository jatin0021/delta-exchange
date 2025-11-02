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
      <div className="flex justify-between items-center px-6 py-1">
        {/* Left side: navigation links */}
        <div className="flex space-x-8 text-sm font-medium items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right side: volume info + download */}
        <div className="flex items-center space-x-3 text-sm">
          <p className="text-gray-400">
            24 hr Volume{" "}
            <span className="font-semibold text-white dark:text-black">
              $2151.5M
            </span>
          </p>
          <button
            className={`px-3 py-1 rounded-md border text-sm ${
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
