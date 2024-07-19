const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';


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

export const fetchWeatherData = async (lat, long, endpoint, additionalParams = '') => {
    const url = `${BASE_URL}/${endpoint}?key=${API_KEY}&q=${lat},${long}${additionalParams}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('An error occurred while fetching weather data');
    }
    return response.json();
};