import React, { useState } from "react";
import search from "../assets/images/icon-search.svg";
import iconLoading from "../assets/images/icon-loading.svg";

export default function InputPlace({
  fetchCities,
  fetchWeather,
  candidates,
  setCandidates,
  loading,
}) {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <div className="searchbox">
        <div className="input-wrapper">
          <img src={search} />
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
          {loading && (
            <div className="loading">
              <img src={iconLoading} />
              <p>Search in progress</p>
            </div>
          )}

          {candidates.length > 0 && (
            <div className="candidates">
              {candidates.map((c, i) => (
                <div
                  className="single-candidate"
                  key={i}
                  onClick={() => {
                    setCity(c.name);
                    setCandidates([]);
                    setSelectedCity(c);
                  }}
                >
                  {c.name} ({c.country})
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={() => fetchWeather(selectedCity)}>Search</button>
      </div>
    </>
  );
}
