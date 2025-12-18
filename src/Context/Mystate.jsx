import { useState } from "react";
import Mycontext from "./Mycontext";
import PropTypes from "prop-types";

function Mystate(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    
    // Apply theme class to document element for global CSS variables
    document.documentElement.className = newMode;
    document.body.className = newMode;
    
    // Body background handled via CSS variables in index.css
  };

  return (
    <Mycontext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </Mycontext.Provider>
  );
}
Mystate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mystate;