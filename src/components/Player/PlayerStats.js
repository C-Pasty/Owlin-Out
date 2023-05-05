import React from "react";
import "./PlayerStats.css";

function PlayerStats(props) {
  return (
    <div className="player-stats">
      <div>Player Stats:</div>
      <br></br>
      <div>Attack: {props.player.attack}</div>
      <div>Health: {props.player.maxHealth}</div>
      <div>Gold: {props.player.gold}</div>
      <div>Experience: {props.player.experience}</div>
    </div>
  );
}

export default PlayerStats;
