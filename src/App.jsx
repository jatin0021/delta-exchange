import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mystate from "./Context/Mystate";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainDash from "./pages/MainDash";
import Chart from "./pages/Chart Page/Chart";
import PromoCarousel from "./Components/PromoCarousel";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "./Context/Mycontext";
import Home from "./pages/Home Page/Home";
import CryptoVsEquity from "./pages/Home Page/CryptoVsEquity";
import Api from "./pages/Algohub/Apis/Api";
import TradeHistory from "./pages/Algohub/Trade Data/TradeHistory";
import StrategyBuilder from "./pages/StrategyBuilder/StrategyBuilder";
import OptionsAnalytics from "./pages/OptionsAnalytics/OptionsAnalytics";

import Account from "./Account/Account";

function App() {
  return (
    <Mystate>
      <AppContent />
    </Mystate>
  );
}

function AppContent() {
  const { mode } = useContext(MyContext);
  const location = useLocation();
  const isMarketsPage = location.pathname.startsWith("/markets");
  const isAccountPage = location.pathname.startsWith("/algohub/trading-bot") || 
                        location.pathname.startsWith("/account");
  const isStrategyBuilderPage = location.pathname.startsWith("/more/strategy-builder");

  return (
    <>
      <Navbar />
      {isMarketsPage && <PromoCarousel />}
      <div className={(isAccountPage || isStrategyBuilderPage) ? "h-[calc(100vh-48px)]" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets/*" element={<MainDash />} />
          <Route path="/chart/" element={<Chart mode={mode} />} />
          <Route path="/cryptovsequity/" element={<CryptoVsEquity mode={mode} />} />
          <Route path="/algohub/apis/" element={<Api mode={mode} />} />
          <Route path="/algohub/trade-data/" element={<TradeHistory mode={mode} />} />
          <Route path="/algohub/trading-bot/" element={<Account mode={mode} defaultActiveSection="Trading Bot" />} />
          <Route path="/more/strategy-builder/" element={<StrategyBuilder mode={mode} />} />
          <Route path="/options-analytics/" element={<OptionsAnalytics mode={mode} />} />
        </Routes>
      </div>
      {!isAccountPage && !isStrategyBuilderPage && <Footer />}
    </>
  );
}

export default App;
