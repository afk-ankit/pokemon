import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="options">
        <Link to="/">
          <p className="menu">Home</p>
        </Link>

        <Link to="/fav">
          <p className="menu">Search</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
