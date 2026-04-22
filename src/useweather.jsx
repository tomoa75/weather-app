import { useState, useRef } from "react";

export function useWeather() {
  const timeoutRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);

  // 1. Cities

  const fetchCities = (city) => {
    if (!city.trim()) {
      setCandidates([]);
      setError("");
      return;
    }

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        // 👇 simulacija loadinga
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city,
          )}&count=4&language=en&format=json`,
        );

        if (!geoRes.ok) throw new Error("Geo API greška"); //geoResponse je objekt koji sadrži informacije o HTTP odgovoru, uključujući statusni kod i tijelo odgovora. Ako je statusni kod u rasponu 200-299, geoRes.ok će biti true, što znači da je zahtjev bio uspješan. Ako nije, bacit će se greška s porukom "Geo API greška".

        const geoData = await geoRes.json();
        console.log("GeoData", geoData);
        console.log("GeoData response", geoRes);

        setCandidates(geoData.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 400); // 👈 debounce delay
  };
  // 2. Weather
  const fetchWeather = async (selected) => {
    try {
      setLoading(true);
      setError("");

      const { latitude, longitude, name } = selected;

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weathercode&hourly=temperature_2m,relative_humidity_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,wind_speed_10m_max,weathercode&timezone=auto`,
      );

      const weatherData = await weatherRes.json();
      console.log("WeatherData", weatherData);
      //Podaci za dnevnu prognozu (ako su potrebni)
      console.log("test DAILY Max", weatherData.daily.temperature_2m_max);
      console.log("test DAILY Min", weatherData.daily.temperature_2m_min);
      console.log("Daily weathercode", weatherData.daily.weathercode);
      //Podaci za satnu prognozu
      console.log("test HOURLY Temp", weatherData.hourly.temperature_2m);
      console.log("test HOURLY", weatherData.hourly);

      setWeather({
        city: name,
        country: selected.country,
        temperature: weatherData.current.temperature_2m,
        feelsLike: weatherData.current.apparent_temperature,
        humidity: weatherData.current.relative_humidity_2m,
        precipitation: weatherData.current.precipitation,
        wind: weatherData.current.wind_speed_10m,
        weatherCode: weatherData.current.weathercode,
      });

      setDaily({
        time: weatherData.daily.time,
        temperature_2m_max: weatherData.daily.temperature_2m_max,
        temperature_2m_min: weatherData.daily.temperature_2m_min,
        weathercode: weatherData.daily.weathercode,
      });
      setHourly({
        time: weatherData.hourly.time,
        temperature_2m: weatherData.hourly.temperature_2m,
        weathercode: weatherData.hourly.weathercode,
      });

      setCandidates([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    weather,
    loading,
    error,
    daily,
    hourly,
    fetchCities,
    fetchWeather,
    candidates,
    setCandidates,
  };
}
