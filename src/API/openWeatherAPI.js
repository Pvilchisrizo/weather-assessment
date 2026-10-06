const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const ERRORS = {
  400: "Please enter a valid city name.",
  404: "We couldn't find that city. Check the spelling and try again.",
};

async function request(endpoint, params, signal) {
  const query = new URLSearchParams({
    ...params,
    units: "metric",
    appid: API_KEY,
  });
  const res = await fetch(`${BASE_URL}/${endpoint}?${query}`, { signal });

  if (!res.ok) {
    throw new Error(
      ERRORS[res.status] || `Something went wrong(error ${res.status})`
    );
  }
  return res.json();
}

export function getWeather(location, signal) {
  if (typeof location !== "string" || location.trim() === "") {
    throw new Error(ERRORS[400]);
  }
  const params = { q: location.trim() };
  return Promise.all([
    request("weather", params, signal),
    request("forecast", params, signal),
  ]);
}
