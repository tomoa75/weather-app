export default function DailyForecast({ daily }) {
  return (
    <div className="daily-forecast">
      <h3>Daily Forecast</h3>
      <div className="daily-forecast-list">
        {daily.map((day, index) => (
          <div key={index} className="daily-forecast-item">
            <p>{day.date}</p>
            <img src={day.icon} alt={day.description} />
            <p>Max: {day.maxTemp}</p>
            <p>Min: {day.minTemp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
