// src/components/Navbar.js

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  // Optional: Dark mode toggle
  const [darkMode, setDarkMode] = React.useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className={`navbar-header ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-container">
        {/* TOP ROW: Brand (Left), Contact Info (Right) */}
        <div className="top-row">
          <div className="navbar-brand">
            <NavLink to="/">Rashid Abdi</NavLink>
          </div>

          <div className="contact-info">
            <a href="tel:+16124436685" className="contact-item">
              <FontAwesomeIcon icon={faPhone} /> (612) 443-6685
            </a>
            <a href="mailto:Abdi12@augsburg.edu" className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} /> Abdia12@augsburg.edu
            </a>
            <span className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Minneapolis, MN
            </span>
            <a
              href="https://www.linkedin.com/in/rashid-abdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: Centered Nav Links, Theme Toggle (Right) */}
        <div className="bottom-row">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className="nav-link">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="nav-link">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="nav-link">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
