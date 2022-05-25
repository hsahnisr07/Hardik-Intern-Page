import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

export default function Navbar() {

  return (
    <>
      <div className="navbar__nav">
        <nav>
          <img src={logo} alt="" className="navbar__logo" />

          <ul className="navbar__navMenu">

              <NavLink to="/" className="Link" activeClassName="active">
                <li>Home</li>
              </NavLink>

              <NavLink to="/About" className="Link" activeClassName="active">
                <li>About</li>
              </NavLink>

              <NavLink to="/Events" className="Link" activeClassName="active">
                <li>Events</li>
              </NavLink>

              <NavLink to="/Intern" className="Link" activeClassName="active">
                <li>Intern</li>
              </NavLink>

              <NavLink to="/Acads" className="Link" activeClassName="active">
                <li>Academics</li>
              </NavLink>
              
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
