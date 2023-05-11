import "./EnemySelector.css";

function EnemySelector(props) {
  function enemyChangeHandler(event) {
    props.enemyKeyUpdater(event.target.value);
  }

  return (
    <select
      className="enemy-dropdown"
      value={props.enemyKey}
      onChange={enemyChangeHandler}
    >
      {Object.keys(props.enemyChoices).map((enemyName) => (
        <option key={enemyName} value={enemyName}>
          {props.enemyChoices[enemyName].name}
        </option>
      ))}
    </select>
  );
}

export default EnemySelector;
