import { getAssetPath } from "../engine/assetResolver";

export default function Tile({ data, onClick, selected, shake }) {
  if (!data) return <div className="tile empty" />;

  const className = `
    tile
    ${selected ? "selected" : ""}
    ${shake ? "shake" : ""}
  `;

  return (
    <div className={className} onClick={onClick}>
      <img
        src={getAssetPath(data.type, data.color)}
        className="item"
        draggable={false}
        alt=""
      />
    </div>
  );
}
