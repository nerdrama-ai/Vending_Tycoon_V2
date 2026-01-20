
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import HUD from "./components/HUD";
import { levels } from "./engine/levelData";

export default function App() {
  const [level, setLevel] = useState(0);

  return (
    <div className="app">
      <HUD level={level + 1} />
      <GameBoard
        level={levels[level]}
        onLevelComplete={() =>
          setLevel(l => Math.min(l + 1, levels.length - 1))
        }
      />
    </div>
  );
}
