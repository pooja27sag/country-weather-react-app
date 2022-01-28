import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Country from "./components/Country";
import { v4 as uuidv4 } from "uuid";
import Wheather from "./components/Wheather";
import { Switch, Route } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);
  useEffect(() => {
  }, [countries]);

  const url = `https://restcountries.com/v3.1/name/${query}`;

  const getData = async () => {
    const result = await Axios.get(url);
    const data = result.data;

    setCountries(result.data);

  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1> Search The Country </h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter country Name"
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="search" />
      </form>

      <div>
        {countries && countries.length > 0 ? (
          countries.map((data) => {
            return (
              <div className="country" key={uuidv4()}>
                <h2>Name:{data.name.common}</h2>
                <h2>Capital:{data.capital}</h2>

                <h2>population :{data.population}</h2>
                <h2>continents :{data["continents"][0]}</h2>
                <img src={data.flags.png} alt={data.name.common} />
                <h2>languages :{data.languages.hin}</h2>
                <h2>Lating :{data["capitalInfo"]["latlng"][0]},{data["capitalInfo"]["latlng"][1]}</h2>
                <h2>Map : <a href={data.maps.googleMaps} target="_blank" rel='noopener noreferrer'>Click Here</a></h2>
                <br /><br />
                <Wheather query={query} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
