import { getWeatherIcon } from "../getWeatherIcon";
export default function MainDiv({ weather, loading, error, units }) {
  return (
    <div className="main-div">
      {loading && <p>Učitavanje...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>
            Temperatura:{" "}
            {units.temperature === "Celsius"
              ? Math.round(weather.temperature)
              : Math.round((weather.temperature * 9) / 5 + 32)}
            {units.temperature === "Celsius" ? "°C" : "°F"}
          </p>
          <p>
            Osjećaj:{" "}
            {units.temperature === "Celsius"
              ? Math.round(weather.feelsLike)
              : Math.round((weather.feelsLike * 9) / 5 + 32)}
            {units.temperature === "Celsius" ? "°C" : "°F"}
          </p>
          <p>Vlaga: {weather.humidity}%</p>
          <p>
            Padaline:{" "}
            {units.precipitation === "mm"
              ? Math.round(weather.precipitation)
              : Math.round(weather.precipitation * 25.4)}{" "}
            {units.precipitation}
          </p>
          <p>
            Vjetar:{" "}
            {units.windspeed === "km/h"
              ? Math.round(weather.wind)
              : Math.round(weather.wind * 1.60934)}{" "}
            {units.windspeed}
          </p>
          <p>
            Šifra vremena: {weather.weatherCode}{" "}
            <img
              className="weathericon"
              src={getWeatherIcon(weather.weatherCode)}
              alt="Weather Icon"
            />
          </p>
        </div>
      )}
    </div>
  );
}
