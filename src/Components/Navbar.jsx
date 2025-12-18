import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Mycontext from "../Context/Mycontext";
import { DeltaLogo } from "./DeltaLogo";
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
  FiShield,
  FiUsers,
  FiLock,
  FiKey,
  FiFileText,
  FiTrash2,
  FiLogOut,
  FiChevronRight,
  FiCreditCard,
  FiX,
  FiHelpCircle,
} from "react-icons/fi";
import { BsCurrencyRupee, BsBank } from "react-icons/bs";
import { FaSun, FaMoon, FaRobot, FaDatabase } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlgoDropdown, setShowAlgoDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showGridMenu, setShowGridMenu] = useState(false);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [settingsToggles, setSettingsToggles] = useState({
    posSize: false,
    confirmations: true,
    emailAlerts: false
  });
  const { mode, toggleMode } = useContext(Mycontext);
  const navigate = useNavigate();
  
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
          title: "Rewards",
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

  const profileDropdownItems = [
    { icon: <FiShield className="text-blue-500" />, title: "Identity Verification", to: "/account/verification" },
    { icon: <FiUsers className="text-purple-500" />, title: "Sub Accounts", to: "/algohub/trading-bot/", section: "Sub Accounts" },
    { icon: <FiSettings className="text-gray-500" />, title: "Preferences", to: "/algohub/trading-bot/", section: "Preferences" },
    { icon: <FiBarChart2 className="text-green-500" />, title: "PNL Analytics", to: "/algohub/trading-bot/", section: "PNL Analytics" },
    { icon: <BsBank className="text-orange-500" />, title: "Bank Details", to: "/algohub/trading-bot/", section: "Bank Details" },
    { icon: <FiShare2 className="text-orange-600" />, title: "Refer & Earn", to: "/more/referral-program/", highlight: true },
    { icon: <FiLock className="text-red-500" />, title: "Security", to: "/algohub/trading-bot/", section: "Security" },
    { icon: <FiKey className="text-yellow-600" />, title: "API Keys", to: "/algohub/trading-bot/", section: "API Keys" },
    { icon: <FiFileText className="text-indigo-500" />, title: "Transaction Logs", to: "/algohub/trading-bot/", section: "Trxn. Logs" },
    { icon: <FiTrash2 className="text-gray-400" />, title: "Clear Cache", action: () => alert("Cache cleared!") },
    { icon: <FiLogOut className="text-gray-600" />, title: "Logout", to: "/logout" },
  ];

  return (
    <nav
      className={`${
        mode === "dark"
          ? "bg-[#15161B] text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      } border-b w-full transition-colors duration-300 relative z-[40]`}
    >
      <div className="px-4 flex items-center justify-between h-12">
        {/* LEFT: Logo + Nav Links */}
        <div className="flex items-center gap-7">
          <NavLink to="/" className="flex items-center">
            <DeltaLogo mode={mode} />
          </NavLink>

          <div className="hidden lg:flex items-center gap-5">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-12 flex items-center"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={(e) => handleDropdownLeave(item.label, e)}
              >
                <div className="flex items-center">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-[14px] font-semibold transition-colors flex items-center gap-0 hover:text-orange-400 ${
                        isActive ? "text-orange-500" : mode === "dark" ? "text-gray-300" : "text-gray-700"
                      }`
                    }
                  >
                    {item.label}
                    {item.hasDropdown && <RiArrowDropDownLine className="text-xl -ml-0.5" />}
                  </NavLink>
                </div>

                {/* AlgoHub Dropdown */}
                {item.label === "AlgoHub" && showAlgoDropdown && (
                  <div
                    className={`dropdown-content absolute top-12 -left-4 w-64 p-3 rounded-lg shadow-2xl z-50 border transition-colors ${
                      mode === "dark" ? "bg-[#1E1F24] border-gray-700 text-white" : "bg-white border-gray-200 text-black"
                    }`}
                    onMouseEnter={() => setShowAlgoDropdown(true)}
                    onMouseLeave={() => setShowAlgoDropdown(false)}
                  >
                    {algoDropdownItems.map((d, i) => (
                      <NavLink key={i} to={`/algohub/${d.title.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setShowAlgoDropdown(false)}>
                        <div className={`flex items-start gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
                          mode === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        }`}>
                          <span className="mt-1">{d.icon}</span>
                          <div>
                            <p className="text-sm font-medium">{d.title}</p>
                            <p className={`text-xs leading-tight mt-0.5 ${
                              mode === "dark" ? "text-gray-400" : "text-gray-500"
                            }`}>{d.desc}</p>
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}

                {/* More Dropdown */}
                {item.label === "More" && showMoreDropdown && (
                  <div
                    className={`dropdown-content absolute top-12 -left-4 w-72 p-4 rounded-lg shadow-2xl z-50 border transition-colors ${
                      mode === "dark" ? "bg-[#1E1F24] border-gray-700 text-white" : "bg-white border-gray-200 text-black"
                    }`}
                    onMouseEnter={() => setShowMoreDropdown(true)}
                    onMouseLeave={() => setShowMoreDropdown(false)}
                  >
                    {moreDropdownItems.map((section, sIdx) => (
                      <div key={sIdx} className="mb-4 last:mb-0">
                        <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                          mode === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}>{section.section}</p>
                        {section.items.map((d, i) => (
                          <NavLink key={i} to={`/more/${d.title.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setShowMoreDropdown(false)}>
                            <div className={`flex items-start gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
                              mode === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                            }`}>
                              <span className="mt-1">{d.icon}</span>
                              <div>
                                <p className="text-[13.5px] font-medium">{d.title}</p>
                                <p className={`text-[11px] leading-tight mt-0.5 ${
                                  mode === "dark" ? "text-gray-400" : "text-gray-500"
                                }`}>{d.desc}</p>
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
        </div>

        {/* RIGHT: Search + Other Actions */}
        <div className="flex items-center gap-10">
          {/* Search Bar */}
          <div className={`hidden md:flex items-center px-4 py-1.5 rounded-md w-64 ${mode === "dark" ? "bg-[#1E1F24]" : "bg-[#F0F2F5]"}`}>
            <FiSearch className={`text-base ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm ml-2 w-full outline-none placeholder-gray-500"
            />
            <span className="text-[11px] text-gray-500 font-medium ml-2">/</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/algohub/trading-bot/", { state: { activeSection: "Add Funds" } })}
              className="hidden sm:flex items-center bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md text-sm font-bold shadow-md transition-all"
            >
              Add Funds
            </button>

            <div className={`hidden md:flex items-center px-3 py-1.5 rounded-md text-sm font-semibold ${mode === "dark" ? "bg-[#1E1F24] text-gray-200" : "bg-gray-100 text-gray-800"}`}>
              <BsCurrencyRupee className={`mr-0.5 text-lg ${mode === "dark" ? "text-emerald-500" : "text-emerald-600"}`} />
              0.00
            </div>

            {/* Icon Set */}
            <div className="flex items-center gap-5">
              <FiZap
                onClick={() => navigate("/algohub/trading-bot/", { state: { activeSection: "Positions" } })}
                className="cursor-pointer text-lg hover:text-orange-400 transition-colors"
              />
              <FiHelpCircle className="cursor-pointer text-lg hover:text-orange-400 transition-colors" />
              <FiBell
                onClick={() => { setShowNotifications(true); setShowProfileDropdown(false); setShowSettings(false); setShowGridMenu(false); }}
                className={`cursor-pointer text-lg hover:text-orange-400 transition-colors ${showNotifications ? "text-orange-400" : ""}`}
              />
              
              <div className="relative">
                <FiUser
                  onClick={() => { setShowProfileDropdown(!showProfileDropdown); setShowNotifications(false); setShowSettings(false); setShowGridMenu(false); }}
                  className={`cursor-pointer text-lg hover:text-orange-400 transition-colors ${showProfileDropdown ? "text-orange-400" : ""}`}
                />
                {showProfileDropdown && (
                  <>
                    {/* Transparent overlay to close dropdown on click outside */}
                    <div className="fixed inset-0 z-[90]" onClick={() => setShowProfileDropdown(false)} />
                    
                    <div className={`absolute top-12 right-0 w-80 rounded-lg shadow-2xl border z-[100] overflow-hidden ${mode === "dark" ? "bg-[#1E1F24] border-gray-700 text-white" : "bg-white border-gray-200 text-black"}`}>
                      <div className={`p-4 border-b ${mode === "dark" ? "border-gray-700" : "border-gray-100"}`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 cursor-pointer group">
                            <span className="font-bold text-[15px]">lo***@***.com</span>
                            <FiChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <button className="bg-[#FFC107] hover:bg-[#FFB300] text-black text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                            <MdOutlineVerifiedUser className="text-sm" />GET VERIFIED
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          <p className={`text-[12px] ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>User ID : <span className={mode === "dark" ? "text-gray-200" : "text-gray-700 font-medium"}>76249808</span></p>
                          <p className={`text-[12px] ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>Account <span className={`ml-2 font-semibold ${mode === "dark" ? "text-white" : "text-black"}`}>Main</span></p>
                        </div>
                      </div>
                      <div className="py-2">
                        {profileDropdownItems.map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => { 
                              if (item.action) item.action(); 
                              else if (item.section) navigate(item.to, { state: { activeSection: item.section } }); 
                              else navigate(item.to); 
                              setShowProfileDropdown(false); 
                            }} 
                            className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${
                              item.highlight 
                                ? (mode === "dark" ? "bg-orange-500/10 hover:bg-orange-500/20" : "bg-orange-50 hover:bg-orange-100") 
                                : (mode === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50")
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-xl">{item.icon}</span>
                              <span className={`text-[14.5px] font-medium ${item.highlight ? "text-orange-500" : ""}`}>{item.title}</span>
                            </div>
                            {item.highlight && <FiChevronRight className="text-orange-500 text-lg" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <FiSettings
                onClick={() => { setShowSettings(true); setShowProfileDropdown(false); setShowNotifications(false); setShowGridMenu(false); }}
                className={`cursor-pointer text-lg hover:text-orange-400 transition-colors ${showSettings ? "text-orange-400" : ""}`}
              />
              
              <FiGrid
                onClick={() => { setShowGridMenu(true); setShowProfileDropdown(false); setShowNotifications(false); setShowSettings(false); }}
                className={`cursor-pointer text-lg hover:text-orange-400 transition-colors ${showGridMenu ? "text-orange-400" : ""}`}
              />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden flex flex-col justify-between w-6 h-4" onClick={() => setIsOpen(!isOpen)}>
            <span className={`block w-full h-0.5 ${mode === "dark" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-full h-0.5 ${mode === "dark" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-full h-0.5 ${mode === "dark" ? "bg-white" : "bg-black"}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className={`lg:hidden px-4 py-3 flex flex-col gap-3 border-t ${mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-100 border-gray-300"}`}>
          {menuItems.map((item, idx) => (
            <NavLink key={idx} to={item.to} className="text-sm cursor-pointer hover:text-orange-400" onClick={() => setIsOpen(false)}>{item.label}</NavLink>
          ))}
        </div>
      )}

      {/* SIDEBARS / DRAWERS */}
      {showNotifications && (
        <>
          <div className="fixed top-12 inset-x-0 bottom-0 bg-black/40 backdrop-blur-[2px] z-[1000] animate-in fade-in duration-300" onClick={() => setShowNotifications(false)} />
          <div className={`fixed top-12 right-0 h-[calc(100vh-48px)] w-[400px] shadow-2xl z-[1001] flex flex-col transition-transform duration-300 transform translate-x-0 ${mode === "dark" ? "bg-[#15161B] text-white" : "bg-white text-black"}`}>
            <div className={`p-4 border-b flex items-center justify-between ${mode === "dark" ? "bg-[#1E1F24] border-gray-700" : "bg-gray-50 border-gray-200"}`}>
              <h2 className="font-bold text-base">Notifications</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-medium ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>Show Unread</span>
                  <div 
                    onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                    className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${showUnreadOnly ? "bg-orange-500" : (mode === "dark" ? "bg-gray-700" : "bg-gray-300")}`}
                  >
                    <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform ${showUnreadOnly ? "translate-x-4" : ""}`} />
                  </div>
                </div>
                <FiX className="cursor-pointer text-xl hover:text-orange-500 transition-colors" onClick={() => setShowNotifications(false)} />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
               <div className="relative mb-6">
                 <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="25" y="20" width="50" height="60" rx="4" className={mode === "dark" ? "fill-gray-800" : "fill-gray-100"} />
                   <path d="M35 35H65" stroke={mode === "dark" ? "#4B5563" : "#D1D5DB"} strokeWidth="3" strokeLinecap="round" />
                   <path d="M35 45H65" stroke={mode === "dark" ? "#4B5563" : "#D1D5DB"} strokeWidth="3" strokeLinecap="round" />
                   <path d="M35 55H55" stroke={mode === "dark" ? "#4B5563" : "#D1D5DB"} strokeWidth="3" strokeLinecap="round" />
                   <circle cx="15" cy="45" r="3" className={mode === "dark" ? "fill-gray-700" : "fill-gray-300"} />
                 </svg>
               </div>
              <h3 className="text-lg font-semibold mb-2">You have caught up.</h3>
              <p className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>All your notifications will appear here.</p>
            </div>
            <button className="p-4 border-t text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-500/5 transition-colors group">
              View All 
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </>
      )}

      {showSettings && (
        <>
          <div className="fixed top-12 inset-x-0 bottom-0 bg-black/40 backdrop-blur-[2px] z-[1000] animate-in fade-in duration-300" onClick={() => setShowSettings(false)} />
          <div className={`fixed top-12 right-0 h-[calc(100vh-48px)] w-[400px] shadow-2xl z-[1001] flex flex-col transition-transform duration-300 ${mode === "dark" ? "bg-[#15161B] text-white" : "bg-white text-black"}`}>
            <div className={`p-5 border-b flex items-center justify-between ${mode === "dark" ? "border-gray-700" : "border-gray-200"}`}>
              <h2 className="font-bold text-lg">Quick Settings</h2>
              <FiX className="cursor-pointer text-xl hover:text-orange-500" onClick={() => setShowSettings(false)} />
            </div>
            <div className="flex-1 p-6 space-y-8 overflow-y-auto no-scrollbar">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Theme</span>
                <div className={`flex p-1 rounded-lg ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
                  <button onClick={() => mode === "light" ? null : toggleMode()} className={`p-2 rounded-md ${mode === "light" ? "bg-orange-500 text-white shadow-md animate-in zoom-in duration-200" : "text-gray-400"}`}><FaSun className="text-sm" /></button>
                  <button onClick={() => mode === "dark" ? null : toggleMode()} className={`p-2 rounded-md ${mode === "dark" ? "bg-orange-500 text-white shadow-md animate-in zoom-in duration-200" : "text-gray-400"}`}><FaMoon className="text-sm" /></button>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t dark:border-gray-800">
                {/* Position Size */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Position Size on Pnl Card</span>
                  <div onClick={() => setSettingsToggles(prev => ({ ...prev, posSize: !prev.posSize }))} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settingsToggles.posSize ? "bg-emerald-500" : "bg-gray-700"}`}>
                    <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform ${settingsToggles.posSize ? "translate-x-5" : ""}`} />
                  </div>
                </div>

                {/* Confirmation Messages */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Confirmation Messages</span>
                    <span className="text-orange-500 text-[11px] cursor-pointer hover:underline">Go here</span>
                    <span className="text-[11px] text-gray-400">for finer control</span>
                  </div>
                  <div onClick={() => setSettingsToggles(prev => ({ ...prev, confirmations: !prev.confirmations }))} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settingsToggles.confirmations ? "bg-emerald-500" : "bg-gray-700"}`}>
                    <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform ${settingsToggles.confirmations ? "translate-x-5" : ""}`} />
                  </div>
                </div>

                {/* Email Alerts */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>Email Alerts</span>
                    <span className="text-orange-500 text-[11px] cursor-pointer hover:underline">Go here</span>
                    <span className="text-[11px] text-gray-400">for finer control</span>
                  </div>
                  <div onClick={() => setSettingsToggles(prev => ({ ...prev, emailAlerts: !prev.emailAlerts }))} className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${settingsToggles.emailAlerts ? "bg-emerald-500" : "bg-gray-700"}`}>
                    <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform ${settingsToggles.emailAlerts ? "translate-x-5" : ""}`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <button onClick={() => { navigate("/algohub/trading-bot/", { state: { activeSection: "Preferences" } }); setShowSettings(false); }} className="w-full py-2.5 border border-orange-500 text-orange-500 rounded font-bold hover:bg-orange-500 hover:text-white transition-all shadow-sm">Manage All Preferences</button>
            </div>
          </div>
        </>
      )}

      {showGridMenu && (
        <>
          <div className="fixed top-12 inset-x-0 bottom-0 bg-black/40 backdrop-blur-[2px] z-[1000] animate-in fade-in duration-300" onClick={() => setShowGridMenu(false)} />
          <div className={`fixed top-12 right-0 h-[calc(100vh-48px)] w-[500px] shadow-2xl z-[1001] flex flex-col transition-transform duration-300 ${mode === "dark" ? "bg-[#15161B] text-white" : "bg-[#F5F6F7] text-black"} overflow-y-auto no-scrollbar`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <div className="p-4 flex justify-end">
              <FiX className="cursor-pointer text-xl hover:text-orange-500 transition-colors" onClick={() => setShowGridMenu(false)} />
            </div>
            <div className="px-5 pb-10 space-y-4">
              <div className={`p-4 rounded-lg ${mode === "dark" ? "bg-[#1E1F24]" : "bg-[#E2E8F0]"} flex items-center justify-between gap-4 shadow-sm`}>
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <FiGrid className="text-3xl text-gray-400" />
                  <span className="text-[8px] font-bold text-gray-500">SCAN QR</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer hover:scale-105 transition-transform" />
                  <div className="bg-black text-white h-10 px-3 rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                    <FaRobot className="text-lg text-emerald-400" />
                    <div className="flex flex-col">
                      <span className="text-[7px] font-bold text-gray-400">DOWNLOAD</span>
                      <span className="text-[11px] font-bold">Android APK</span>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer hover:scale-105 transition-transform" />
                </div>
              </div>

              <div className={`p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:opacity-90 transition ${mode === "dark" ? "bg-[#1E1F24]" : "bg-white"} shadow-sm`}>
                <div className="bg-red-600 p-2.5 rounded-full text-white"><FiMonitor className="text-lg" /></div>
                <span className="text-[14px] font-semibold">Subscribe to our channel for trade setups & more</span>
              </div>
              
              <div className={`p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:opacity-90 transition ${mode === "dark" ? "bg-[#1E1F24]" : "bg-white"} shadow-sm`}>
                <div className="bg-orange-500 p-2 rounded-full text-white font-bold text-sm h-10 w-10 flex items-center justify-center">JOIN</div>
                <span className="text-[14px] font-semibold">Join India's Leading Crypto Trading Community</span>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>Resources</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Trading Fees", icon: <FiCreditCard />, to: "/fees" },
                    { title: "API Docs", icon: <FiLink />, to: "https://docs.delta.exchange" },
                    { title: "Contract Specs", icon: <FiFileText />, to: "/contracts" },
                    { title: "Trade Data", icon: <FaDatabase />, to: "/algohub/trading-bot/", section: "Trxn. Logs" },
                    { title: "Blog", icon: <FiBarChart2 />, to: "https://delta.exchange/blog" },
                    { title: "Settlement Prices", icon: <BsCurrencyRupee />, to: "/settlement" },
                    { title: "Platform Status", icon: <FiShield />, to: "https://status.delta.exchange" },
                    { title: "Offers", icon: <FiGift />, to: "/offers" },
                    { title: "Analytics", icon: <FiBarChart2 />, to: "/more/analytics/" },
                    { title: "Trading Bot", icon: <FaRobot />, to: "/algohub/trading-bot/", isNew: true },
                    { title: "Demo Trading", icon: <FiMonitor />, to: "/more/demo-trading/" }
                  ].map((item, idx) => (
                    <div key={idx} onClick={() => { if (item.section) navigate(item.to, { state: { activeSection: item.section } }); else navigate(item.to); setShowGridMenu(false); }} className={`p-3 rounded-lg flex items-center justify-between group cursor-pointer transition-all ${mode === "dark" ? "bg-[#1E1F24] hover:bg-gray-800" : "bg-white hover:bg-gray-50"} shadow-sm border border-transparent hover:border-orange-500/30`}>
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="text-xl text-gray-400 group-hover:text-orange-500 transition-colors shrink-0">{item.icon}</span>
                        <span className="text-[14.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</span>
                        {item.isNew && <span className="text-[9px] bg-yellow-500 text-black px-1.5 py-0.5 rounded font-bold shrink-0">New</span>}
                      </div>
                      <FiChevronRight className="text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${mode === "dark" ? "text-gray-500" : "text-gray-400"}`}>Help</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Raise Support Ticket", icon: <FiGrid /> },
                    { title: "User Guide", icon: <FiFileText /> },
                    { title: "Support Center", icon: <FiBarChart2 /> },
                    { title: "Tax Info", icon: <FiShield /> }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-3 rounded-lg flex items-center justify-between group cursor-pointer transition-all ${mode === "dark" ? "bg-[#1E1F24] hover:bg-gray-800" : "bg-white hover:bg-gray-50"} shadow-sm`}>
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="text-xl text-gray-400 group-hover:text-orange-500 transition-colors shrink-0">{item.icon}</span>
                        <span className="text-[14.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</span>
                      </div>
                      <FiChevronRight className="text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
