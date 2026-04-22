import { getWeatherIcon } from "../getWeatherIcon";
export default function HourlyForecast({ hourly, units }) {
  if (!hourly || hourly.time.length === 0) {
    return <p>Hourly forecast data not available.</p>;
  }
  // Uzmi samo prvih 24 sata iz onog dugačkog niza
  const hourlyData = hourly.time.slice(0, 24).map((time, index) => {
    return {
      time: time,
      temp: hourly.temperature_2m[index],
      code: hourly.weathercode[index],
    };
  });
  return (
    <div className="hourly-forecast">
      <h3>
        Hourly Forecast <button>Refresh</button>
      </h3>
      <div className="hourly-forecast-list">
        {hourlyData.map((hour) => (
          <div key={hour.time} className="hourly-forecast-item">
            <p>{hour.time}</p>
            <img src={getWeatherIcon(hour.code)} alt="Weather icon" />
            <p>
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
