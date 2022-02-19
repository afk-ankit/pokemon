import React from "react";
import { useStateValue } from "./StateProvider";

const FavouriteList = ({ item }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(item.id);
  let removefav = () => {
    dispatch({
      type: "REMOVE_BASKET",
      data: {
        name: item.name,
        img: item.img,
        id: item.id,
      },
    });
  };

  return (
    <div className="card">
      <h1>{item.name}</h1>
      <h3>{item.id}</h3>
      <img src={item.img} alt="" />
      <button onClick={removefav}>Remove from fav</button>
    </div>
  );
};

export default FavouriteList;
