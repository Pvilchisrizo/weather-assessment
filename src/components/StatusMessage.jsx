export default function StatusMessage({ status, error }) {
  if (status === "idle")
    return <p className="status">Search for a city to see the weather ☀️ </p>;
  if (status === "loading") return <div className="spinner" />;
  if (status === "error") return <p className="status error">⚠️{error}</p>;
  return null;
}
