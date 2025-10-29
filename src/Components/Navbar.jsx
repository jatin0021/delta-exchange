import { useState, useContext } from "react";
import Mycontext from "../Context/Mycontext";
import { FiSearch, FiBell, FiSettings, FiUser, FiGrid, FiZap } from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = useContext(Mycontext);

  const menuItems = [
    "Markets",
    "Futures",
    "Options",
    "Straddle",
    "Trackers",
    "AlgoHub",
    "More",
  ];

  return (
    <nav
      className={`${
        mode === "dark"
          ? "bg-[#15161B] text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      } border-b w-full transition-colors duration-300`}
    >
      <div className="max-w-[1440px] mx-auto px-3 md:px-6 flex items-center justify-between h-14">
        
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-gradient-to-tr from-green-500 to-orange-500 rounded-sm" />
            <div className="font-semibold text-sm">Delta.</div>
            <span
              className={`text-sm ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Exchange | INDIA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer hover:text-orange-400 text-sm"
              >
                {item}
                {item === "AlgoHub" && (
                  <span className="absolute -top-2 right-[-18px] text-[10px] bg-yellow-500 text-black font-semibold px-1 rounded">
                    New
                  </span>
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
            <div key={idx} className="text-sm cursor-pointer hover:text-orange-400">
              {item}
            </div>
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
