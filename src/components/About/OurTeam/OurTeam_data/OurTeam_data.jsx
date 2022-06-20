import React from 'react'

import './OurTeam_data.css';
import OurTeamData from "./OurTeamData.js";

export default function OurTeam_data({ team }) {
  return (
    <div id="team" className="ourTeam__container">
      <div className="ourTeam__member">
        {OurTeamData[team].map((obj, indx) => {
          return (
            <div key={indx} className="ourTeam__teamCard">
              <div className="img_container">
                <img src={obj.img} alt={obj.name} />
                <div className="img_hover_content">
                  <div className="content_mail">{obj.mail}</div>
                </div>
              </div>
              <div className="ourTeam__memberPos">{obj.position}</div>
              <div className="ourTeam__memberName">{obj.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
