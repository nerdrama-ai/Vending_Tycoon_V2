import { ROWS, COLS } from "./board";

export function findMatches(board) {
  const matches = new Set();

  // Horizontal
  for (let r = 0; r < ROWS; r++) {
    let streak = 1;
    for (let c = 1; c <= COLS; c++) {
      const prev = board[r][c - 1];
      const curr = board[r][c];
      if (
        curr &&
        prev &&
        curr.type === prev.type &&
        curr.color === prev.color
      ) {
        streak++;
      } else {
        if (streak >= 3) {
          for (let k = 0; k < streak; k++) {
            matches.add(`${r},${c - 1 - k}`);
          }
        }
        streak = 1;
      }
    }
  }

  // Vertical
  for (let c = 0; c < COLS; c++) {
    let streak = 1;
    for (let r = 1; r <= ROWS; r++) {
      const prev = board[r - 1]?.[c];
      const curr = board[r]?.[c];
      if (
        curr &&
        prev &&
        curr.type === prev.type &&
        curr.color === prev.color
      ) {
        streak++;
      } else {
        if (streak >= 3) {
          for (let k = 0; k < streak; k++) {
            matches.add(`${r - 1 - k},${c}`);
          }
        }
        streak = 1;
      }
    }
  }

  return [...matches].map(s => s.split(",").map(Number));
}
