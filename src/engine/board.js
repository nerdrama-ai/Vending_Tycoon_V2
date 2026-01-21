export const ROWS = 7;
export const COLS = 5;

export function cloneBoard(board) {
  return board.map(row => row.map(cell => ({ ...cell })));
}

export function createEmptyBoard() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => null)
  );
}
