import React from "react";
import "./Health.css";

function Health(props) {
  return (
    <div>
      <progress
        className="health-bar"
        value={props.health}
        max={props.maxHealth}
      ></progress>
    </div>
  );
}

export default Health;
