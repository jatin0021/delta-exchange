
import { useContext } from "react";
import Mycontext from "../Context/Mycontext";  


const ToggleBtn = () => {
      const { mode, toggleMode } = useContext(Mycontext);

  return (
    <>
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded-lg transition text-sm font-semibold border cursor-pointer"
        style={{
          background: mode === "dark" ? "#6B7080" : "black",
          color: mode === "dark" ? "white" : "white",
          borderColor: mode === "dark" ? "white" : "black",
        }}
      >
        {mode === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>
    </>
  );
};

export default ToggleBtn;
