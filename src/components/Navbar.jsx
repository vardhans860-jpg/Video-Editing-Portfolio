// import React from "react";
import "../style/Navbar.css"
const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#" className="logo">
        Sai Vardhan<span>.</span>
      </a>

      <nav>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-cta">
        Let's Talk
      </a>
    </header>
  );
};

export default Navbar;