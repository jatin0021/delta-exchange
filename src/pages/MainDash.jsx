import { Routes, Route } from "react-router-dom";
import SubNavbar from "../components/SubNavbar";
import Watchlist from "../components/Watchlist";
import Options from "../components/Options";
import Futures from "../components/Futures";
import Straddle from "../components/Straddle";
import Trackers from "../components/Trackers";
import Analytics from "../components/Analytics";
import { useContext } from "react";
import MyContext from "../Context/MyContext";

export default function Markets() {
    const { mode } = useContext(MyContext);
  return (
    <div className="p-0">
      {/* Sub Navbar */}
      <SubNavbar mode={mode} />

      {/* Sub Pages */}
      <div className="mt-0">
        <Routes>
          <Route path="/" element={<Futures />} />
          <Route path="/watchlist" element={<Watchlist mode={mode} />} />
          <Route path="/options" element={<Options mode={mode}/>} />
          <Route path="/futures" element={<Futures mode={mode}/>} />
          <Route path="/straddle" element={<Straddle mode={mode} />} />
          <Route path="/trackers" element={<Trackers mode={mode} />} />
          <Route path="/analytics" element={<Analytics mode= {mode}/>} />
        </Routes>
      </div>
    </div>
  );
}
