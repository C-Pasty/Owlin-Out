import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";
import AttackButton from "../UI/AttackButton";
import EnemySelector from "../UI/EnemySelector";
import PlayerStats from "../Player/PlayerStats";
import "./GameContainer.css";

const possibleEnemies = {
  worm: {
    name: "Worm",
    image: "images/Wormimage.PNG",
    attack: 3,
    health: 25,
    maxHealth: 25,
    experienceGranted: 2,
    goldGranted: 1,
    isAlive: true,
  },
  wormLv2: {
    name: "Two Worms",
    image: "images/Wormimage2.png",
    attack: 60,
    health: 200,
    maxHealth: 200,
    experienceGranted: 40,
    goldGranted: 25,
    isAlive: true,
  },
  wormLv3: {
    name: "Three Worms",
    image: "images/Wormimage3.png",
    attack: 600,
    health: 2000,
    maxHealth: 2000,
    experienceGranted: 800,
    goldGranted: 500,
    isAlive: true,
  },
};

const playerTemplate = {
  name: "Soren",
  image: "images/Owlimage.png",
  attack: 5,
  health: 25,
  maxHealth: 25,
  gold: 0,
  experience: 0,
  attackSpeed: 1000,
  isAlive: true,
};

/**
 * Generates a copy of an enemy that you wish to fight against.
 * if the supplied key does not exist, it will return a random enemy.
 * @param enemyType the key name for the enemy you wish to get
 * @returns
 */
function generateNewEnemy(enemyType = "worm") {
  const enemyKeys = Object.keys(possibleEnemies);

  let enemy;
  if (enemyType && possibleEnemies.hasOwnProperty(enemyType)) {
    enemy = possibleEnemies[enemyType];
  } else {
    const randomIndex = Math.floor(Math.random() * enemyKeys.length);
    enemy = possibleEnemies[enemyKeys[randomIndex]];
  }

  const newEnemy = { ...enemy };

  return newEnemy;
}

// function getCurrentEnemyChoices() {
//   return Object.keys(possibleEnemies);
// }

function GameContainer() {
  const [currentEnemy, setCurrentEnemy] = useState(generateNewEnemy());
  const [currentEnemyKey, setCurrentEnemyKey] = useState("worm");
  const [player, setPlayer] = useState({ ...playerTemplate });

  useEffect(() => {
    if (currentEnemy.health <= 0) {
      setCurrentEnemy((state) => ({
        ...state,
        image: "images/ded.png",
        isAlive: false,
      }));
      setPlayer((state) => ({
        ...state,
        experience: state.experience + currentEnemy.experienceGranted,
        gold: state.gold + currentEnemy.goldGranted,
      }));
    }
  }, [currentEnemy.health]);

  useEffect(() => {
    if (player.health <= 0) {
      setPlayer((state) => ({
        ...state,
        image: "images/ded.png",
        isAlive: false,
      }));
    }
  }, [player.health]);

  useEffect(() => {
    if (currentEnemy.image === "images/ded.png") {
      setTimeout(() => {
        setCurrentEnemy(generateNewEnemy(currentEnemyKey));
      }, 1000);
    }
  }, [currentEnemy.image]);

  useEffect(() => {
    if (player.image === "images/ded.png") {
      setTimeout(() => {
        setPlayer((state) => ({
          ...state,
          image: "images/Owlimage.png",
          health: state.maxHealth,
          isAlive: true,
        }));
        setCurrentEnemy(generateNewEnemy(currentEnemyKey));
      }, 1000);
    }
  }, [player.image]);

  useEffect(() => {
    setCurrentEnemy(generateNewEnemy(currentEnemyKey));
  }, [currentEnemyKey]);

  return (
    <div className="game-container">
      <PlayerStats player={player} />
      <Player player={player} />
      <AttackButton
        currentEnemy={currentEnemy}
        currentEnemyUpdater={setCurrentEnemy}
        player={player}
        playerUpdater={setPlayer}
      />
      <div className="enemy-container">
        <div className="enemy-selector-wrapper">
          <EnemySelector
            enemyChoices={possibleEnemies}
            enemyKey={currentEnemyKey}
            enemyKeyUpdater={setCurrentEnemyKey}
          />
        </div>
        <Enemy stats={currentEnemy} />
      </div>
    </div>
  );
}

export default GameContainer;
