import React from 'react'
import { useParams } from "react-router-dom";
import "./OurTeam.css";

import Heading from "../../Heading/Heading";
import OurTeam_navbar from "./OurTeam_navbar/OurTeam_navbar";
import OurTeam_data from "./OurTeam_data/OurTeam_data";

export default function OurTeam() {
  const { vertical } = useParams(); 
  return (
    <div className="OurTeam_body" id="OurTeam">
      <Heading name="OurTeam" />
      <div className="OurTeam_dashboard">
        <OurTeam_navbar IsOnAbout={vertical ? false : true}/>
        <OurTeam_data team={vertical ? vertical : "Secretaries"}/>
      </div>
    </div>
  );
}
