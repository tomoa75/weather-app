import { getWeatherIcon } from "../getWeatherIcon";

export default function MainDiv({ weather, loading, error, units }) {
  return (
    <div className="current-weather">
      {loading && <p>Učitavanje...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <>
          {" "}
          {/* Koristimo Fragment da grupiramo elemente bez dodavanja novih divova u DOM */}
          <div className="center-view">
            <div>
              <h3>
                {weather.city}, {weather.country}
              </h3>
              <p>
                {new Date().toLocaleDateString("en-EN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="temperature">
              <img
                className="weathericon" // Dodao sam klasu koju imaš u CSS-u
                src={getWeatherIcon(weather.weatherCode)}
                alt="Weather Icon"
              />
              <span>
                {units.temperature === "Celsius"
                  ? Math.round(weather.temperature)
                  : Math.round((weather.temperature * 9) / 5 + 32)}
                °
              </span>
            </div>
          </div>
          <div className="details">
            <div className="feels-like">
              <p>Feels Like</p>
              <span>
                {units.temperature === "Celsius"
                  ? Math.round(weather.feelsLike)
                  : Math.round((weather.feelsLike * 9) / 5 + 32)}
                {units.temperature === "Celsius" ? "°C" : "°F"}
              </span>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <span>{weather.humidity}%</span>
            </div>
            <div className="wind">
              <p>Wind</p>
              <span>
                {units.windspeed === "km/h"
                  ? Math.round(weather.wind)
                  : Math.round(weather.wind * 1.60934)}{" "}
                {units.windspeed}
              </span>
            </div>
            <div className="precipitation">
              <p>Precipitation</p>
              <span>
                {units.precipitation === "mm"
                  ? Math.round(weather.precipitation)
                  : Math.round(weather.precipitation * 25.4)}{" "}
                {units.precipitation}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
