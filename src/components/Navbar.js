import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
        <li className={location.pathname === "/projects" ? "active" : ""}><Link to="/projects">Projects</Link></li>
        <li className={location.pathname === "/skills" ? "active" : ""}><Link to="/skills">Skills</Link></li>
        <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
