import { getWeatherIcon } from "../getWeatherIcon";

export default function DailyForecast({ daily, units }) {
  if (!daily || daily.length === 0) {
    return <p>Daily forecast data not available.</p>;
  }
  // 2. Transformacija objekta u niz koji .map() razumije
  // Uzimamo 'daily.time' kao bazu jer svaki dan ima svoj datum
  const forecastArray = daily.time.map((date, index) => {
    return {
      date: date,
      maxTemp: daily.temperature_2m_max
        ? daily.temperature_2m_max[index]
        : "N/A",
      minTemp: daily.temperature_2m_min
        ? daily.temperature_2m_min[index]
        : "N/A",
      weathercode: daily.weathercode ? daily.weathercode[index] : 0,
    };
  });
  return (
    <div className="daily-forecast">
      {forecastArray.map((day) => (
        <div key={day.date} className="daily-forecast-item">
          <p>
            {new Date(day.date).toLocaleDateString("en-EN", {
              weekday: "short",
            })}
          </p>
          <img src={getWeatherIcon(day.weathercode)} alt="Weather icon" />
          <p>
            Max:{" "}
            {units.temperature === "Celsius"
              ? `${Math.round(day.maxTemp)}°`
              : `${Math.round((day.maxTemp * 9) / 5 + 32)}°`}
          </p>
          <p>
            Min:{" "}
            {units.temperature === "Celsius"
              ? `${Math.round(day.minTemp)}°`
              : `${Math.round((day.minTemp * 9) / 5 + 32)}°`}
          </p>
        </div>
      ))}
    </div>
  );
}
