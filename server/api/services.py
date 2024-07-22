import requests
from django.core.cache import cache
from django.conf import settings
from requests.exceptions import RequestException


BASE_URL = 'http://api.weatherapi.com/v1'

def fetch_current_weather(lat, long):
    cache_key = f'weather_{lat}_{long}'
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data
    
    try:
        url = f"{BASE_URL}/current.json?key={settings.WEATHER_API_KEY}&q={lat},{long}"
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        cache.set(cache_key, data, 600)
        return data
    except RequestException as e:
        raise Exception(f"Error fetching weather data: {str(e)}")

def fetch_forecast(lat, long):
    cache_key = f'forecast_{lat}_{long}'
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data
    try:
        url = f"{BASE_URL}/forecast.json?key={settings.WEATHER_API_KEY}&q={lat},{long}&days=2"
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        
        cache.set(cache_key, data, 600)
        return data
    except RequestException as e:
        raise Exception(f"Error fetching forecast data: {str(e)}")