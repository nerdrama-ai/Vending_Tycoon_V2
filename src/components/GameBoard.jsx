
import { useEffect, useRef, useState } from "react";
import { generateBoard } from "../engine/randomizer";
import { findMatches } from "../engine/matchEngine";
import Tile from "./Tile";
import Confetti from "./Confetti";

export default function GameBoard({ level, onLevelComplete }) {
  const [board, setBoard] = useState(() => generateBoard(level));
  const [confetti, setConfetti] = useState([]);
  const drag = useRef(null);

  function swap(a, b) {
    const copy = board.map(r => r.map(c => [...c]));
    [copy[a.r][a.c][0], copy[b.r][b.c][0]] =
      [copy[b.r][b.c][0], copy[a.r][a.c][0]];
    return copy;
  }

  function trySwap(a, b) {
    const swapped = swap(a, b);
    const matches = findMatches(swapped);

    if (!matches.length) {
      setBoard(swap(a, b)); // swap back
      return;
    }

    setBoard(swapped);
    setTimeout(() => crush(matches), 250);
  }

  function crush(matches) {
    const copy = board.map(r => r.map(c => [...c]));
    matches.forEach(group =>
      group.forEach(([r,c]) => {
        copy[r][c].shift();
        setConfetti(cfs => [...cfs, { x: c*90, y: r*90, id: Math.random() }]);
      })
    );
    setBoard(copy);
  }

  function onPointerDown(r,c) {
    drag.current = { r,c };
  }

  function onPointerUp(r,c) {
    if (!drag.current) return;
    const d = drag.current;
    const dx = Math.abs(d.c - c);
    const dy = Math.abs(d.r - r);
    if (dx + dy === 1) trySwap(d, { r,c });
    drag.current = null;
  }

  return (
    <>
      <div className="board">
        {board.map((row,r)=>
          row.map((stack,c)=>(
            <Tile
              key={r+"-"+c}
              data={stack[0]}
              onPointerDown={()=>onPointerDown(r,c)}
              onPointerUp={()=>onPointerUp(r,c)}
            />
          ))
        )}
      </div>

      {confetti.map(c=>(
        <Confetti key={c.id} x={c.x} y={c.y} />
      ))}
    </>
  );
}
