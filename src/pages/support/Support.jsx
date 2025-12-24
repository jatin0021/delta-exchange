import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycontext from '../../context/Mycontext';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

// --- Icons ---
const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const SearchIconSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17.205 15.952 21 19.746 19.746 21l-3.794-3.795a7.94 7.94 0 0 1-4.977 1.745A7.978 7.978 0 0 1 3 10.975 7.978 7.978 0 0 1 10.975 3a7.978 7.978 0 0 1 7.975 7.975 7.94 7.94 0 0 1-1.745 4.977Zm-1.778-.658a6.185 6.185 0 0 0 1.75-4.32 6.201 6.201 0 0 0-6.202-6.202 6.201 6.201 0 0 0-6.203 6.203 6.201 6.201 0 0 0 6.203 6.202 6.185 6.185 0 0 0 4.32-1.75l.132-.133Z"></path>
    </svg>
);

const RightChevron = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

// Category Icons
const CatIcon1 = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 4C11.93 4 13.5 5.57 13.5 7.5C13.5 9.43 11.93 11 10 11C8.07 11 6.5 9.43 6.5 7.5C6.5 5.57 8.07 4 10 4ZM10 18C7.97 18 5.57 17.18 3.86 15.12C5.55 13.8 7.68 13 10 13C12.32 13 14.45 13.8 16.14 15.12C14.43 17.18 12.03 18 10 18Z" fill="currentColor"></path></svg>;
const CatIcon2 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.9 15.49L15.5 16.89C15.3 17.09 14.99 17.09 14.79 16.89L11.38 13.48C10.16 13.91 8.74 13.65 7.76 12.67C6.65 11.56 6.46 9.88 7.17 8.57L9.52 10.92L10.93 9.51L8.58 7.17C9.9 6.46 11.57 6.65 12.68 7.76C13.66 8.74 13.92 10.16 13.49 11.38L16.9 14.79C17.09 14.98 17.09 15.3 16.9 15.49Z" fill="currentColor"></path></svg>;
const CatIcon3 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"></path></svg>;
const CatIcon4 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 18V19C20.5 20.1 19.6 21 18.5 21H4.5C3.39 21 2.5 20.1 2.5 19V5C2.5 3.9 3.39 3 4.5 3H18.5C19.6 3 20.5 3.9 20.5 5V6H11.5C10.39 6 9.5 6.9 9.5 8V16C9.5 17.1 10.39 18 11.5 18H20.5ZM11.5 16H21.5V8H11.5V16ZM15.5 13.5C14.67 13.5 14 12.83 14 12C14 11.17 14.67 10.5 15.5 10.5C16.33 10.5 17 11.17 17 12C17 12.83 16.33 13.5 15.5 13.5Z" fill="currentColor"></path></svg>;
const CatIcon5 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.5 16.75L11.5 13.81C11.11 13.77 10.82 13.75 10.5 13.75C7.83 13.75 2.5 15.09 2.5 17.75V19.75H11.5L8.5 16.75ZM10.5 11.75C12.71 11.75 14.5 9.96 14.5 7.75C14.5 5.54 12.71 3.75 10.5 3.75C8.29 3.75 6.5 5.54 6.5 7.75C6.5 9.96 8.29 11.75 10.5 11.75Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.97 20.25L11.5 16.75L12.9 15.34L14.97 17.42L20.1 12.25L21.5 13.66L14.97 20.25Z" fill="currentColor"></path></svg>;
const CatIcon6 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13ZM23 7V18C23 19.1 22.1 20 21 20H4V18H21V7H23Z" fill="currentColor"></path></svg>;
const CatIcon7 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 13V9C11 8.45 10.55 8 10 8H6V6H11V4H8.5V3H6.5V4H5C4.45 4 4 4.45 4 5V9C4 9.55 4.45 10 5 10H9V12H4V14H6.5V15H8.5V14H10C10.55 14 11 13.55 11 13Z" fill="currentColor"></path><path d="M18.59 12.52L12.93 18.17L10.1 15.34L8.69 16.76L12.93 21L20 13.93L18.59 12.52Z" fill="currentColor"></path></svg>;

const ChatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 9.5V7.5C20 6.4 19.1 5.5 18 5.5H15C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5H6C4.9 5.5 4 6.4 4 7.5V9.5C2.34 9.5 1 10.84 1 12.5C1 14.16 2.34 15.5 4 15.5V19.5C4 20.6 4.9 21.5 6 21.5H18C19.1 21.5 20 20.6 20 19.5V15.5C21.66 15.5 23 14.16 23 12.5C23 10.84 21.66 9.5 20 9.5ZM7.5 12C7.5 11.17 8.17 10.5 9 10.5C9.83 10.5 10.5 11.17 10.5 12C10.5 12.83 9.83 13.5 9 13.5C8.17 13.5 7.5 12.83 7.5 12ZM16 17.5H8V15.5H16V17.5ZM15 13.5C14.17 13.5 13.5 12.83 13.5 12C13.5 11.17 14.17 10.5 15 10.5C15.83 10.5 16.5 11.17 16.5 12C16.5 12.83 15.83 13.5 15 13.5Z" fill="currentColor"></path>
    </svg>
);

const TicketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z" fill="#FE8935"></path>
        <path d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z" fill="currentColor"></path>
        <path d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z" fill="currentColor"></path>
        <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6C9.02 6 5.76 8.51 6.02 12.45C8.49 11.44 10.35 9.24 10.88 6.56C12.19 9.19 14.88 11 18 11.03Z" fill="currentColor"></path>
    </svg>
);

const LiveChatIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.22266 7.66668C4.22266 3.98445 7.70489 1 12.0005 1C16.296 1 19.7783 3.98445 19.7783 7.66668M19.7783 16.5556V17.4445C19.7783 19.4078 17.7894 21 15.3338 21H13.1116" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17.5558 9.67198C17.5558 9.28754 17.5558 9.09531 17.6136 8.9242C17.7814 8.42642 18.2247 8.2342 18.6692 8.03198C19.1669 7.8042 19.4158 7.69087 19.6636 7.67087C19.9436 7.64864 20.2247 7.70864 20.4647 7.84309C20.7825 8.02087 21.0047 8.36087 21.2314 8.63642C22.2792 9.90976 22.8036 10.5464 22.9947 11.2475C23.1503 11.8142 23.1503 12.4075 22.9947 12.9731C22.7158 13.9975 21.8325 14.8553 21.1781 15.6509C20.8436 16.0564 20.6758 16.2598 20.4647 16.3787C20.2206 16.514 19.9418 16.574 19.6636 16.5509C19.4158 16.5309 19.1669 16.4175 18.6681 16.1898C18.2236 15.9875 17.7814 15.7953 17.6136 15.2975C17.5558 15.1264 17.5558 14.9342 17.5558 14.5498V9.67198ZM6.44469 9.67198C6.44469 9.18754 6.43135 8.75309 6.04024 8.41309C5.89802 8.28976 5.70913 8.2042 5.33246 8.03198C4.83357 7.80531 4.58468 7.69087 4.3369 7.67087C3.59579 7.61087 3.1969 8.11753 2.77023 8.63753C1.72134 9.90976 1.19689 10.5464 1.00467 11.2486C0.850006 11.8134 0.850006 12.4094 1.00467 12.9742C1.28467 13.9975 2.16912 14.8564 2.82245 15.6509C3.23468 16.1509 3.62912 16.6075 4.3369 16.5509C4.58468 16.5309 4.83357 16.4175 5.33246 16.1898C5.71024 16.0187 5.89802 15.932 6.04024 15.8087C6.43135 15.4687 6.44469 15.0342 6.44469 14.5509V9.67198Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const Support = () => {
    const { mode } = useContext(Mycontext);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('open');
    const [currentPage, setCurrentPage] = useState(0);

    const categories = [
        { title: "Account Setup & Access", icon: <CatIcon1 />, desc: "Create, access, and manage your account with ease", links: ["Account Creation", "Login", "Update Profile Details"] },
        { title: "Maintenance", icon: <CatIcon2 />, desc: "Stay updated on scheduled maintenance, alerts & platform availability", links: ["Account Management"] },
        { title: "Security", icon: <CatIcon3 />, desc: "Discover how we protect your account and tips for information security", links: ["Account Related", "Security tips", "2 FA"] },
        { title: "Deposits", icon: <CatIcon4 />, desc: "Get help with adding funds, payment methods, and deposit timelines.", links: ["Deposits", "Deposit limit & Rules", "Troubleshooting Deposits"] },
        { title: "Know Your Customer (KYC)", icon: <CatIcon5 />, desc: "Identity verification process and how to complete your KYC quickly", links: ["Individual KYC", "Rejected/Initiated Status", "Corporate KYC"] },
        { title: "Withdrawals", icon: <CatIcon6 />, desc: "Understand withdrawing funds, processing times, and common issues", links: ["Withdrawal Process & Rules"] },
        { title: "Trading Fees & Charges", icon: <CatIcon7 />, desc: "Learn about our fee structure, applicable charges, and calculations", links: ["Understanding Fees in Your Account", "Fee Structure & Calculation", "Options Fee Explained"] },
    ];
    
    // Pagination Logic
    const itemsPerPage = 3;
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 0));

    // Get current items
    const currentItems = categories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className={`min-h-screen ${mode === 'dark' ? 'bg-[#0b0c0f] text-gray-200' : 'bg-gray-50 text-gray-700'}`}>
            
            {/* Header / Hero */}
            <div className={`pt-8 pb-10 px-4 flex flex-col items-center justify-center text-center ${mode === 'dark' ? 'bg-[#15161B]' : 'bg-white'} border-b ${mode === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="w-full max-w-5xl flex items-center mb-6 relative">
                    <div 
                        className="absolute left-0 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                        onClick={() => navigate(-1)}
                    >
                        <BackIcon />
                    </div>
                    <h1 className="w-full text-2xl md:text-3xl font-bold">Delta Exchange Help Center</h1>
                </div>

                <div className="w-full max-w-xl relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400`}>
                        <SearchIconSvg />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Enter the search term here" 
                        className={`w-full py-3.5 pl-12 pr-4 rounded-lg outline-none border transition-colors ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-orange-500 text-black'}`}
                    />
                </div>
            </div>

            {/* Categories Carousel */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentItems.map((cat, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl border transition-all hover:shadow-lg flex flex-col h-full ${mode === 'dark' ? 'bg-[#15161B] border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="text-orange-500">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-bold text-[15px] leading-tight">{cat.title}</h3>
                                </div>
                                <div className="text-gray-400">
                                    <RightChevron />
                                </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-xs text-gray-400 mb-6 leading-relaxed font-medium">{cat.desc}</p>
                            
                            <hr className={`mb-4 w-full ${mode === 'dark' ? 'border-gray-800' : 'border-gray-100'}`} />

                            {/* Links */}
                            <div className="space-y-3 flex-1">
                                {cat.links.map((link, lIdx) => (
                                    <div key={lIdx} className="group cursor-pointer">
                                        <span className={`text-[13px] font-semibold transition-colors ${mode === 'dark' ? 'text-gray-300 group-hover:text-orange-500' : 'text-gray-700 group-hover:text-orange-500'}`}>
                                            {link}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-6 mt-4 select-none">
                    <button 
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className={`text-gray-400 hover:text-orange-500 transition-colors ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1 rounded-full transition-all duration-300 ${i === currentPage ? 'w-6 bg-[#00A651]' : 'w-4 bg-gray-200 dark:bg-gray-700'}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextPage}
                        disabled={currentPage === totalPages - 1}
                        className={`text-gray-400 hover:text-orange-500 transition-colors ${currentPage === totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </section>

            {/* Support Contact Grid */}
            <section className={`py-12 ${mode === 'dark' ? 'bg-[#15161B]' : 'bg-white'}`}>
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    {/* Chat Card */}
                    <div className={`p-8 rounded-2xl border flex flex-col items-start hover:shadow-lg transition-shadow ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-800' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between w-full mb-4">
                            <div className="flex items-center gap-4">
                                <div className="text-orange-500">
                                    <ChatIcon />
                                </div>
                                <h3 className="text-[17px] font-bold">Chat with us</h3>
                            </div>
                            <div className="text-gray-400">
                                <RightChevron />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">Feel free to reach out to us if you face any issue - our team is available 24*7</p>
                    </div>

                    {/* Ticket Card */}
                    <div 
                        className={`p-8 rounded-2xl border flex flex-col items-start hover:shadow-lg transition-shadow cursor-pointer ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-800' : 'bg-white border-gray-200'}`}
                        onClick={() => navigate('/support/ticket/')}
                    >
                        <div className="flex justify-between w-full mb-4">
                            <div className="flex items-center gap-4">
                                <div className="text-orange-500">
                                    <TicketIcon />
                                </div>
                                <h3 className="text-[17px] font-bold">Support ticket</h3>
                            </div>
                            <div className="text-gray-400">
                                <RightChevron />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">Get help by raising a support ticket, our team will respond within 12 hours</p>
                    </div>
                </div>
            </section>

            {/* Ticket Tracking */}
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-6">Ticket Tracking</h2>
                <div className={`rounded-lg border overflow-hidden ${mode === 'dark' ? 'bg-[#15161B] border-gray-800' : 'bg-white border-gray-200'}`}>
                    {/* Tabs */}
                    <div className={`flex border-b ${mode === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                        <button 
                            className={`px-8 py-4 font-semibold text-sm transition-colors relative ${activeTab === 'open' ? 'text-orange-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('open')}
                        >
                            Open Tickets
                            {activeTab === 'open' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>}
                        </button>
                        <button 
                            className={`px-8 py-4 font-semibold text-sm transition-colors relative ${activeTab === 'closed' ? 'text-orange-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('closed')}
                        >
                            Closed Tickets
                            {activeTab === 'closed' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>}
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-12 text-center text-gray-500">
                        <p>No items found</p>
                    </div>
                </div>
            </section>

            {/* Live Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform transform hover:scale-105">
                    <LiveChatIcon />
                    <span>Live Chat</span>
                </button>
            </div>
        </div>
    );
};

export default Support;
