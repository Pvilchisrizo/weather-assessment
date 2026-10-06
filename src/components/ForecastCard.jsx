import { formatTemp, iconUrl } from "../units-forecast/tempUnit";

export default function ForecastCard({ day, unit, index }) {
  return (
    <article className="forecast-card card fade-up" style={{ "--i": index }}>
      <p className="day"> {day.dayName}</p>
      <img src={iconUrl(day.icon)} alt={day.description} />
      <p>
        <strong>{formatTemp(day.max, unit)}</strong>
        {""}
        <span className="muted">{formatTemp(day.min, unit)}</span>
      </p>
    </article>
  );
}
