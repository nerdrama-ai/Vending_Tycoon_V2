const images = import.meta.glob("../assets/items/*.png", {
  eager: true,
  import: "default"
});

export function getAssetPath(type, color) {
  const key = `../assets/items/${color}${type}.png`;
  return images[key];
}
