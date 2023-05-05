import React, { useState } from "react";
import Health from "../UI/Health";
import "./Enemy.css";

function Enemy(props) {
  return (
    <div className="enemy-box">
      <div id="enemy-name">{props.stats.name}</div>
      <img src={props.stats.image}></img>
      <Health health={props.stats.health} maxHealth={props.stats.maxHealth} />
    </div>
  );
}

export default Enemy;
