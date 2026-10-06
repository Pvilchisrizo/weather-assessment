import { formatTemp, formatWind, iconUrl } from "../units-forecast/tempUnit";

export default function CurrentWeather({ data, unit }) {
  const { name, sys, main, wind, weather } = data;
  const { description, icon } = weather[0];

  return (
    <section className="current card">
      <h2>
        {name}, {sys.country}
      </h2>
      <img src={iconUrl(icon)} alt={description} />
      <p className="temp">{formatTemp(main.temp, unit)}</p>
      <p className="description">{description}</p>

      <dl className="details">
        <div>
          <dt>Feels like</dt>
          <dd>{formatTemp(main.feels_like, unit)}</dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{main.humidity}%</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd>{formatWind(wind.speed, unit)}</dd>
        </div>
        <div>
          <dt>Pressure</dt>
          <dd>{main.pressure} hPa</dd>
        </div>
      </dl>
    </section>
  );
}
