import { cloneBoard } from "./board";
import { findMatches } from "./match";

export function isAdjacent(a, b) {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c) === 1;
}

export function trySwap(board, from, to) {
  if (!isAdjacent(from, to)) {
    return { success: false };
  }

  const test = cloneBoard(board);

  [test[from.r][from.c], test[to.r][to.c]] = [
    test[to.r][to.c],
    test[from.r][from.c]
  ];

  const matches = findMatches(test);

  if (matches.length === 0) {
    return { success: false };
  }

  return {
    success: true,
    board: test,
    matches
  };
}
