import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  if (loading) return <p className="text-white text-sm">Loading weather...</p>;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;
  if (!weatherData) return <p className="text-gray-400 text-sm">No weather data available.</p>;

  const {
    name,
    main: { temp },
    weather,
  } = weatherData;

  return (
    <div
      className="
        fixed bottom-0 right-0 z-[1000]
        w-[180px] p-6
        bg-slate-900/0
        backdrop-blur-sm
        rounded-[25px]
        text-center
        font-sans text-white text-sm
        transition-all duration-300
        hover:shadow-lg
        md:block hidden
      "
    >
      <h3 className="text-white text-base mb-2">Weather in {name}</h3>
      <p className="text-white mb-1">Temperature: {temp} °C</p>
      <p className="text-white mb-0 capitalize">Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherModule;
