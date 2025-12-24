import { Routes, Route } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import Watchlist from "./Watchlist";
import Options from "./Options";
import Futures from "./Futures";
import Straddle from "./Straddle";
import Trackers from "./Trackers";
import Analytics from "./Analytics";
import Portfolio from "../../components/markets/Portfolio";
import { useContext } from "react";
import MyContext from "../../context/Mycontext";

export default function Markets() {
    const { mode } = useContext(MyContext);
  return (
    <div className={`p-0 ${mode === "dark" ? "bg-[#15161B]" : "bg-white"} min-h-screen pb-20 md:pb-0`}>
      {/* Sub Navbar */}
      <SubNavbar mode={mode} />

      {/* Sub Pages Content */}
      <div className="mt-0">
        <Routes>
          <Route path="/" element={<Futures mode={mode} />} />
          <Route path="/watchlist" element={<Watchlist mode={mode} />} />
          <Route path="/options" element={<Options mode={mode}/>} />
          <Route path="/futures" element={<Futures mode={mode}/>} />
          <Route path="/straddle" element={<Straddle mode={mode} />} />
          <Route path="/trackers" element={<Trackers mode={mode} />} />
          <Route path="/analytics" element={<Analytics mode= {mode}/>} />
          <Route path="/portfolio" element={<Portfolio mode={mode} />} />
        </Routes>
      </div>
    </div>
  );
}
