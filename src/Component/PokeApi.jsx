import React, {useEffect,useState} from "react";

function PokeApi() {

  const URL = "https://randomuser.me/api/";

  // const [useEffect, useState] = 

  fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data))

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokemon-container">

      </div>
        {/* <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div> */}
    </div>
  );
}

export default PokeApi;


// https://pokeapi.co/api/v2/pokemon/