import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Mycontext from '../../../context/Mycontext';
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

const LiveChatIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.22266 7.66668C4.22266 3.98445 7.70489 1 12.0005 1C16.296 1 19.7783 3.98445 19.7783 7.66668M19.7783 16.5556V17.4445C19.7783 19.4078 17.7894 21 15.3338 21H13.1116" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17.5558 9.67198C17.5558 9.28754 17.5558 9.09531 17.6136 8.9242C17.7814 8.42642 18.2247 8.2342 18.6692 8.03198C19.1669 7.8042 19.4158 7.69087 19.6636 7.67087C19.9436 7.64864 20.2247 7.70864 20.4647 7.84309C20.7825 8.02087 21.0047 8.36087 21.2314 8.63642C22.2792 9.90976 22.8036 10.5464 22.9947 11.2475C23.1503 11.8142 23.1503 12.4075 22.9947 12.9731C22.7158 13.9975 21.8325 14.8553 21.1781 15.6509C20.8436 16.0564 20.6758 16.2598 20.4647 16.3787C20.2206 16.514 19.9418 16.574 19.6636 16.5509C19.4158 16.5309 19.1669 16.4175 18.6681 16.1898C18.2236 15.9875 17.7814 15.7953 17.6136 15.2975C17.5558 15.1264 17.5558 14.9342 17.5558 14.5498V9.67198ZM6.44469 9.67198C6.44469 9.18754 6.43135 8.75309 6.04024 8.41309C5.89802 8.28976 5.70913 8.2042 5.33246 8.03198C4.83357 7.80531 4.58468 7.69087 4.3369 7.67087C3.59579 7.61087 3.1969 8.11753 2.77023 8.63753C1.72134 9.90976 1.19689 10.5464 1.00467 11.2486C0.850006 11.8134 0.850006 12.4094 1.00467 12.9742C1.28467 13.9975 2.16912 14.8564 2.82245 15.6509C3.23468 16.1509 3.62912 16.6075 4.3369 16.5509C4.58468 16.5309 4.83357 16.4175 5.33246 16.1898C5.71024 16.0187 5.89802 15.932 6.04024 15.8087C6.43135 15.4687 6.44469 15.0342 6.44469 14.5509V9.67198Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const AttachFileIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6673 4.00033V11.667C10.6673 13.1403 9.47398 14.3337 8.00065 14.3337C6.52732 14.3337 5.33398 13.1403 5.33398 11.667V3.33366C5.33398 2.41366 6.08065 1.66699 7.00065 1.66699C7.92065 1.66699 8.66732 2.41366 8.66732 3.33366V10.3337C8.66732 10.7003 8.36732 11.0003 8.00065 11.0003C7.63398 11.0003 7.33398 10.7003 7.33398 10.3337V4.00033H6.33398V10.3337C6.33398 11.2537 7.08065 12.0003 8.00065 12.0003C8.92065 12.0003 9.66732 11.2537 9.66732 10.3337V3.33366C9.66732 1.86033 8.47398 0.666992 7.00065 0.666992C5.52732 0.666992 4.33398 1.86033 4.33398 3.33366V11.667C4.33398 13.6937 5.97398 15.3337 8.00065 15.3337C10.0273 15.3337 11.6673 13.6937 11.6673 11.667V4.00033H10.6673Z" fill="currentColor"></path>
    </svg>
);

