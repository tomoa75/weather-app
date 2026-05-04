import "../index.css";
import checkMark from "../assets/images/icon-checkmark.svg";
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
      <label className="radio-item">
        Celsius(°C)
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>
      <label className="radio-item">
        Fahrenheit(°F)<span className="checkmark"></span>
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>

      <p>Wind Speed</p>
      <span className="checkmark"></span>
      <label className="radio-item">
        km/h
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>
      <label className="radio-item">
        mph<span className="checkmark"></span>
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>

      <p>Precipitation</p>
      <label className="radio-item">
        mm<span className="checkmark"></span>
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>
      <label className="radio-item">
        inches<span className="checkmark"></span>
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
        <span className="checkmark">
          <img src={checkMark}></img>
        </span>
      </label>
    </div>
  );
}
