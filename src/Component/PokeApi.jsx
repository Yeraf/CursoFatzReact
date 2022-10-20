import React, { useEffect, useState } from "react";
import "../CSS/css/OpenWeatherMap.css";

function PokeApi({newLocation}) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div className="container">
      <h3>OpenWeatherMap</h3>
      <form onSubmit={onsubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary input-group-text" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PokeApi;
