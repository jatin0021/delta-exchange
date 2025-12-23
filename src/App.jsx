import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mystate from "./context/Mystate";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import MobileBottomNav from "./components/layout/MobileBottomNav";
import Markets from "./pages/markets/Markets";
import Chart from "./pages/chart/Chart";
import PromoCarousel from "./components/markets/PromoCarousel";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "./context/Mycontext";
import Home from "./pages/home/Home";
import CryptoVsEquity from "./pages/home/CryptoVsEquity";
import Api from "./pages/algohub/apis/Api";
import TradeHistory from "./pages/algohub/TradeHistory";
import StrategyBuilder from "./pages/strategy-builder/StrategyBuilder";
import OptionsAnalytics from "./pages/options-analytics/OptionsAnalytics";
import Rewards from "./pages/rewards/Rewards";
import Referral from "./pages/referral/Referral";

import Account from "./pages/account/Account";

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
  const isChartPage = location.pathname.startsWith("/chart");
  const isAnalyticsPage = location.pathname.startsWith("/more/analytics");
  const isTradeDataPage = location.pathname.startsWith("/algohub/trade-data");
  const isApiPage = location.pathname.startsWith("/algohub/apis");
  const isAccountPage = location.pathname.startsWith("/algohub/trading-bot") || 
                        location.pathname.startsWith("/account");
  const isStrategyBuilderPage = location.pathname.startsWith("/more/strategy-builder");

  const hideFooter = isMarketsPage || isChartPage || isAnalyticsPage || isTradeDataPage || isApiPage || isAccountPage || isStrategyBuilderPage;

  return (
    <>
      <div className={isMarketsPage ? "hidden lg:block" : ""}>
        <Navbar />
      </div>
      {isMarketsPage && (
        <div className="hidden lg:block">
          <PromoCarousel />
        </div>
      )}
      <div className={`${mode} ${(isAccountPage || isStrategyBuilderPage) ? "lg:h-[calc(100vh-48px)] h-screen" : ""} ${hideFooter && !isApiPage ? "mb-[60px] lg:mb-0" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets/*" element={<Markets />} />
          <Route path="/chart/" element={<Chart mode={mode} />} />
          <Route path="/cryptovsequity/" element={<CryptoVsEquity mode={mode} />} />
          <Route path="/algohub/apis/" element={<Api mode={mode} />} />
          <Route path="/algohub/trade-data/" element={<TradeHistory mode={mode} />} />
          <Route path="/algohub/trading-bot/" element={<Account mode={mode} defaultActiveSection="Trading Bot" />} />
          <Route path="/more/strategy-builder/" element={<StrategyBuilder mode={mode} />} />
          <Route path="/more/analytics/" element={<OptionsAnalytics mode={mode} />} />
          <Route path="/more/rewards/" element={<Rewards mode={mode} />} />
          <Route path="/more/referral-program/" element={<Referral mode={mode} />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
      {hideFooter && !isApiPage && <MobileBottomNav />}
    </>
  );
}

export default App;
