import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/header.css";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/arc", label: "Arc" },
    { to: "/stream", label: "Joueurs" },
    { to: "/vidéo", label: "Vidéo" },
  ];

  return (
    <header className="header-div">
      <div className="burger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <nav className="nav-div">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <img className="logo-head" src={Logo} alt="Logo" />

      <div className={`mobile-menu ${menuOpen ? "show" : "hidden"}`}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
