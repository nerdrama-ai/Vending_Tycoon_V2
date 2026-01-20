
import { getAssetPath } from "../engine/assetResolver";

export default function Tile({ data, onPointerDown, onPointerUp }) {
  if (!data) return <div className="tile empty" />;

  return (
    <div className="tile" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
      <img
        src={getAssetPath(data.type, data.color)}
        className="item"
        draggable={false}
      />
    </div>
  );
}
