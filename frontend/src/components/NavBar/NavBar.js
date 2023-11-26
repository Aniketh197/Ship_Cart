import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
        <div className="div1">
      <Link to={"/List"}>Order Information</Link>
      </div>
      <div className="div2">
      <Link to={"/Form"}>Order Details Form</Link>
      </div>
    </div>
  );
}

export default NavBar;
