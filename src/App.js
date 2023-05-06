import "./App.css";
import GameContainer from "./components/GameContainer/GameContainer";
import GameTitle from "./components/UI/GameTitle";
import MenuButtons from "./components/UI/MenuButtons";

function App() {
  return (
    <div>
      <GameTitle />
      <GameContainer />
      <MenuButtons />
    </div>
  );
}

export default App;
