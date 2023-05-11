import React from "react";
import "./MenuButtons.css";

function MenuButtons(props) {
  return (
    <div className="button-container">
      <button
        className="menu-button"
        onClick={() => props.changeViewUpdater("home")}
      >
        Home
      </button>
      <button
        className="menu-button"
        onClick={() => props.changeViewUpdater("shop")}
      >
        Shop
      </button>
      <button disabled={true} className="menu-button">
        Coming Soon™
      </button>
      <button disabled={true} className="menu-button">
        Coming Soon™
      </button>
      <button disabled={true} className="menu-button">
        Coming Soon™
      </button>
      <button disabled={true} className="menu-button">
        Coming Soon™
      </button>
    </div>
  );
}

export default MenuButtons;
