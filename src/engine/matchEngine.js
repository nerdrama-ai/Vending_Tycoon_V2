import { ROWS, COLS } from "./board";

/**
 * Finds all match-3 (or greater) groups on the board.
 * Returns an array of coordinate pairs: [row, col]
 */
export function findMatches(board) {
  const matched = new Set();

  // ======================
  // HORIZONTAL MATCHES
  // ======================
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
            matched.add(`${r},${c - 1 - k}`);
          }
        }
        streak = 1;
      }
    }
  }

  // ======================
  // VERTICAL MATCHES
  // ======================
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
            matched.add(`${r - 1 - k},${c}`);
          }
        }
        streak = 1;
      }
    }
  }

  // Convert Set to array of [row, col]
  return Array.from(matched).map(key =>
    key.split(",").map(Number)
  );
}
