import { useState } from "react";

export default function SearchBar({ onSearch, isLoading }) {
  const [city, setCity] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) return setInputError("Please enter a city name");
    if (!/^[\p{L}\s,.'-]+$/u.test(trimmed)) {
      return setInputError(
        "City names can only contain letters,spaces, and commas."
      );
    }
    setInputError("");
    onSearch(trimmed);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search a city"
      />

      <button type="submit" disabled={isLoading}>
        Search
      </button>
      {inputError && <p className="input-error"> {inputError}</p>}
    </form>
  );
}
