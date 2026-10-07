const localDate = (dt, offset) => new Date((dt + offset) * 1000);

export function getDailyForecast(list, timezoneOffset) {
  const days = {};

  list.forEach((item) => {
    const date = localDate(item.dt, timezoneOffset);
    const key = date.toISOString().slice(0, 10);

    if (!days[key]) {
      days[key] = { date, min: Infinity, max: -Infinity, entries: [] };
    }
    days[key].min = Math.min(days[key].min, item.main.temp_min);
    days[key].max = Math.max(days[key].max, item.main.temp_max);
    days[key].entries.push(item);
  });

  const todayKey = localDate(Date.now() / 1000, timezoneOffset)
    .toISOString()
    .slice(0, 10);

  return Object.entries(days)
    .filter(([key]) => key !== todayKey)
    .slice(0, 5)
    .map(([key, day]) => {
      const hourDiff = (e) =>
        Math.abs(localDate(e.dt, timezoneOffset).getUTCHours() - 12);
      const midday = day.entries.reduce((best, e) =>
        hourDiff(e) < hourDiff(best) ? e : best
      );

      return {
        key,
        dayName: day.date.toLocaleDateString("en-US", {
          weekday: "short",
          timeZone: "UTC",
        }),
        min: day.min,
        max: day.max,
        icon: midday.weather[0].icon,
        description: midday.weather[0].description,
      };
    });
}
