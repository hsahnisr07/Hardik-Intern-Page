import React, { useState } from "react";
import "./Text_disp.css";

export default function Text_disp(props) {
  return (
    <div  className="CardsBS_content_text">
      <span>{props.description.substring(0, 220)}</span>
    </div>
  );
}

