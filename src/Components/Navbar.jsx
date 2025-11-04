import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Mycontext from "../Context/Mycontext";
import {
  FiSearch,
  FiBell,
  FiSettings,
  FiUser,
  FiGrid,
  FiZap,
  FiLink,
  FiBarChart2,
  FiGift,
  FiShare2,
  FiCpu,
  FiMonitor,
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaSun, FaMoon, FaRobot, FaDatabase } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlgoDropdown, setShowAlgoDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const { mode, toggleMode } = useContext(Mycontext);
  
  const handleDropdownEnter = (type) => {
    if (type === "AlgoHub") setShowAlgoDropdown(true);
    if (type === "More") setShowMoreDropdown(true);
  };

  const handleDropdownLeave = (type, event) => {
    // Check if the mouse is moving to the dropdown content
    const dropdownContent = event.relatedTarget;
    const isMovingToDropdown = dropdownContent?.closest('.dropdown-content');
    
    if (!isMovingToDropdown) {
      if (type === "AlgoHub") setShowAlgoDropdown(false);
      if (type === "More") setShowMoreDropdown(false);
    }
  };

  const menuItems = [
    { label: "Markets", to: "/markets/" },
    { label: "Futures", to: "/markets/futures" },
    { label: "Options", to: "/markets/options" },
    { label: "Straddle", to: "/markets/straddle" },
    { label: "Trackers", to: "/markets/trackers" },
    { label: "AlgoHub", to: "/algohub/", hasDropdown: true },
    { label: "More", to: "/more/", hasDropdown: true },
  ];

  const algoDropdownItems = [
    {
      icon: <FiLink className="text-orange-400 text-lg" />,
      title: "APIs",
      desc: "Create API key and Start Trading",
    },
    {
      icon: <FaRobot className="text-orange-400 text-lg" />,
      title: "Trading Bot",
      desc: "Automate Bots from TradingView",
    },
    {
      icon: <FaDatabase className="text-orange-400 text-lg" />,
      title: "Trade Data",
      desc: "Download historical tick by tick data",
    },
  ];

  const moreDropdownItems = [
    {
      section: "Trade",
      items: [
        {
          icon: <FiCpu className="text-orange-400 text-lg" />,
          title: "Strategy Builder",
          desc: "Create and analyse basket orders",
        },
        {
          icon: <FiMonitor className="text-orange-400 text-lg" />,
          title: "Demo Trading",
          desc: "Simulate real trading without risk",
        },
      ],
    },
    {
      section: "Data",
      items: [
        {
          icon: <FiBarChart2 className="text-orange-400 text-lg" />,
          title: "Analytics",
          desc: "A dashboard to visualize options data",
        },
      ],
    },
    {
      section: "Rewards & Promotions",
      items: [
        {
          icon: <FiGift className="text-orange-400 text-lg" />,
          title: "Offers",
          desc: "Claim Your Rewards",
        },
        {
          icon: <FiShare2 className="text-orange-400 text-lg" />,
          title: "Referral Program",
          desc: "Refer Friends and get rewards",
        },
      ],
    },
  ];

  return (
    <nav
      className={`${
        mode === "dark"
          ? "bg-[#15161B] text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      } border-b w-full transition-colors duration-300`}
    >
      <div className="max-w-[1440px] mx-auto px-3 md:px-6 flex items-center justify-between h-14 relative">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-1">
            <div className="w-5 h-5 bg-gradient-to-tr from-green-500 to-orange-500 rounded-sm" />
            <div className="font-semibold text-sm">Delta.</div>
            <span
              className={`text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Exchange | INDIA
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5 relative">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative text-sm"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={(e) => handleDropdownLeave(item.label, e)}
              >
                <div className="flex items-center">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${isActive ? 'text-orange-500 font-semibold' : ''} flex items-center`
                    }
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <RiArrowDropDownLine className={`text-xl transition-transform ${
                        (item.label === "AlgoHub" && showAlgoDropdown) || 
                        (item.label === "More" && showMoreDropdown) ? "rotate-180" : ""
                      }`} />
                    )}
                  </NavLink>
                </div>

                {item.label === "AlgoHub" && (
                  <>
                    <span className="absolute -top-2 right-[-18px] text-[10px] bg-yellow-500 text-black font-semibold px-1 rounded">
                      New
                    </span>

                    {/* AlgoHub Dropdown */}
                    {showAlgoDropdown && (
                      <div
                        className={`dropdown-content absolute top-5 -left-4 w-64 p-3 rounded-lg shadow-lg z-50 border ${
                          mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-white border-gray-200"
                        }`}
                        onMouseLeave={() => setShowAlgoDropdown(false)}
                      >
                        {algoDropdownItems.map((d, i) => (
                          <NavLink key={i} to={`/algohub/${d.title.toLowerCase().replace(/\s+/g, '-')}` }>
                            <div
                              className={`flex items-start gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#2A2B30] transition ${
                                mode === "dark" ? "text-gray-200" : "text-gray-700"
                              }`}
                            >
                              {d.icon}
                              <div>
                                <p className="text-sm font-medium">{d.title}</p>
                                <p
                                  className={`text-xs ${
                                    mode === "dark" ? "text-gray-400" : "text-gray-500"
                                  }`}
                                >
                                  {d.desc}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* More Dropdown */}
                {item.label === "More" && showMoreDropdown && (
                  <div
                    className={`dropdown-content absolute top-5 -left-4 w-72 p-3 rounded-lg shadow-lg z-50 border ${
                      mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-white border-gray-200"
                    }`}
                    onMouseLeave={() => setShowMoreDropdown(false)}
                  >
                    {moreDropdownItems.map((section, sIdx) => (
                      <div key={sIdx} className="mb-3 last:mb-0">
                        <p
                          className={`text-xs font-semibold mb-1 ${
                            mode === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {section.section}
                        </p>
                        {section.items.map((d, i) => (
                          <NavLink key={i} to={`/more/${d.title.toLowerCase().replace(/\s+/g, '-')}` }>
                            <div
                              className={`flex items-start gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-[#2A2B30] transition ${
                                mode === "dark" ? "text-gray-200" : "text-gray-700"
                              }`}
                            >
                              {d.icon}
                              <div>
                                <p className="text-sm font-medium">{d.title}</p>
                                <p
                                  className={`text-xs ${
                                    mode === "dark" ? "text-gray-400" : "text-gray-500"
                                  }`}
                                >
                                  {d.desc}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search */}
          <div
            className={`hidden md:flex items-center px-3 py-1 rounded-md w-52 ${
              mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-100"
            }`}
          >
            <FiSearch
              className={`text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search"
              className={`bg-transparent text-xs ml-2 w-full outline-none ${
                mode === "dark"
                  ? "placeholder-gray-400 text-white"
                  : "placeholder-gray-500 text-black"
              }`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
            Add Bank
          </button>

          <div
            className={`hidden md:flex items-center px-3 py-1.5 rounded-md text-sm ${
              mode === "dark" ? "bg-[#1E1F24]" : "bg-gray-100"
            }`}
          >
            <BsCurrencyRupee
              className={`mr-1 text-base ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            />
            0.00
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <FiZap
              className={`hidden sm:block cursor-pointer text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <FiUser
              className={`hidden sm:block cursor-pointer text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <FiBell
              className={`hidden sm:block cursor-pointer text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <FiSettings
              className={`hidden sm:block cursor-pointer text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <FiGrid
              className={`hidden sm:block cursor-pointer text-lg ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />

            {/* 🌗 Theme Toggle */}
            <button
              onClick={toggleMode}
              className={`p-2 rounded-full transition ${
                mode === "dark"
                  ? "bg-[#1E1F24] text-yellow-300"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {mode === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col justify-between w-6 h-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-full h-0.5 bg-current"></span>
            <span className="block w-full h-0.5 bg-current"></span>
            <span className="block w-full h-0.5 bg-current"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden px-4 py-3 flex flex-col gap-3 border-t ${
            mode === "dark"
              ? "bg-[#1E1F24] border-gray-700"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className="text-sm cursor-pointer hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div
            className={`flex items-center px-3 py-1.5 rounded-md mt-2 ${
              mode === "dark" ? "bg-[#2A2B30]" : "bg-gray-200"
            }`}
          >
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className={`bg-transparent text-sm ml-2 w-full outline-none ${
                mode === "dark"
                  ? "placeholder-gray-400 text-white"
                  : "placeholder-gray-500 text-black"
              }`}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
