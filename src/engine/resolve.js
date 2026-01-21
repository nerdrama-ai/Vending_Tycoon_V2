import { ROWS, COLS } from "./board";
import { findMatches } from "./match";
import { spawnTile } from "./level";

export function resolveBoard(board) {
  let totalCleared = 0;

  while (true) {
    const matches = findMatches(board);
    if (matches.length === 0) break;

    // Clear matches
    matches.forEach(([r, c]) => {
      board[r][c] = null;
    });

    totalCleared += matches.length;

    // Collapse
    for (let c = 0; c < COLS; c++) {
      let writeRow = ROWS - 1;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (board[r][c]) {
          board[writeRow][c] = board[r][c];
          if (writeRow !== r) board[r][c] = null;
          writeRow--;
        }
      }

      // Refill
      for (let r = writeRow; r >= 0; r--) {
        board[r][c] = spawnTile();
      }
    }
  }

  return totalCleared;
}
