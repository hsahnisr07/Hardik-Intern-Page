import React from "react";
import "./WhoWeAre.css";

import bgmImage from "../../../Assets/WhoWeAre.jpg";
import Heading from "../../Heading/Heading";

export default function WhoWeAre() {
  return (
    <>
      <div className="WhoWeAre_body">
        <div className="WhoWeAre_img_box">
          
        </div>
        <div className="WhoWeAre_box">
          <div className="heading_WhoWeAre">
            <Heading name="Who We are" />
          </div>
          <div className="content_WhoWeAre">
            EESS or Electrical Engineering Students Society is the student
            organization of the Electrical department. We are the “backstage
            workers” (/IT is the main driving force) behind a number of
            enriching and interesting programmes - events, seminars and talks
            for the welfare of students, and to give them a platform to extract
            the best out of this department and college; and gain exposure of
            the world beyond these 4 years.
            <br />
            <br />
              We aim to bridge
            <span style={{ color: "#ff8800", fontWeight: "300" }}>
            &nbsp; the gap between the students and their best possible college
            life :)
            </span>
            <br />
            We have the experience of bringing into effect a rich blend of
            events - Alum talks, IdEEaVolt, PDP, freshers video, internships and
            placement talks.
          </div>
          <span className="meetus">
            MEET THE MAGIC MAKERS BEHIND THE SCENES
          </span>
          <a href="#OurTeam" className="WhoWeAre_button">
            <span>
              Team Members
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
