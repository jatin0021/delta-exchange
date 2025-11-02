import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import TopBar from "./TopBar";
import TradingPage from "./TradingPage";
import Mycontext from "../../Context/Mycontext";
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
        <div className='flex justify-center'>
          <TradingChart symbol={symbol} strike={strike} />
        <TradingPage symbol={symbol} strike={strike} />
        <RightSidebar symbol={symbol} strike={strike} />
        </div>
        <TradingTabs symbol={symbol} strike={strike} />
    </div>
  )
}

export default Chart