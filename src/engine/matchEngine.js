
export function findMatches(board) {
  const matches = [];
  const front = board.map(r => r.map(c => c[0]));

  for (let r=0;r<7;r++)
    for (let c=0;c<3;c++)
      if (front[r][c] && front[r][c+1] && front[r][c+2] &&
          front[r][c].type===front[r][c+1].type &&
          front[r][c].type===front[r][c+2].type &&
          front[r][c].color===front[r][c+1].color &&
          front[r][c].color===front[r][c+2].color)
        matches.push([[r,c],[r,c+1],[r,c+2]]);

  for (let c=0;c<5;c++)
    for (let r=0;r<5;r++)
      if (front[r][c] && front[r+1][c] && front[r+2][c] &&
          front[r][c].type===front[r+1][c].type &&
          front[r][c].type===front[r+2][c].type &&
          front[r][c].color===front[r+1][c].color &&
          front[r][c].color===front[r+2][c].color)
        matches.push([[r,c],[r+1,c],[r+2,c]]);

  return matches;
}
