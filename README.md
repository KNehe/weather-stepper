# Weather Stepper App

This application is a basic implementation of a UI Stepper component using React and Django.
The React app makes api requests to the Django server to fetch weather data

## Set Up instructions

1. Clone the repository: 
`cd weather-stepper`
2. Navigate to the project directory:
`cd weather-stepper`
3. Create a `.env` file in the root directory and add the following:
```
WEATHER_API_KEY=your_api_key_here
SECRET_KEY=secret
```
- You can get a *WEATHER_API_KEY* from your dashboard at [weatherapi](https://www.weatherapi.com/)
- Use [djecrety](https://djecrety.ir/) to create the *SECRET_KEY*
4. Ensure you have [docker](https://www.docker.com/products/docker-desktop/) installed
5. Run `docker-compose up --build` or `sudo docker-compose up --build`. Face a challenge? [Here's a good start](https://stackoverflow.com/questions/66912085/why-is-docker-compose-failing-with-error-internal-load-metadata-suddenly)
6. Visit. `http://localhost:3000`