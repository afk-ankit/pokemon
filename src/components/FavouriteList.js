import React from "react";

const FavouriteList = ({ item }) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <img src={item.img} alt="" />
    </div>
  );
};

export default FavouriteList;
