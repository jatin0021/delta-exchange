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

  return (
    <>
      <Navbar />
  {isMarketsPage && <PromoCarousel />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets/*" element={<MainDash />} />
        <Route path="/chart/" element={<Chart  mode={mode}/>} />
        <Route path="/cryptovsequity/" element={<CryptoVsEquity  mode={mode}/>} />
        <Route path="/algohub/apis/" element={<Api  mode={mode}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
