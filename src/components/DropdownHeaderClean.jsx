export default function DropdownHeaderClean({
  system,
  setSystem,
  units,
  setUnits,
  UNIT_PRESETS,
}) {
  const toggleSystem = () => {
    setSystem((prev) => {
      const next = prev === "metric" ? "imperial" : "metric";
      setUnits(UNIT_PRESETS[next]); // reset
      return next;
    });
  };

  const updateUnit = (key, value) => {
    setUnits((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const options = {
    temperature: ["Celsius", "Fahrenheit"],
    windspeed: ["km/h", "mph"],
    precipitation: ["mm", "inches"],
  };

  return (
    <div className="dropdown-header">
      <button onClick={toggleSystem}>
        {system === "metric" ? "Switch to Imperial" : "Switch to Metric"}
      </button>

      {Object.entries(options).map(([key, values]) => (
        <div key={key}>
          <p>{key}</p>

          {values.map((val) => (
            <label key={val}>
              <input
                type="radio"
                name={key}
                checked={units[key] === val}
                onChange={() => updateUnit(key, val)}
              />
              {val}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
