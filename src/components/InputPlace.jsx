import React, { useState } from "react";

export default function InputPlace({
  fetchCities,
  fetchWeather,
  candidates,
  setCandidates,
}) {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search for a place..."
          autoFocus
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            fetchCities(e.target.value);
          }}
        />

        <button onClick={() => fetchWeather(selectedCity)}>Search</button>
      </div>
      {candidates.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <p>Odaberi grad:</p>

          {candidates.map((c, i) => (
            <button
              key={i}
              onClick={() => {
                setCity(c.name);
                setCandidates([]);
                setSelectedCity(c);
              }}
              style={{
                display: "block",
                margin: "5px 0",
              }}
            >
              {c.name} ({c.country})
            </button>
          ))}
        </div>
      )}
    </>
  );
}
