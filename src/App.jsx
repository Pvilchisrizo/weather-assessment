import { useState } from "react";
import { useWeather } from "./useWeather";
import SearchBar from "./components/SearchBar";
import TempToggle from "./components/TempToggle";
import StatusMessage from "./components/StatusMessage";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

export default function App() {
  const { data, status, error, fetchWeather } = useWeather();
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => setUnit((u) => (u === "C" ? "F" : "C"));

  return (
    <main className="app">
      <div className="container">
        <header className="header">
          <h1>Get Your Weather</h1>
          <TempToggle unit={unit} onToggle={toggleUnit} />
        </header>

        <SearchBar onSearch={fetchWeather} isLoading={status === "loading"} />
        <StatusMessage status={status} error={error} />

        {status === "success" && data && (
          <>
            <CurrentWeather data={data.current} unit={unit} />
            <Forecast days={data.daily} unit={unit} />
          </>
        )}
        <Footer />
      </div>
    </main>
  );
}
