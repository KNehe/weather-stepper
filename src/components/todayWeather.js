import React from 'react';
import { useWeather } from '../utils/useWeather';
import ErrorMessage from './errorMessage'
import Loader from './loader'

const WeatherForecast = () => {
    const { weatherData, error } = useWeather('weather');

    if (error) {
        return <ErrorMessage message={error}/>;
    }    

    if (!weatherData) {
        return <Loader message="Fetching today's weather data..."/>;
    }

    return (
        <div>
            <h3>Today's Weather</h3>
            <p>Location: {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</p>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>
                Condition: {weatherData.current.condition.text}
                <img width="40px"  height="40px" src={weatherData.current.condition.icon} alt="Weather icon" />
            </p>
        </div>
    );
}

export default WeatherForecast;
