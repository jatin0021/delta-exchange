import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mycontext from "../../context/Mycontext";
import { FiHome, FiBarChart2, FiZap, FiMonitor, FiBriefcase } from "react-icons/fi";
import { RiStockLine } from "react-icons/ri";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const MobileBottomNav = () => {
  const { mode } = useContext(Mycontext);
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      to: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "Markets",
      to: "/markets/",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="6" width="2" height="12" rx="1" fill="currentColor" />
          <rect x="11" y="3" width="2" height="18" rx="1" fill="currentColor" />
          <rect x="17" y="9" width="2" height="9" rx="1" fill="currentColor" />
          <path d="M6 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 7V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 18V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 21V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 18V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Trade",
      to: "/markets/futures", // Assuming futures is the main trade page for mobile
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7.5L8.5 12H11L10 16.5L15.5 12H13L16 7.5H12Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Chart/Book",
      to: "/chart/",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 20L12 20M17 20L12 20M12 20V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Portfolio",
      to: "/algohub/trading-bot/",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L3 13L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 7L21 11L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 13H15C17.2091 13 19 11.2091 19 9V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 11H9C6.79086 11 5 12.7909 5 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 h-[65px] border-t z-[100] flex items-center justify-around pb-1 transition-colors duration-300 ${
        mode === "dark" ? "bg-[#15161B] border-gray-800 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]" : "bg-white border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
      }`}
    >
      {navItems.map((item, idx) => {
        const isActive = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
        
        return (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive: linkActive }) =>
              `relative flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all duration-200 ${
                (linkActive || (item.to !== "/" && location.pathname.startsWith(item.to)))
                  ? "text-[#FF6A00]"
                  : mode === "dark"
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-gray-400 hover:text-gray-700"
              }`
            }
          >
            {isActive && (
                <div className="absolute top-0 w-12 h-1 bg-[#FF6A00] rounded-b-full shadow-[0_2px_10px_rgba(255,106,0,0.5)] animate-in slide-in-from-top-1 duration-300" />
            )}
            <div className={`transition-transform duration-200 ${isActive ? "scale-110" : ""}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] font-bold tracking-tight transition-colors duration-200 ${isActive ? "opacity-100" : "opacity-80"}`}>
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
