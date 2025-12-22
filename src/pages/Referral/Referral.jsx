import React, { useContext, useState } from "react";
import MyContext from "../../context/Mycontext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Referral = () => {
  const { mode } = useContext(MyContext);
  const [showValues, setShowValues] = useState(true);
  const [activeTab, setActiveTab] = useState("Last 7 days");
  const [activeLinkTab, setActiveLinkTab] = useState("Last 7 days");

  const tabs = ["Last 7 days", "Last 30 days", "Customize"];

  const stats = [
    { label: "Referral Earnings", value: "$0.00" },
    { label: "Referred Users", value: "0" },
    { label: "Depositors", value: "0" },
    { label: "Traders", value: "0" },
  ];

  return (
    <div className={`min-h-screen pb-24 ${mode === 'dark' ? 'bg-[#040911] text-[#EAECEF]' : 'bg-white text-[#1E2329]'}`}>
      
      {/* 1. Full Width Header Banner */}
      <section className="w-full bg-[#4A1D0B] relative overflow-hidden h-[300px] lg:h-[350px]">
        {/* Background Concentric Pattern Overlay */}
        <div className="absolute inset-x-0 inset-y-0 z-0 pointer-events-none opacity-20 origin-left scale-150 lg:scale-100">
           <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
              {[...Array(8)].map((_, i) => (
                <ellipse 
                  key={i}
                  cx="120" 
                  cy="150" 
                  rx={100 + i * 40} 
                  ry={100 + i * 40} 
                  stroke="white" 
                  strokeWidth="0.8" 
                  fill="none" 
                />
              ))}
           </svg>
        </div>

        <div className="max-w-[1240px] mx-auto h-full px-6 flex items-center relative z-10">
          {/* Content Left */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight mb-4">
              <span className="text-[#FF6A0D]">Get Verified</span>
              <span className="text-white ml-3">to start earning</span>
              <br />
              <span className="text-white uppercase tracking-tight font-black lg:text-[52px]">referral commission</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg font-medium mb-8">
              Receive a 10% commission on the trading fees paid by your friends!
            </p>
            <button className="px-10 py-3.5 bg-[#FF6A0D] hover:bg-[#E85D00] text-white rounded-md text-sm font-bold transition-all active:scale-95 shadow-xl">
              Get Verified Now
            </button>
          </div>

          {/* Right Illustration (SVG character) */}
          <div className="hidden lg:block w-[500px] h-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB11A] opacity-20 blur-[100px] rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-end">
               <div className="relative w-full h-[120%] flex items-end justify-center">
                  {/* Smartphone Frame */}
                  <div className="relative w-[210px] h-[360px] bg-[#12161c] rounded-[36px] border-[5px] border-[#222] shadow-2xl rotate-[-2deg] mr-24 mb-[-20px]">
                     <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#222] rounded-full"></div>
                     <div className="absolute inset-[4px] bg-[#F9FAFB] rounded-[30px] overflow-hidden">
                        <div className="w-full h-1/2 bg-[#FFFAF0] flex items-center justify-center p-6">
                           <div className="w-16 h-16 bg-orange-100 rounded-2xl"></div>
                        </div>
                     </div>
                  </div>

                  {/* Character Illustration SVG */}
                  <div className="absolute bottom-10 right-0 w-[420px] h-[420px] pointer-events-none drop-shadow-2xl">
                     <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
                        <path d="M180 50C210 80 230 140 190 180C150 220 80 210 40 170C0 130 10 60 50 30C90 0 140 20 180 50Z" fill="#A47E00" fillOpacity="0.8" />
                        <g transform="translate(60, 40)">
                           <path d="M40 120Q40 100 80 100Q120 100 120 120V160H40V120Z" fill="#FFF" />
                           <path d="M40 120C10 110 0 80 0 80L10 70L25 90" stroke="#FFCFB3" strokeWidth="12" strokeLinecap="round" />
                           <path d="M120 120C150 110 160 80 160 80L150 70L135 90" stroke="#FFCFB3" strokeWidth="12" strokeLinecap="round" />
                           <circle cx="80" cy="70" r="28" fill="#FFCFB3" />
                           <path d="M50 70C50 35 110 35 110 70C125 90 110 120 95 125C80 130 50 115 50 70Z" fill="#E65100" />
                           <g transform="translate(-20, 60) rotate(-15)">
                              <path d="M0 20L40 0L40 40L0 20Z" fill="#333" />
                              <circle cx="45" cy="20" r="12" fill="#E65100" />
                           </g>
                           <g transform="translate(130, 40)">
                              <rect x="0" y="0" width="30" height="30" rx="3" fill="#FF6A0D" stroke="white" strokeWidth="1" />
                              <path d="M15 0V30M0 15H30" stroke="white" strokeWidth="5" strokeOpacity="0.5" />
                              <path d="M15 0L5 -15M15 0L25 -15" stroke="white" strokeWidth="6" strokeLinecap="round" />
                           </g>
                        </g>
                     </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Body Container - Based on updated image */}
      <div className="max-w-[1240px] mx-auto px-6 mt-10">
        
        {/* Dashboard Title Section */}
        <div className="flex items-center gap-3 mb-8">
           <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-[#FF6A0D] flex items-center justify-center p-[2px]">
                 <div className="w-full h-full rounded-full bg-[#FF6A0D]/20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#FF6A0D]"></div>
                 </div>
              </div>
              <h2 className={`text-base font-bold ${mode === 'dark' ? 'text-white' : 'text-[#1E2329]'}`}>My Dashboard</h2>
           </div>
           {/* Eye Mask Button in light grey square */}
           <button 
              onClick={() => setShowValues(!showValues)}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F0F2F5] dark:bg-[#1E1F24] text-gray-400 hover:text-black transition-colors border border-gray-100 dark:border-gray-800"
            >
              {showValues ? <FiEye size={16} /> : <FiEyeOff size={16} />}
           </button>
        </div>

        {/* Hero Earnings Card */}
        <div className="mb-8">
           <div className={`inline-flex items-center gap-4 py-4 px-6 rounded-xl border ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-white border-gray-100 shadow-sm'}`}>
              <span className="text-2xl font-bold text-[#FF6A0D]">
                 {showValues ? "$0" : "****"}
              </span>
              <span className={`text-[15px] font-medium ${mode === 'dark' ? 'text-gray-400' : 'text-[#1E2329]'}`}>
                 Referral Earnings (Till Date)
              </span>
           </div>
        </div>

        {/* Timeframe Filters - Square style as per image */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-2 rounded-md text-sm font-bold transition-all border ${
                  activeTab === tab
                  ? 'bg-[#FF6A0D] border-[#FF6A0D] text-white'
                  : 'bg-white border-gray-200 text-gray-400 dark:bg-transparent dark:border-gray-800'
               }`}
            >
               {tab}
            </button>
          ))}
        </div>

        {/* Main Stats Layout - Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Account Summary (Left Column - 25% width) */}
          <div className={`w-full lg:w-[280px] border rounded-xl overflow-hidden ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="px-5 py-3.5 flex items-center gap-2 border-b dark:border-gray-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9M17 12V12.01M17 15V15.01M17 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[15px] font-bold opacity-80 uppercase tracking-tight">Account Summary</h3>
            </div>
            <div className="p-7 space-y-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                   <span className="text-3xl font-black text-[#FF6A0D] leading-none">
                      {showValues ? stat.value : "****"}
                   </span>
                   <span className={`text-[15px] font-medium leading-tight ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>
                      {stat.label}
                   </span>
                </div>
              ))}
            </div>
          </div>

          {/* Volume tracking section (Main Area - 75% width) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* 1. Futures Volume and Earnings */}
            <div className={`border rounded-xl overflow-hidden ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="px-5 py-3.5 flex items-center gap-2 border-b dark:border-gray-800">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-[15px] font-bold opacity-80 uppercase tracking-tight">Futures Volume and Earnings</h3>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                  <span className={`text-[15px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Maker Volume</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                  <span className={`text-[15px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Taker Volume</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                   <span className={`text-[15px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Futures Ref. Earnings</span>
                </div>
              </div>
            </div>

            {/* 2. Options Volume and Earnings */}
            <div className={`border rounded-xl overflow-hidden ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="px-5 py-3.5 flex items-center gap-2 border-b dark:border-gray-800">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="M12 12L16 16M12 12L8 16M12 12V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-[15px] font-bold opacity-80 uppercase tracking-tight">Options Volume and Earnings</h3>
              </div>
              <div className="p-8">
                 <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1">
                       <span className={`block text-[13px] font-bold ${mode === 'dark' ? 'text-gray-400' : 'text-[#1E2329]'} mb-6`}>Volume when Premium &gt; 3.5%</span>
                       <div className="grid grid-cols-3 gap-8">
                          <div className="flex flex-col gap-1">
                            <span className="text-xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                            <span className={`text-[13px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Maker Volume</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                            <span className={`text-[13px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Taker Volume</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                            <span className={`text-[13px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Options Ref. Earnings</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="w-px bg-gray-100 hidden md:block self-stretch"></div>

                    <div className="w-full md:w-auto">
                       <span className={`block text-[13px] font-bold ${mode === 'dark' ? 'text-gray-400' : 'text-[#1E2329]'} mb-6`}>Volume when Premium &lt; 3.5%</span>
                       <div className="flex flex-col gap-1">
                          <span className="text-xl font-bold text-[#FF6A0D]">{showValues ? "$0.00" : "****"}</span>
                          <span className={`text-[13px] font-medium ${mode === 'dark' ? 'text-gray-500' : 'text-[#1E2329]'}`}>Volume</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Disclaimers */}
        <div className="mt-12 space-y-2 opacity-70">
          <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">* Due to the complexity of financial data, there might be nuances and delay. Data displayed above is for reference only.</p>
          <p className="text-[13px] font-bold text-gray-500 dark:text-gray-400 font-bold">* You must be KYC verified in order to share referral links</p>
          <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">Customize filter will allow to view maximum 93 days of data in one go.</p>
        </div>

        {/* 4. My Referral Link Lists Section */}
        <div className="mt-20">
           <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.44 2.82C10.61 1 7.64 1 5.81 2.82C4.15 4.49 4 7 5.37 8.82C5.37 8.82 5.37 8.82 5.38 8.83L11.04 14.5C11.57 15.03 12.43 15.03 12.96 14.5L18.62 8.84C20 7.02 19.85 4.51 18.19 2.84C16.36 1.01 13.39 1.01 11.56 2.83M8 10C7.45 10 7 9.55 7 9C7 8.45 7.45 8 8 8C8.55 8 9 8.45 9 9C9 9.55 8.55 10 8 10M16 10C15.45 10 15 9.55 15 9C15 8.45 15.45 8 16 8C16.55 8 17 8.45 17 9C17 9.55 16.55 10 16 10Z" fill="#FF6A0D"/>
                <path d="M2.5 19H21.5C22.33 19 23 19.67 23 20.5C23 21.33 22.33 22 21.5 22H2.5C1.67 22 1 21.33 1 20.5C1 19.67 1.67 19 2.5 19Z" fill="#FF6A0D"/>
              </svg>
              <h2 className={`text-[17px] font-bold ${mode === 'dark' ? 'text-white' : 'text-[#1E2329]'}`}>My Referral Link Lists</h2>
           </div>

           {/* Timeframe Filters - Styled to match image */}
           <div className="flex gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveLinkTab(tab)}
                className={`px-5 py-2 rounded-md text-base font-bold transition-all border ${
                  activeLinkTab === tab
                    ? 'bg-[#FF6A0D] border-[#FF6A0D] text-white shadow-sm'
                    : 'bg-white border-gray-100 text-gray-400 dark:bg-transparent dark:border-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 5. Search for Referral Section */}
          <div className="mt-20">
             <div className="flex items-center gap-2 mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6A0D]">
                   <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className={`text-[17px] font-bold ${mode === 'dark' ? 'text-white' : 'text-[#1E2329]'}`}>Search for Referral</h2>
             </div>
             
             <div className="flex gap-4">
                <input 
                   type="text" 
                   placeholder="Enter User ID"
                   className={`px-4 py-2.5 w-[300px] rounded-md border text-base outline-none transition-all ${
                      mode === 'dark' 
                      ? 'bg-[#12161C] border-gray-800 text-white focus:border-[#FF6A0D]' 
                      : 'bg-white border-gray-200 text-[#1E2329] focus:border-[#FF6A0D]'
                   }`}
                />
                <button className="px-10 py-2.5 bg-[#FF6A0D] hover:bg-[#E85D00] text-white rounded-md text-base font-bold transition-all active:scale-95 shadow-md">
                   Search
                </button>
             </div>
          </div>

          {/* 6. Affiliate Partnership Notice */}
          <div className={`mt-24 p-16 text-center rounded-md border ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-[#F9FAFB] border-gray-100'}`}>
             <p className={`text-[17px] font-bold leading-relaxed ${mode === 'dark' ? 'text-gray-300' : 'text-[#1E2329]'}`}>
                Become a partner with Delta Exchange for more benefits. To become a<br />
                partner reach out to <span className="text-[#FF6A0D] cursor-pointer hover:underline">affiliates@delta.exchange</span>
             </p>
          </div>

          {/* 7. How It Works Section */}
          <div className="mt-32">
             <h2 className={`text-[24px] font-bold mb-10 ${mode === 'dark' ? 'text-white' : 'text-[#1E2329]'}`}>How It Works</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className={`p-8 pr-2 relative overflow-hidden rounded-xl border flex gap-6 items-center min-h-[140px] ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-[#F0F2F5] border-gray-100'}`}>
                   <div className="flex-1">
                      <h4 className="text-[17px] font-bold mb-1">Share your referral link</h4>
                      <p className="text-[14px] font-medium opacity-50 leading-tight">Invite your friends to Sign up on Delta Exchange with your referral link</p>
                   </div>
                   <div className="relative w-24 h-24 flex-shrink-0">
                      <div className="absolute inset-0 bg-[#4F46E5] rounded-full flex items-center justify-center translate-x-4">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                      </div>
                   </div>
                </div>

                {/* Step 2 */}
                <div className={`p-8 pr-2 relative overflow-hidden rounded-xl border flex gap-6 items-center min-h-[140px] ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-[#F0F2F5] border-gray-100'}`}>
                   <div className="flex-1">
                      <h4 className="text-[17px] font-bold mb-1">Your friends save 10%</h4>
                      <p className="text-[14px] font-medium opacity-50 leading-tight">Referred users get 10% trading fee discount for first 2 months.</p>
                   </div>
                   <div className="relative w-24 h-24 flex-shrink-0">
                      <div className="absolute inset-0 bg-[#4F46E5] rounded-full flex items-center justify-center translate-x-4">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                      </div>
                   </div>
                </div>

                {/* Step 3 */}
                <div className={`p-8 pr-2 relative overflow-hidden rounded-xl border flex gap-6 items-center min-h-[140px] ${mode === 'dark' ? 'bg-[#0c111c] border-gray-800' : 'bg-[#F0F2F5] border-gray-100'}`}>
                   <div className="flex-1">
                      <h4 className="text-[17px] font-bold mb-1">You earn as they trade</h4>
                      <p className="text-[14px] font-medium opacity-50 leading-tight">Receive 10% of the trading fees that your referred friends pay.</p>
                   </div>
                   <div className="relative w-24 h-24 flex-shrink-0">
                      <div className="absolute inset-0 bg-[#4F46E5] rounded-full flex items-center justify-center translate-x-4">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 8. Referral Program Rules Section */}
          <div className="mt-32 mb-20">
             <h2 className={`text-[24px] font-bold mb-10 ${mode === 'dark' ? 'text-white' : 'text-[#1E2329]'}`}>Referral Program Rules</h2>
             
             <div className="space-y-12">
                {[
                   {
                      title: "Definition",
                      items: [
                         "<b>Delta Exchange India (“Delta Exchange”)</b> - Delta Exchange is a derivatives trading platform that offers features like futures, options, and leveraged trading for virtual digital assets.",
                         "<b>Referrer (“Affiliate”)</b> - A legal or natural person with an active and verified Delta Exchange account who shares or publishes a Referral link containing their unique Referral Code to invite new users to Delta Exchange.",
                         "<b>Designated Affiliates</b> - Legal or Natural persons approved by Delta Exchange for customized referral terms based on mutual discussion. Their status and benefits are determined solely at the sole discretion of Delta Exchange.",
                         "<b>Referrals (“Referred Users”)</b> - Anyone who signs-up on Delta Exchange using the Affiliate's Referral code.",
                         "<b>Referral Program</b> - A performance-based marketing arrangement whereby Affiliates and Designated Affiliates promote Delta Exchange and earn Referral Commissions based on the trading activity of their Referred users.",
                         "<b>Affiliate Services</b> - This refers to the promotional and referral activities conducted by Affiliates & Designated Affiliates to drive user traffic to Delta Exchange.",
                         "<b>Referral Code</b> - This is a system generated unique identifier code associated with the respective Affiliate which is made available only after successful verification of the submitted KYC. Such Referral Code can also be customized.",
                         "<b>Referral Link</b> - This is a unique URL/ HTTPS Link containing the unique referral code i.e. https://www.delta.exchange/?code=XXXXX, that an Affiliate shares to invite new users to Delta Exchange.",
                         "<b>Trading Fees</b> - Charge levied by Delta Exchange for executing a trade on the exchange without deduction of any promotional discounts.",
                         "<b>Net Trading Fees </b> - The actual fee paid by the Referred User to Delta Exchange after deduction of any promotional discounts used during payment of trading fees.",
                         "<b>Referral Commission</b> - A percentage of the Net Trading Fee shared with the Affiliate as a reward when their Referred Users who signed up using their Referral Code, start trading on Delta Exchange.",
                         "<b>Referral Discount</b> - Discount in Trading Fees offered to Referred Users only as part of the Referral Program.",
                         "<b>Promotional Discounts</b> - Discounts including but not limited to fee paid in fee voucher and revenue share given to market makers as and when applicable in any particular trade.",
                         "<b>KYC Verification</b> - Verification of the KYC (Know Your Customer) as submitted by the Referred User by Delta Exchange.",
                         "<b>Sign-up</b> - Enrolling on Delta Exchange for account creation by an Affiliate/ Referred user, as the case may be."
                      ]
                   },
                   {
                      title: "Interpretation",
                      items: [
                         "Words in the singular include the plural, and words in the plural include the singular. Headings and defined terms are for convenience and can be used interchangeably without changing the meaning."
                      ]
                   },
                   {
                      title: "Applicability & Acceptance",
                      items: [
                         "These Referral Program Rules, read together with the <a href='/affiliate-agreement' class='text-[#FF6A0D] hover:underline'>Affiliate Agreement</a> (collectively 'Affiliate Terms'), apply to Designated Affiliates, Affiliates, and Referred Users.",
                         "The Affiliate Terms become binding and applicable once users provide Affiliate Services as an Affiliate or Designated Affiliate.",
                         "Participation in the Referral Program and/or engagement with referred users constitutes acceptance of these Affiliate Terms."
                      ]
                   },
                   {
                      title: "Benefits for Referred Users",
                      items: [
                         "Ten percent (10%) discount on the net trading fees for two(2) months from the date of Sign-up shall be applicable on selected referral codes only.",
                         "Fee structures may vary with contracts. Discounts will apply on all contracts."
                      ]
                   },
                   {
                      title: "Benefits for Affiliates",
                      items: [
                         "Affiliates receive a ten percent (10%) share of the Net Trading fee paid by their Referred Users.",
                         "The Referral Commission shall be paid in INR for a period of two (2) months from the sign-up date.",
                         "Commissions are credited to the Referral Wallet once every day at 05:30 am IST.",
                         "Referral Commission cannot be used for the purposes of trading on Delta Exchange.",
                         "Referral Commission can only be withdrawn to whitelisted bank accounts. Minimum threshold applies."
                      ]
                   }
                ].map((section, idx) => (
                   <div key={idx} className="space-y-6">
                      <h4 className="text-[17px] font-bold opacity-60 uppercase tracking-wide">{section.title}</h4>
                      <ul className="space-y-4">
                         {section.items.map((item, i) => (
                            <li key={i} className="flex gap-3 items-start">
                               <div className="flex-shrink-0 mt-1">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#FF6A08]">
                                     <circle cx="8" cy="8" r="7.5" fill="white" stroke="currentColor"/>
                                     <path d="M5 8L7.5 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                               </div>
                               <span 
                                  className={`text-[15px] leading-relaxed ${mode === 'dark' ? 'text-gray-400' : 'text-[#666]'}`}
                                  dangerouslySetInnerHTML={{ __html: item }}
                               />
                            </li>
                         ))}
                      </ul>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
