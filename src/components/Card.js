import React, { useEffect } from "react";
import { useState } from "react";
import "./Card.css";
import { useStateValue } from "./StateProvider";

const Card = ({ item }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addtofav = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        img: source.sprites.other.dream_world.front_default,
        name: item.name,
        id: source.id,
      },
    });
  };
  // console.log(basket);

  let [source, setsource] = useState(0);
  //   console.log(item);
  useEffect(() => {
    fetch(item.url)
      .then((data) => data.json())
      .then((json) => setsource(json));
  }, []);

  // console.log(source);
  return (
    <div className="card">
      {source && (
        <>
          <h1>{item.name}</h1>
          <h3>{source.id}</h3>
          <img src={source.sprites.other.dream_world.front_default} alt="" />
          <button onClick={addtofav}>Add to favourite</button>
        </>
      )}
    </div>
  );
};

export default Card;
