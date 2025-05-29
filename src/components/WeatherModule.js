import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherModule.css';

const WeatherModule = ({ apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setError('Error getting geolocation');
            setLoading(false);
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, [apiKey]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>No weather data available.</p>;

  const {
    name,
    main: { temp },
    weather,
  } = weatherData;

  return (
    <div className="weather-module">
      <h3>Weather in {name}</h3>
      <p>Temperature: {temp} °C</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherModule;
