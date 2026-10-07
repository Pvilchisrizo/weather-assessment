export function formatTemp(celsius, unit) {
  const value = unit === "F" ? (celsius * 9) / 5 + 32 : celsius;
  return `${Math.round(value)}°${unit}`;
}

export function formatWind(metersPerSec, unit) {
  return unit === "F"
    ? `${Math.round(metersPerSec * 2.237)} mph`
    : `${Math.round(metersPerSec * 3.6)} km/h`;
}

export const iconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
