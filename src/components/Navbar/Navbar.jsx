import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="intro" smooth={true} duration={500} offset={-64}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link
          className="navbar-link"
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="navbar-link"
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          className="navbar-link"
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          className="navbar-link"
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-64}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>

      <button className="navbar-button">
        <Link to="contact" spy={true} smooth={true} duration={500} offset={-64}>
          Get in Touch
        </Link>
      </button>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
