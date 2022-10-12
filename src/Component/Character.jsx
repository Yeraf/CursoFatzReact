import React from "react";

function Character({ characters = [] }) {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mt-4">
            <div className="card" style={{minWidth: "200px" , maxWidth: "250px"}}>
                <img src={item.image} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <hr/>
                    <p>Especie: {item.species}</p>
                    <p>Location: {item.location.name}</p>
                    <hr/>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Character;
