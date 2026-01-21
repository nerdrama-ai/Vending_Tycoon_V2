import { useState } from "react";
import GameBoard from "./components/GameBoard";
import { levels } from "./engine/levelData";
import { getMachineSkin } from "./engine/machineSkins";

export default function App() {
  const [levelIndex, setLevelIndex] = useState(0);

  const bg = getMachineSkin(levelIndex + 1);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <h1 className="title">Vending Tycoon</h1>

      <GameBoard
        level={levels[levelIndex]}
        onLevelComplete={() =>
          setLevelIndex(i => Math.min(i + 1, levels.length - 1))
        }
      />
    </div>
  );
}
