import { useEffect, useState } from "react";
import { generateSafeBoard } from "../engine/level";
import { trySwap } from "../engine/swap";
import { resolveBoard } from "../engine/resolve";
import Tile from "./Tile";

export default function GameBoard({ onMatch }) {
  const [board, setBoard] = useState(() => generateSafeBoard());
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [shake, setShake] = useState([]);

  function handleTileClick(r, c) {
    if (animating) return;

    if (!selected) {
      setSelected({ r, c });
      return;
    }

    // Clicking same tile deselects
    if (selected.r === r && selected.c === c) {
      setSelected(null);
      return;
    }

    attemptSwap(selected, { r, c });
    setSelected(null);
  }

  function attemptSwap(from, to) {
    setAnimating(true);

    const result = trySwap(board, from, to);

    if (!result.success) {
      // Invalid swap → shake
      setShake([from, to]);
      setTimeout(() => {
        setShake([]);
        setAnimating(false);
      }, 300);
      return;
    }

    // Valid swap
    let newBoard = result.board;
    setBoard(newBoard);

    setTimeout(() => {
      const cleared = resolveBoard(newBoard);
      setBoard([...newBoard]);
      onMatch(cleared);
      setAnimating(false);
    }, 250);
  }

  return (
    <div className="machine-grid">
      {board.map((row, r) =>
        row.map((cell, c) => (
          <Tile
            key={`${r}-${c}`}
            data={cell}
            selected={selected?.r === r && selected?.c === c}
            shake={shake.some(t => t.r === r && t.c === c)}
            onClick={() => handleTileClick(r, c)}
          />
        ))
      )}
    </div>
  );
}
