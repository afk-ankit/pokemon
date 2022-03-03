import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="Header">
      <div className="options">
        <Link to="/pokemon">
          <p className="menu">Home</p>
        </Link>

        <Link to="/search">
          <p className="menu">Search</p>
        </Link>
        <Link to="/fav">
          <p className="menu">Favourite</p>
        </Link>
      </div>
      <div>
        <h1>{basket?.length}</h1>
      </div>
    </div>
  );
}

export default Header;
