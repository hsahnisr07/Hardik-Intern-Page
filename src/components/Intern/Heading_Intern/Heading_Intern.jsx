import React from "react";
import "./Heading_Intern.css";
export default function Heading_Intern(props) {
  return (
    <>
      <div className="heading_name">
        {props.name}
        <div className="heading_decor"></div>
      </div>
    </>
  );
}
