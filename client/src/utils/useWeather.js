import { useState, useEffect } from 'react';
import { getLocation, fetchWeatherData, fetchForecastData } from './weatherAPI';


export const useWeather = (endpointTag) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getLocation();
        let result;
        if (endpointTag === 'weather') {
          result = await fetchWeatherData(location.lat, location.long);
        } else if (endpointTag === 'forecast') {
          result = await fetchForecastData(location.lat, location.long);
        }
        setWeatherData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [endpointTag]);

  return { weatherData, error };
};