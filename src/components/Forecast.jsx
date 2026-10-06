import ForecastCard from "./ForecastCard";

export default function Forecast({ days, unit }) {
  return (
    <section className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {days.map((day, i) => (
          <ForecastCard key={day.key} day={day} unit={unit} index={i} />
        ))}
      </div>
    </section>
  );
}
