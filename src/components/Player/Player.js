import React from "react";
import Health from "../UI/Health";
// import Owlimage from "../images/Owlimage.png";
import "./Player.css";

function Player(props) {
  return (
    <div className="player-box">
      <div id="player-name">{props.player.name}</div>
      <img src={props.player.image}></img>
      <Health health={props.player.health} maxHealth={props.player.maxHealth} />
    </div>
  );
}

export default Player;
