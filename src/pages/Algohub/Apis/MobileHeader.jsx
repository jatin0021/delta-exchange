import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Mycontext from "../../../context/Mycontext";
import { DeltaLogo } from "../../../components/layout/DeltaLogo";
import { FiUser, FiMenu, FiHelpCircle } from "react-icons/fi";
import { HiOutlineArrowPath } from "react-icons/hi2";

const MobileHeader = () => {
  const { mode } = useContext(Mycontext);
  const isDark = mode === "dark";

  return (
    <div className={`lg:hidden flex items-center justify-between px-4 h-14 border-b transition-colors duration-300 ${
      isDark ? "bg-[#15161B] border-gray-700 text-white" : "bg-white border-gray-100 text-black shadow-sm"
    }`}>
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        {/* Logo used on all screen sizes for consistency, but icon on mobile */}
        <div className="flex items-center">
          <img src="/logo-icon.png" alt="Logo" className="block md:hidden h-8 w-auto" />
          <div className="hidden md:block">
            <DeltaLogo className="w-[139px]" />
          </div>
        </div>
      </NavLink>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Wallet Balance */}
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[13px] font-bold ${
          isDark ? "bg-gray-800 text-green-400" : "bg-gray-50 text-green-600 border border-gray-100"
        }`}>
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/30">
            ₹
          </div>
          <span>0.00</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3.5 text-gray-500">
          <HiOutlineArrowPath className="text-lg cursor-pointer hover:text-orange-500 transition-colors" />
          <FiHelpCircle className="text-lg cursor-pointer hover:text-orange-500 transition-colors" />
          <FiUser className="text-lg cursor-pointer hover:text-orange-500 transition-colors" />
          <FiMenu className="text-xl cursor-pointer hover:text-orange-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
