export default function DropdownHeader({
  system,
  setSystem,
  units,
  setUnits,
  UNIT_PRESETS,
}) {
  const toggleSystem = () => {
    setSystem((prev) => {
      const next = prev === "metric" ? "imperial" : "metric";
      setUnits(UNIT_PRESETS[next]); // 🔥 reset
      return next;
    });
  };

  const current = units;

  return (
    <div className="dropdown-header">
      <button onClick={toggleSystem}>
        {system === "metric" ? "Switch to Imperial" : "Switch to Metric"}
      </button>

      <p>Temperature</p>

      <input
        type="radio"
        name="temperature"
        checked={current.temperature === "Celsius"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            temperature: "Celsius",
          }))
        }
      />
      <label>Celsius</label>

      <input
        type="radio"
        name="temperature"
        checked={current.temperature === "Fahrenheit"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            temperature: "Fahrenheit",
          }))
        }
      />
      <label>Fahrenheit</label>

      <p>Wind Speed</p>

      <input
        type="radio"
        name="windspeed"
        checked={current.windspeed === "km/h"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            windspeed: "km/h",
          }))
        }
      />
      <label>km/h</label>

      <input
        type="radio"
        name="windspeed"
        checked={current.windspeed === "mph"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            windspeed: "mph",
          }))
        }
      />
      <label>mph</label>

      <p>Precipitation</p>

      <input
        type="radio"
        name="precipitation"
        checked={current.precipitation === "mm"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            precipitation: "mm",
          }))
        }
      />
      <label>mm</label>

      <input
        type="radio"
        name="precipitation"
        checked={current.precipitation === "inches"}
        onChange={() =>
          setUnits((prev) => ({
            ...prev,
            precipitation: "inches",
          }))
        }
      />
      <label>inches</label>
    </div>
  );
}
