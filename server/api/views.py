from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import fetch_current_weather, fetch_forecast

class WeatherView(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        long = request.query_params.get('long')
        if not lat or not long:
            return Response({"error": "Latitude and longitude are required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            weather_data = fetch_current_weather(lat, long)
            return Response(weather_data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ForecastView(APIView):
    def get(self, request):
        lat = request.query_params.get('lat')
        long = request.query_params.get('long')
        if not lat or not long:
            return Response({"error": "Latitude and longitude are required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            forecast = fetch_forecast(lat, long)
            return Response(forecast)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)