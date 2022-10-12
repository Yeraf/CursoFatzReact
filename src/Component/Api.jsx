import React, {useEffect, useState} from "react";
import Character from "./Character";
import Pagination from "./Pagination";

function Api() {

  const [character, setCharacters] = useState([]);
  const [info, setinfo] = useState({});
  const Title = "Rick and Morty App";
  const InitialURL = "https://rickandmortyapi.com/api/character";

  const fechtCharacters = (url) => {
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.error(error));
  };

  const onPrevious = () => {
    fechtCharacters(info.prev);
  }

  const onNext = () => {
    fechtCharacters(info.next);
  }

  useEffect(() => {
    fechtCharacters(InitialURL);
  }, [])
  

  return (
    <div>
      <h1>{Title}</h1>
      <div className="container mt-5" >
        <Pagination prev={info.prev} next={info.next} onPrevios={onPrevious} onNext={onNext}/>
        <Character characters={character}></Character>
        <Pagination prev={info.prev} next={info.next} onPrevios={onPrevious} onNext={onNext}/>
      </div>
    </div>
  );
}

export default Api;
