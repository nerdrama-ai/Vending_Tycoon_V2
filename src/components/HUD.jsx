export default function HUD({ matchesLeft }) {
  return (
    <div className="hud">
      <div className="matches">
        Matches Left: <strong>{matchesLeft}</strong>
      </div>
    </div>
  );
}
