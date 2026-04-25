import { useState } from "react";
import { useWeather } from "./useweather";
import InputPlace from "./components/InputPlace";
import Header from "./components/Header";
import DropdownHeader from "./components/DropdownHeader";
import MainDiv from "./components/MainDiv";
import Error from "./components/Error";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import "./App.css";
const UNIT_PRESETS = {
  metric: {
    temperature: "Celsius",
    windspeed: "km/h",
    precipitation: "mm",
  },
  imperial: {
    temperature: "Fahrenheit",
    windspeed: "mph",
    precipitation: "inches",
  },
};

function App() {
  const [system, setSystem] = useState("metric");
  const [units, setUnits] = useState(UNIT_PRESETS.metric);
  const [isOpen, setIsOpen] = useState(false);
  const weatherData = useWeather();

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropdownHeader
          system={system}
          setSystem={setSystem}
          units={units}
          setUnits={setUnits}
          UNIT_PRESETS={UNIT_PRESETS}
        />
      )}
      {weatherData.error ? (
        <Error error={weatherData.error} />
      ) : (
        <>
          <h1 className="title">How is the sky looking today?</h1>

          <InputPlace {...weatherData} />
          <div className="main-container">
            <div className="left-side">
              <MainDiv
                weather={weatherData.weather}
                loading={weatherData.loading}
                error={weatherData.error}
                units={units}
                country={weatherData.country}
              />

              <DailyForecast daily={weatherData.daily} units={units} />
            </div>

            <HourlyForecast hourly={weatherData.hourly} units={units} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
