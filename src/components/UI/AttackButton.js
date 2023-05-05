import React, { useState } from "react";
import "./AttackButton.css";

function AttackButton(props) {
  function attackHandler() {
    const newEnemy = {
      ...props.currentEnemy,
      health: props.currentEnemy.health - props.player.attack,
    };

    props.currentEnemyUpdater(newEnemy);
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
