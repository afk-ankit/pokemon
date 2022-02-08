import React, { useEffect } from "react";
import { useState } from "react";
import './Card.css'

const Card = ({ item }) => {
  let [source, setsource] = useState(0);
  //   console.log(item);
  useEffect(() => {
    fetch(item.url)
      .then((data) => data.json())
      .then((json) => setsource(json));
  }, []);

  console.log(source);
  return (
    <div className="card">
      {source && (
        <>
          <h1>{item.name}</h1>
          <h3>{source.id}</h3>
          <img src={source.sprites.other.dream_world.front_default} alt="" />
          <button>Add to favourite</button>
        </>
      )}
    </div>
  );
};

export default Card;
