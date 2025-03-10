import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="header-div">
      <nav className="nav-div">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/arc"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Arc
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stream"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Joueurs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/affiche"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Affiche
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panneau"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Panneau
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/vidéo"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Vidéo
            </NavLink>
          </li>
        </ul>
      </nav>
      <img className="logo-head" src={Logo} alt="Logo" />
    </header>
  );
};
export default Header;
