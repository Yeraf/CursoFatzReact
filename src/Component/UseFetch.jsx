import React, {useEffect,useState} from 'react';
function UseFetch () {

  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data))

  return (
    <div>

    </div>
  )
}
export default UseFetch;