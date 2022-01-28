import React from "react";

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const Wheather = (query) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    console.log("weather details" + JSON.stringify(weather));
  }, [weather]);

  const weather_url = `http://api.weatherstack.com/current?access_key=575a5cec6d4d38354039e1fcb72d3030&query=${query.query}`;

  const getWeather = async () => {
    let weather_result = [];
    let weather_api_result;
    weather_api_result = await Axios.get(weather_url);
    weather_result.push(weather_api_result);
    setWeather(weather_result);


  };

  return (
    <div>
      <div className="country">
        <button className="button" onClick={getWeather}>Get Weather</button>
      </div>
      <br />
      <br />

      {
        weather.length > 0 ? (
          weather.map((details) => {
            return (
              <div className="country" key={uuidv4()}>
                <h2 className="h4">
                  Location : {details.data.location.country}-{details.data.location.name}
                </h2>
                <h2>Current Wind Speed : {details.data.current.wind_speed}</h2>
                <h2>Current Wind Degree : {details.data.current.wind_degree}</h2>
                <h2>Current Wind Dir : {details.data.current.wind_dir}</h2>
                <h2>Current Pressure : {details.data.current.pressure}</h2>
                <h2>Current Humidity : {details.data.current.humidity}</h2>
                <h2>Current Weather Descriptions : {details.data.current.weather_descriptions}</h2>
              </div>
            );
          })
        ) : (
          <div> </div>
        )
      }
    </div >
  );
};

export default Wheather;
