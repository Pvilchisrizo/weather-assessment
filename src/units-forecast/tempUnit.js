export default function tempToggle({ unit, onToggle }) {
  return (
    <button className="temp-toggle" onClick={onToggle}>
      <span className={unit === "C" ? "active" : ""}>°C</span>
      <span className={unit === "F" ? "active" : ""}>°F</span>
    </button>
  );
}
