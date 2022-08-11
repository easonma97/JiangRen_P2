import WeatherAPITable from "./components/weatherAPITable";

function App() {
  return (
    <div className="App">
      <WeatherAPITable data={Data}/>
    </div>
  );
}

const Data = {
  "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1660129597,
      "localtime": "2022-08-10 12:06"
  },
  "current": {
      "last_updated_epoch": 1660129200,
      "last_updated": "2022-08-10 12:00",
      "temp_c": 33.3,
      "temp_f": 78.8,
      "is_day": 1,
      "condition": {
          "text": "Sunny",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
          "code": 1000
      },
      "wind_mph": 10.5,
      "wind_kph": 16.9,
      "wind_degree": 80,
      "wind_dir": "E",
      "pressure_mb": 1026.0,
      "pressure_in": 30.3,
      "precip_mm": 0.0,
      "precip_in": 0.0,
      "humidity": 45,
      "cloud": 0,
      "feelslike_c": 25.9,
      "feelslike_f": 78.5,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 7.0,
      "gust_mph": 8.5,
      "gust_kph": 13.7
  }
}

export default App;
