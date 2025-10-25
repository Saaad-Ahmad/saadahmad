import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="intro" smooth={true} duration={500} offset={-64}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {["intro", "skills", "projects", "contact"].map((section, i) => (
          <Link
            key={i}
            className="navbar-link"
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-64}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
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
