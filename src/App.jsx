import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mystate from "./Context/Mystate";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainDash from "./pages/MainDash";
import Chart from "./pages/Chart Page/Chart";
import PromoCarousel from "./Components/PromoCarousel";
// import Login from "./pages/Chart Page/Login";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "./Context/Mycontext";

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
  const isChartPage = location.pathname.startsWith("/chart");

  return (
    <>
      <Navbar />
      {!isChartPage && <PromoCarousel />}
      <Routes>
        <Route path="/markets/*" element={<MainDash />} />
        <Route path="/chart/" element={<Chart  mode={mode}/>} />
        {/* <Route path="/login/" element={<Login  mode={mode}/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
