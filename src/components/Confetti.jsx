
export default function Confetti({ x, y }) {
  return (
    <div className="confetti" style={{ left: x, top: y }}>
      {"$$$$$".split("").map((c, i) => (
        <span key={i}>$</span>
      ))}
    </div>
  );
}
