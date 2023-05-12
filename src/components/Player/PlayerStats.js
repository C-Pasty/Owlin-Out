import React from "react";
import "./PlayerStats.css";

function PlayerStats(props) {
  return (
    <div className="player-stats">
      <div>Player Stats:</div>
      <br></br>
      <div>Level: {props.player.level}</div>
      <div>Attack: {props.player.attack}</div>
      <div>
        Health: {props.player.health}/{props.player.maxHealth}
      </div>
      <div>Gold: {props.player.gold}</div>

      <div>
        Experience:{" "}
        {`${props.player.experience}/${props.player.experienceToNextLevel}`}
      </div>
    </div>
  );
}

export default PlayerStats;