const SupportTicket = () => {
    const { mode } = useContext(Mycontext);
    const navigate = useNavigate();

    const articles = [
        "Fees on Options and Futures Trading",
        "Delta Exchange Calculator: Features to Improve Trading",
        "My deposit transaction failed. What could be the reason?",
        "Steps to deposit on Delta Exchange India",
        "What is the minimum and maximum withdrawal amount?",
        "Expected Duration for KYC Verification Process?",
        "Is there 30% VDA tax applicable on trading profits?"
    ];

    return (
        <div className={`min-h-screen ${mode === 'dark' ? 'bg-[#0b0c0f] text-gray-200' : 'bg-gray-50 text-gray-700'}`}>
            
            {/* Header / Hero - HIDDEN as per request */}
            {/* 
            <div className={`pt-8 pb-10 px-4 flex flex-col items-center justify-center text-center ${mode === 'dark' ? 'bg-[#15161B]' : 'bg-white'} border-b ${mode === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="w-full max-w-5xl flex items-center mb-6 relative">
                    <div 
                        className="absolute left-0 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                        onClick={() => navigate('/support')}
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
            */}

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumbs */}
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/support" className="hover:text-orange-500 transition-colors">Support Home</Link>
                    <span>&gt;</span>
                    <span className="text-orange-500 font-semibold">Raise a Support Ticket</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Form */}
                    <div className="flex-1">
                        <div className={`p-6 md:p-8 rounded-2xl border ${mode === 'dark' ? 'bg-[#15161B] border-gray-800' : 'bg-white border-gray-200'}`}>
                            <h2 className="text-xl font-bold mb-6">Raise a Support Ticket</h2>
                            
                            <form className="space-y-6">
                                {/* Account Select */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Account <span className="text-red-500">*</span></label>
                                    <select className={`w-full p-3 rounded-lg border outline-none focus:border-orange-500 appearance-none ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                                        <option>Main: 87426229</option>
                                    </select>
                                </div>

                                {/* Category Select */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Category <span className="text-red-500">*</span></label>
                                    <select className={`w-full p-3 rounded-lg border outline-none focus:border-orange-500 appearance-none ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 text-gray-400' : 'bg-white border-gray-300 text-gray-500'}`}>
                                        <option>Choosing the right category helps us resolve your ticket faster.</option>
                                    </select>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject <span className="text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Subject" 
                                        className={`w-full p-3 rounded-lg border outline-none focus:border-orange-500 ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Description <span className="text-red-500">*</span></label>
                                    <textarea 
                                        placeholder="Type Something" 
                                        rows="4"
                                        className={`w-full p-3 rounded-lg border outline-none focus:border-orange-500 ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
                                    ></textarea>
                                </div>

                                {/* File Upload */}
                                <div>
                                    <div className="flex items-center gap-4">
                                        <label htmlFor="file-upload" className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded border border-dashed hover:border-orange-500 hover:text-orange-500 transition-colors ${mode === 'dark' ? 'border-gray-600' : 'border-gray-400'}`}>
                                            <AttachFileIcon />
                                            <span className="text-sm font-medium">Attach File</span>
                                            <input id="file-upload" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Upload supporting files (PDF, JPG, PNG, XLS, XLSX – max 20MB each) to help us resolve your issue faster.</p>
                                </div>

                                {/* Language Select */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Language</label>
                                    <select className={`w-full p-3 rounded-lg border outline-none focus:border-orange-500 appearance-none ${mode === 'dark' ? 'bg-[#1E1F24] border-gray-700 text-gray-400' : 'bg-white border-gray-300 text-gray-500'}`}>
                                        <option>Which Language Would You Like Support In?</option>
                                    </select>
                                </div>

                                {/* Submit Button & Info */}
                                <div className="flex items-center justify-between pt-4">
                                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                        Submit
                                    </button>
                                    <div className="flex items-center gap-2 text-xs text-green-500 font-medium">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 6.66667V10.8333L12.7083 12.9333L13.35 11.8667L10.4167 10.125V6.66667H9.16667ZM17.5 8.33333V2.5L15.3 4.7C13.95 3.34167 12.075 2.5 10 2.5C5.85833 2.5 2.5 5.85833 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10H15.8333C15.8333 13.2167 13.2167 15.8333 10 15.8333C6.78333 15.8333 4.16667 13.2167 4.16667 10C4.16667 6.78333 6.78333 4.16667 10 4.16667C11.6083 4.16667 13.0667 4.825 14.125 5.875L11.6667 8.33333H17.5Z" fill="currentColor"></path>
                                        </svg>
                                        Our team will respond within 12 business hrs
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Articles */}
                    <div className="lg:w-1/3">
                        <div className={`p-6 rounded-2xl border ${mode === 'dark' ? 'bg-[#15161B] border-gray-800' : 'bg-white border-gray-200'}`}>
                            <h3 className="text-lg font-bold mb-4">Relevant Articles</h3>
                            <div className="flex flex-col gap-3">
                                {articles.map((title, idx) => (
                                    <div key={idx} className={`p-4 rounded-lg flex justify-between items-center cursor-pointer transition-colors ${mode === 'dark' ? 'bg-[#1E1F24] hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                        <span className="text-sm font-medium pr-4">{title}</span>
                                        <div className="text-gray-400 min-w-[16px]">
                                            <FiChevronRight />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default SupportTicket;
