export default function HourlyForecast({ hourly }) {
  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="hourly-forecast-list">
        {hourly.map((hour, index) => (
          <div key={index} className="hourly-forecast-item">
            <p>{hour.time}</p>
            <img src={hour.icon} alt={hour.description} />
            <p>{hour.temperature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
