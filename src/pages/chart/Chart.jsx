import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import TopBar from "./TopBar";
import TradingPage from "./TradingPage";
import Mycontext from "../../context/Mycontext";
import RightSidebar from "./RightSidebar";
import TradingChart from "./TradingChart";
import TradingTabs from './TradingTabs';

const Chart = () => {
  const { mode } = useContext(Mycontext);
  const location = useLocation();
  const { symbol, strike } = location.state || {};

  return (
    <div className={`${mode === "dark" ? "bg-[#15161B]" : "bg-white"} transition-colors duration-300`}>
        <TopBar symbol={symbol} strike={strike} />
        <div className='flex flex-col lg:flex-row justify-center w-full'>
          <div className="w-full lg:w-auto">
            <TradingChart symbol={symbol} strike={strike} />
          </div>
          <div className="hidden lg:block">
            <TradingPage symbol={symbol} strike={strike} />
          </div>
          <div className="hidden lg:block">
            <RightSidebar symbol={symbol} strike={strike} />
          </div>
        </div>
        <div>
            <TradingTabs symbol={symbol} strike={strike} />
        </div>
    </div>
  )
}

export default Chart