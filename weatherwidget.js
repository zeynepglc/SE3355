import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/weatherAPI";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetchWeatherData().then((data) => setWeather(data));
  }, []);

  if (weather.length === 0) return <div>Hava durumu yükleniyor...</div>;

  return (
    <div className="weather-widget">
      <h3>İzmir</h3>
      <div className="weather-days">
        {weather.map((w, i) => (
          <div className="weather-day" key={i}>
            <div className="day">{w.day}</div>
            <div className="icon">{w.icon}</div>
            <div className="temp">{w.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
