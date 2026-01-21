import { ROWS, COLS } from "./board";
import { findMatches } from "./match";
import { trySwap } from "./swap";

const COLORS = ["red", "blue", "green", "orange", "yellow"];
const ITEMS = ["chips", "chocolate", "drink", "can", "bar"];

export function spawnTile(items) {
  return {
    type: items[Math.floor(Math.random() * items.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  };
}

export function generateSafeBoard() {
  let board;

  do {
    board = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, spawnTile)
    );
  } while (findMatches(board).length > 0 || !hasValidMove(board));

  return board;
}

function hasValidMove(board) {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const from = { r, c };
      const neighbors = [
        { r: r + 1, c },
        { r: r - 1, c },
        { r, c: c + 1 },
        { r, c: c - 1 }
      ];

      for (const to of neighbors) {
        if (
          to.r >= 0 &&
          to.r < ROWS &&
          to.c >= 0 &&
          to.c < COLS
        ) {
          if (trySwap(board, from, to).success) return true;
        }
      }
    }
  }
  return false;
}
