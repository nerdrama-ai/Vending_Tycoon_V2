import { getAssetPath } from "../engine/assetResolver";

export default function Tile({ data, onPointerDown, onPointerUp }) {
  if (!data) return <div className="tile empty" />;

  const src = getAssetPath(data.type, data.color);
  if (!src) return <div className="tile empty" />;

  return (
    <div
      className="tile"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <img
        src={src}
        className="item"
        draggable={false}
        alt={`${data.color} ${data.type}`}
      />
    </div>
  );
}
