const images = import.meta.glob(
  "/src/assets/items/*.png",
  {
    eager: true,
    import: "default"
  }
);

export function getAssetPath(type, color) {
  const key = `/src/assets/items/${color}${type}.png`;

  if (!images[key]) {
    console.warn("Missing asset:", key);
    return null;
  }

  return images[key];
}
