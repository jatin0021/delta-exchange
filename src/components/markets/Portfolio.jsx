import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycontext from '../../context/Mycontext';
import { FiChevronRight, FiChevronDown, FiPlus, FiEye, FiEyeOff } from 'react-icons/fi';

const Portfolio = () => {
    const { mode } = useContext(Mycontext);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Balances');
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('Trading Wallet');

    return (
        <div className={`w-full h-full min-h-screen ${mode === 'dark' ? 'bg-[#0b0c0f] text-gray-200' : 'bg-[#F2F4F6] text-gray-700'}`}>
            <div className={`d-flex flex-column no-scroll pb-20`}>
                <div role="tabpanel" id="mobileHolding-tabpanel-balances" className="no-scroll">
                    


                    {/* Security Alert */}
                    <div className={`px-4 py-3 flex justify-between items-center ${mode === 'dark' ? 'bg-orange-500/10 border-orange-500/20' : 'bg-red-50 border-red-100'} border-b`}>
                        <div className="flex-1 pr-4">
                            <p className={`text-xs ${mode === 'dark' ? 'text-orange-400' : 'text-red-800'}`}>
                                Unverified users don't have trading privileges. It takes less than 3 minutes to verify your account
                            </p>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-sm whitespace-nowrap">
                            Verify now
                        </button>
                    </div>

                    {/* Main Balance Section */}
                    <div className={`p-4 pb-6 ${mode === 'dark' ? 'bg-[#15161B]' : 'bg-white'}`}>
                        {/* Account Value Header */}
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">Account Value</span>
                                <button 
                                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                                    className="text-gray-400 hover:text-orange-500"
                                >
                                    {isBalanceVisible ? <FiEye size={14} /> : <FiEyeOff size={14} />}
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-1 text-orange-500 text-xs font-semibold cursor-pointer">
                                <span>PNL Analytics</span>
                                <FiChevronRight />
                            </div>
                        </div>

                        {/* Balance Amount */}
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {isBalanceVisible ? '₹0.00' : '******'}
                            </span>
                            <span className="text-sm text-gray-400">
                                {isBalanceVisible ? '$0.00' : '******'}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={() => navigate('/app/account/deposit')}
                                className="bg-orange-500 text-white py-2.5 rounded flex items-center justify-center gap-2 font-bold text-sm"
                            >
                                <span className="bg-white/20 p-0.5 rounded-sm">
                                    <FiPlus size={12} strokeWidth={4} />
                                </span>
                                Add Funds
                            </button>
                            <button 
                                onClick={() => navigate('/app/account/withdrawal')}
                                className={`border py-2.5 rounded font-bold text-sm ${mode === 'dark' ? 'border-gray-700 text-white bg-gray-800' : 'border-gray-300 text-gray-700 bg-white'}`}
                            >
                                Withdraw
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className={`flex border-b ${mode === 'dark' ? 'bg-[#15161B] border-gray-800' : 'bg-white border-gray-200 mt-2'}`}>
                        <button 
                            className={`flex-1 py-3 text-sm font-semibold relative ${activeTab === 'Balances' ? 'text-orange-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('Balances')}
                        >
                            Balances
                            {activeTab === 'Balances' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>}
                        </button>
                        <button 
                            className={`flex-1 py-3 text-sm font-semibold relative ${activeTab === 'RiskMargin' ? 'text-orange-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('RiskMargin')}
                        >
                            Risk & Margin
                            {activeTab === 'RiskMargin' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>}
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'Balances' && (
                        <div className={`flex flex-col ${mode === 'dark' ? 'bg-[#15161B]' : 'bg-white'}`}>
                            
                            {/* Trading Wallet Accordion */}
                            <div className={`p-4 border-b ${mode === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                                <div className="flex justify-between items-start mb-1 cursor-pointer" onClick={() => setActiveSection(activeSection === 'Trading Wallet' ? '' : 'Trading Wallet')}>
                                    <div className="flex items-center gap-2 font-semibold text-sm">
                                        Trading Wallet
                                        <FiChevronDown className={`transition-transform ${activeSection === 'Trading Wallet' ? 'rotate-180' : ''}`} />
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-sm font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>{isBalanceVisible ? '₹0.00' : '******'}</div>
                                        <div className="text-xs text-gray-400">{isBalanceVisible ? '$0.00' : '******'}</div>
                                    </div>
                                </div>
                                
                                {activeSection === 'Trading Wallet' && (
                                    <div className="mt-2 space-y-4 pt-2">
                                        {/* Available Margin */}
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Available Margin</span>
                                            <div className="text-right">
                                                <div className="font-medium">{isBalanceVisible ? '₹0.00' : '******'}</div>
                                                <div className="text-xs text-gray-400">{isBalanceVisible ? '$0.00' : '******'}</div>
                                            </div>
                                        </div>

                                        {/* Trackers Wallet */}
                                        <div className="flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-1">
                                                <span className="text-gray-400">Trackers Wallet</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">{isBalanceVisible ? '₹0.00' : '******'}</div>
                                                <div className="text-xs text-gray-400">{isBalanceVisible ? '$0.00' : '******'}</div>
                                            </div>
                                        </div>

                                        {/* Fee Voucher */}
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Fee Voucher</span>
                                            <div className="text-right">
                                                <div className="font-medium">{isBalanceVisible ? '₹0.00' : '******'}</div>
                                                <div className="text-xs text-gray-400">{isBalanceVisible ? '$0.00' : '******'}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Conversion Rate Footer */}
                            <div className={`p-4 text-xs text-gray-500 bg-opacity-50 ${mode === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                                <div className="flex items-center gap-2">
                                    <span>Conversion Rate:</span>
                                    <span className="font-semibold text-gray-400">1 USD = INR 85</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
