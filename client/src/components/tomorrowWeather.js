import React from 'react';
import { useWeather } from '../utils/useWeather.js';
import ErrorMessage from './errorMessage.js';
import Loader from './loader.js'

const TomorrowForecast = () => {
  const { weatherData, error } = useWeather('forecast', 2);

  if (error) {
    return <ErrorMessage message={error}/>;
  }

  if (!weatherData || !weatherData.forecast) {
    return <Loader message="Fetching tomorrow's weather data..."/>;
  }

  const tomorrowData = weatherData.forecast.forecastday[1];

  return (
    <div>
      <h3>Tomorrow's Weather Forecast</h3>
      <p>Date: {tomorrowData.date}</p>
      <p>Max Temperature: {tomorrowData.day.maxtemp_c}°C</p>
      <p>Min Temperature: {tomorrowData.day.mintemp_c}°C</p>
      <p>
        Condition: {tomorrowData.day.condition.text}
        <img width="40px" height="40px" src={tomorrowData.day.condition.icon} alt="Weather icon" />
      </p>
    </div>
  );
};

export default TomorrowForecast;