import { NavLink } from "react-router-dom";
import { 
  FiX, FiGift, FiChevronDown, FiBarChart2, FiZap, 
  FiGrid, FiLink, FiRefreshCw, FiHeadphones, FiHexagon, 
  FiDroplet, FiSmartphone, FiLogOut, FiChevronUp, FiChevronRight 
} from "react-icons/fi";
import { useState } from "react";

export const MobileNavDrawer = ({ isOpen, setIsOpen, mode, toggleMode, navigate }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    Support: false,
    Resources: false
  });

  const toggleAccordion = (label) => {
    setExpandedMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const mobileNavItems = [
    { label: "Markets", to: "/markets/", icon: <FiBarChart2 className="text-gray-500" /> },
    { label: "Futures", to: "/chart/", icon: <FiZap className="text-orange-400" /> },
    { label: "Options", to: "/more/strategy-builder", icon: <FiGrid className="text-gray-500" /> },
    { label: "Straddle", to: "/chart/", icon: <FiLink className="text-gray-500" /> },
    { label: "Trackers", to: "/chart/", icon: <FiRefreshCw className="text-orange-400" /> },
    { label: "APIs", to: "/algohub/apis", icon: <FiLink className="text-orange-400" /> },
    { label: "Offers", to: "/more/rewards/", icon: <FiGift className="text-orange-400" /> },
    { 
      label: "Support", 
      icon: <FiHeadphones className="text-orange-500" />,
      subItems: [
        { label: "Raise a Support Ticket", to: "/support/ticket" },
        { label: "Support Center", to: "/support" },
      ]
    },
    { 
      label: "Resources", 
      icon: <FiHexagon className="text-orange-400" />,
      subItems: [
        { label: "Contract Specifications", to: "/resources/contracts" },
        { label: "Trading Fees", to: "/resources/fees" },
        { label: "Settlement Prices", to: "/resources/settlement" },
        { label: "User Guide", to: "/resources/guide" },
        { label: "API Docs", to: "/algohub/apis" },
        { label: "Blog", to: "/blog" },
        { label: "Analytics", to: "/more/analytics/" },
        { label: "Trade Data", to: "/algohub/trading-bot/", state: { activeSection: "Trxn. Logs" } },
        { label: "Trading Bot", to: "/algohub/trading-bot/", isNew: true },
        { label: "Demo Trading", to: "/more/demo-trading/" },
      ]
    },
    { label: "Theme", isTheme: true, icon: <FiDroplet className="text-orange-400" /> },
    { label: "Download App", to: "/download", icon: <FiSmartphone className="text-orange-400" /> },
    { label: "Logout", to: "/logout", icon: <FiLogOut className="text-orange-400" /> },
  ];

  return (
    <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setIsOpen(false)} />
      
      {/* Drawer Content */}
      <div className={`absolute top-0 right-0 h-full w-[85%] sm:w-[320px] shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} ${mode === "dark" ? "bg-[#15161B] text-white" : "bg-white text-black"}`}>
        {/* Menu Header with close button */}
        <div className={`p-4 flex items-center justify-end ${mode === "dark" ? "border-gray-800" : "border-gray-100"}`}>
          <FiX className="text-2xl cursor-pointer hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)} />
        </div>
        
        <div className={`flex flex-col h-[calc(100vh-64px)] overflow-y-auto no-scrollbar pb-24 ${mode === 'dark' ? 'bg-[#040911]' : 'bg-[#F0F2F5]'}`}>
          {/* Navigation Links */}
          <div className="mt-4 px-4 pb-10">
            <div className={`rounded-2xl overflow-hidden border ${mode === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
              {mobileNavItems.map((item, idx) => {
                if (item.isTheme) {
                  return (
                    <div 
                      key={idx}
                      onClick={() => toggleMode()}
                      className={`flex items-center justify-between p-4 border-b last:border-0 cursor-pointer transition-all ${
                        mode === "dark" ? "hover:bg-gray-800 border-gray-800" : "hover:bg-gray-50 border-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm font-bold">{item.label}</span>
                      </div>
                      <div className={`w-9 h-5 rounded-full relative transition-colors ${mode === "dark" ? "bg-orange-500" : "bg-gray-300"}`}>
                        <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform ${mode === "dark" ? "translate-x-4" : ""}`} />
                      </div>
                    </div>
                  );
                }

                if (item.subItems) {
                  return (
                    <div key={idx} className="border-b last:border-0">
                      <div 
                        onClick={() => toggleAccordion(item.label)}
                        className={`flex items-center justify-between p-4 cursor-pointer transition-all ${
                          mode === "dark" ? "hover:bg-gray-800 border-gray-800" : "hover:bg-gray-50 border-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xl">{item.icon}</span>
                          <span className={`text-sm font-bold ${mode === 'dark' ? 'text-gray-100' : 'text-[#FF6A0D]'}`}>
                            {item.label}
                          </span>
                        </div>
                        {expandedMenus[item.label] ? <FiChevronUp className="text-gray-400" /> : <FiChevronDown className="text-gray-400" />}
                      </div>
                      
                      {/* Sub-items accordion */}
                      <div className={`transition-all duration-300 overflow-hidden ${expandedMenus[item.label] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className={`py-2 ${mode === 'dark' ? 'bg-[#0c111c]' : 'bg-gray-50/50'}`}>
                          {item.subItems.map((sub, sIdx) => (
                            <NavLink
                              key={sIdx}
                              to={sub.to}
                              state={sub.state}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) => `
                                flex items-center gap-4 px-10 py-3 transition-all
                                ${isActive ? (mode === "dark" ? "text-orange-400" : "text-orange-600") : (mode === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black')}
                              `}
                            >
                              <div className="flex items-center gap-4">
                                <span className={`w-[2px] h-4 ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></span>
                                <span className="text-[13.5px] font-semibold whitespace-nowrap">{sub.label}</span>
                                {sub.isNew && <span className="text-[8px] bg-orange-500 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">New</span>}
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <NavLink
                    key={idx}
                    to={item.to || "#"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center justify-between p-4 border-b last:border-0 transition-all
                      ${isActive ? (mode === "dark" ? "bg-orange-500/10 text-orange-400" : "bg-orange-50 text-orange-600") : ""}
                      ${mode === "dark" ? "hover:bg-gray-800 border-gray-800" : "hover:bg-gray-50 border-gray-100"}
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-4">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-bold">{item.label}</span>
                        </div>
                        <FiChevronRight className={`text-gray-400 transition-transform ${isActive ? "text-orange-500" : ""}`} />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
