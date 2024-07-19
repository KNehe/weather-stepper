import { useState, useEffect } from 'react';
import { getLocation, fetchWeatherData } from './weatherAPI';

export const useWeather = (endpoint, additionalParams = '') => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getLocation();
        const data = await fetchWeatherData(location.lat, location.long, endpoint, additionalParams);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [endpoint, additionalParams]);

  return { weatherData, error };
};