
import './App.css';


function App() {

  const data={"request":{"type":"City","query":"New Delhi, India","language":"en","unit":"m"},"location":{"name":"New Delhi","country":"India","region":"Delhi","lat":"28.600","lon":"77.200","timezone_id":"Asia\/Kolkata","localtime":"2022-01-12 08:58","localtime_epoch":1641977880,"utc_offset":"5.50"},"current":{"observation_time":"03:28 AM","temperature":9,"weather_code":248,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0007_fog.png"],"weather_descriptions":["Shallow Fog"],"wind_speed":7,"wind_degree":250,"wind_dir":"WSW","pressure":1018,"precip":0,"humidity":100,"cloudcover":50,"feelslike":9,"uv_index":4,"visibility":1,"is_day":"yes"}};

  
  return (
    <div className="App">
      <h1>Location : {data.location.country}-{data.location.name}</h1>
      <h1>current wind speed : {data.current.wind_speed}</h1>
      <h1>current  wind degree : {data.current.wind_degree}</h1>
      <h1>current  wind dir : {data.current.wind_dir}</h1>
      <h1>current  humidity : {data.current.humidity}</h1>
      <h1>current  humidity : {data.current.humidity}</h1>
      <h1>current  temperature : {data.current.temperature}</h1>
    </div>
  );
}

export default App;