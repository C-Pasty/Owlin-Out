import React, { useState } from "react";
import "./AttackButton.css";

function AttackButton(props) {
  function attackHandler() {
    props.currentEnemyUpdater((state) => ({
      ...state,
      health: state.health - props.player.attack,
    }));
    props.playerUpdater((state) => ({
      ...state,
      health: state.health - props.currentEnemy.attack,
    }));
  }

  return (
    <>
      <button
        className="attack-button"
        disabled={!props.player.isAlive || !props.currentEnemy.isAlive}
        onClick={attackHandler}
      >
        Attack
      </button>
    </>
  );
}

export default AttackButton;
