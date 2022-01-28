import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Country = ({ data }, setSelectedCountry) => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  const url = `https://restcountries.com/v3.1/name/${query}`;

  const getData = async () => {
    const result = await Axios.get(url);
    const data = result.data;
    console.log(data);

    setCountries(result.data);

    console.log(result.data);
    console.log(countries);

    console.log("contries=  " + JSON.stringify(countries));
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
      <h1> Search The Country 🧐</h1>
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
            const {
              name,
              capital,
              population,
              continents,
              flags,
              languages,
              maps,
            } = data;

            return (
              <div className="country" key={uuidv4()}>
                <h2>Name:{data.name.common}</h2>
                <h2>Capital:{data.capital}</h2>

                <h2>population :{data.population}</h2>
                <h2>continents :{data["continents"][0]}</h2>
                <img src={data.flags.png} alt={data.name.common} />
                <h2>languages :{data.languages.hin}</h2>
                <h2>Lating :{data["latlng"][0]}</h2>
                <h2>{data["latlng"][1]}</h2>

                {/* <a href={data.map.googleMaps} target="_blank" rel='noopener noreferrer'>url</a> */}
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Country;
