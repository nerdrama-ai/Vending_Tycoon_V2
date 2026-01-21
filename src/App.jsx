import { useState } from "react";
import GameBoard from "./components/GameBoard";
import HUD from "./components/HUD";
import { levels } from "./engine/levelData";
import { getMachineSkin } from "./engine/machineSkins";

export default function App() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [matchesDone, setMatchesDone] = useState(0);

  const level = levels[levelIndex];
  const bg = getMachineSkin(levelIndex + 1);

  function handleMatch(count) {
    setMatchesDone(prev => {
      const next = prev + count;

      // Level completed
      if (next >= level.matches) {
        setTimeout(() => {
          setMatchesDone(0);
          setLevelIndex(i =>
            Math.min(i + 1, levels.length - 1)
          );
        }, 600);
      }

      return Math.min(next, level.matches);
    });
  }

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <h1 className="title">Vending Tycoon</h1>

      {/* HUD */}
      <HUD matchesLeft={level.matches - matchesDone} />

      {/* GAME */}
      <GameBoard
        key={levelIndex} // forces board reset per level
        onMatch={handleMatch}
      />
    </div>
  );
}
