import React from 'react'
import { Outlet, NavLink, useParams } from "react-router-dom";

import "./OurTeam_navbar.css"

//image imports
import Secretary_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Secretary_icon';
import Design_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Design_icon';
import Media_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Media_icon';
import Editorial_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Editorial_icon';
import Operations_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Operations_icon';
import Faculty_icon from '../../../../Assets/OurTeam_imgs/OurTeam_icons/Faculty_icon';


export default function OurTeam_navbar({IsOnAbout}) {
  return (
    <div className="OurTeam_navbar_body">
        <nav className="OurTeam_navbar_nav">
        <ul
            className="OurTeam_navbar__navMenu"
          >
            <NavLink
              to="/About/Secretaries"
              className={`Link ${IsOnAbout?"active":""}`}
              activeClassName="active"
            >
              <Secretary_icon/>
              <li>Secretaries</li>
            </NavLink>
            <NavLink
              to="/About/Development"
              className="Link"
              activeClassName="active"
            >
              <Media_icon/>
              <li>Development</li>
            </NavLink>
            <NavLink
              to="/About/Design"
              className="Link"
              activeClassName="active"
            >
              <Design_icon/>
              <li>Design</li>
            </NavLink>
            <NavLink
              to="/About/Editorial"
              className="Link"
              activeClassName="active"
            >
              <Editorial_icon/>
              <li>Editorial</li>
            </NavLink>
            <NavLink
              to="/About/Operations"
              className="Link"
              activeClassName="active"
            >
              <Operations_icon/>
              <li>Operation</li>
            </NavLink>
            <NavLink
              to="/About/Faculty"
              className="Link"
              activeClassName="active"
            >
              <Faculty_icon/>
              <li>Faculty</li>
            </NavLink>
          </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
