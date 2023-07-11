import React from "react";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Navbar1 />
      <Navbar2 />
    </div>
  );
};

export default Navbar;
