import { useState, useRef, useCallback } from "react";
import { getWeather } from "../API/openWeatherAPI";
import { getDailyForecast } from "../units-forecast./weekForecast";

export function useWeather() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  const fetchWeather = useCallback(async (location) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setStatus("loading");
    setError("");

    try {
      const [current, forecast] = await getWeather(location, controller.signal);
      setData({
        current,
        daily: getDailyForecast(forecast.list, forecast.city.timezone),
      });
      setStatus("success");
    } catch (err) {
      if (err.name === "AbortError") return;
      setError(
        err instanceof TypeError
          ? "Network error. Check your internet connection"
          : err.message
      );
      setStatus("error");
    }
  }, []);
  return { data, status, error, fetchWeather };
}
