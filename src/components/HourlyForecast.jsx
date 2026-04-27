import { getWeatherIcon } from "../getWeatherIcon";
import DaySelect from "./DaySelect";
import { useState } from "react";

export default function HourlyForecast({ hourly, units }) {
  const todayIndex = new Date().getDay() - 1; // 0 = Sunday pa prilagodba da 0 bude Monday, 6 Sunday
  console.log("todayIndex (0=Sun):", todayIndex);

  const [offset, setOffset] = useState(todayIndex);
  console.log("offset:", offset);

  if (!hourly || hourly.time.length === 0) {
    return <p>Hourly forecast data not available.</p>;
  }

  //  KLJUČ: uvijek od danas + offset
  const coef =
    offset - todayIndex >= 0 ? offset - todayIndex : 7 + (offset - todayIndex);

  const start = coef * 24;
  const end = start + 24;
  console.log("coef:", coef, "pomak:", offset, "start:", start, "end:", end);
  const hourlyData = hourly.time.slice(start, end).map((time, i) => ({
    time,
    temp: hourly.temperature_2m[start + i],
    code: hourly.weathercode[start + i],
  }));

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-header">
        <p>Hourly Forecast</p>
        <DaySelect value={offset} setValue={setOffset} />
      </div>

      <div className="hourly-forecast-list">
        {hourlyData.map((hour) => (
          <div key={hour.time} className="hourly-forecast-item">
            <div className="left">
              <img src={getWeatherIcon(hour.code)} alt="Weather icon" />
              <p>
                {new Date(hour.time).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            <p className="right">
              {units.temperature === "Celsius"
                ? `${Math.round(hour.temp)}°`
                : `${Math.round((hour.temp * 9) / 5 + 32)}°`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
