import "./EnemySelector.css";

function EnemySelector(props) {
  function enemyChangeHandler(event) {
    // event.target.value
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
      {/* <option value={"worm1"}>Worm 1</option>
      <option>Worm 2</option>
      <option>Worm 3</option> */}
    </select>
  );
}

export default EnemySelector;
