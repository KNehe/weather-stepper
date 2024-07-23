const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const fetchWeatherData = async (lat, long) => {
  const response = await fetch(`${API_BASE_URL}/weather/?lat=${lat}&long=${long}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'An error occurred while fetching weather data');
  }
  return response.json();
};

export const fetchForecastData = async (lat, long, days) => {
  const response = await fetch(`${API_BASE_URL}/forecast/?lat=${lat}&long=${long}&days=${days}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'An error occurred while fetching forecast data');
  }
  return response.json();
};

export const getLocation = () => {
    return new Promise((resolve, reject) =>{
        navigator.geolocation.getCurrentPosition(
            (position) => resolve({
                lat: position.coords.latitude,
                long: position.coords.longitude,
            }),
            (error) =>  reject(error.message)
        );
    });
}