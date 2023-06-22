import React from "react";
import "./ButtonAnimate_I.css";

const ButtonAnimated = (props) => {
  return (
    <div className="ButtonAnimated" onClick={props.onClick}>
      <span>{props.text}</span>
    </div>
  );
};

export default ButtonAnimated;
