import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";

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
              to="/pancarte"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Pancarte
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stream"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Stream
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
