import React from "react";
import "./Shop.css";

const Shop = (props) => {
  function upgradeAttack() {
    if (props.player.gold >= 10) {
      props.playerUpdater((state) => {
        return {
          ...state,
          attack: state.attack + 5,
          gold: state.gold - 10,
        };
      });
    }
  }

  return (
    <>
      <div className="shop-title">Shop</div>
      <div className="shop-container">
        <div className="upgrade-container">
          <div className="upgrade-name">Upgrade Attack +5</div>
          <div className="upgrade-name">Cost: 10 Gold</div>
          <button className="upgrade-button" onClick={upgradeAttack}>
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
