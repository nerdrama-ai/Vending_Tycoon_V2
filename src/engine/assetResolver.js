const images = import.meta.glob("/src/assets/items/*.png", {
  eager: true,
  import: "default"
});

export function getAssetPath(type, color) {
  const filename = `/src/assets/items/${color}${type}.png`;

  if (!images[filename]) {
    console.warn("Missing asset:", filename);
    return null;
  }

  return images[filename];
}
