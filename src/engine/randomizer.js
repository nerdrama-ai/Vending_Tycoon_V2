
const COLORS = ["red","blue","green","orange","yellow"];

export function generateStack(items, depth) {
  return Array.from({ length: depth }, () => ({
    type: items[Math.floor(Math.random() * items.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));
}

export function generateBoard(level) {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 5 }, () =>
      generateStack(level.allowedItems, level.depth)
    )
  );
}
