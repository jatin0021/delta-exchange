import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mystate from "./Context/Mystate";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PromoCarousel from "./Components/PromoCarousel";
import MainDash from "./pages/MainDash";

function App() {
  return (
    <>
    <Mystate>
      <Navbar />
      <PromoCarousel />
      <Routes>
        <Route path="/main-dash/*" element={<MainDash />} />
      </Routes>
      <Footer />
    </Mystate>
    </>
  );
}

export default App;

