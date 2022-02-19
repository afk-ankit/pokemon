import React, { useContext } from "react";
import FavouriteList from "./FavouriteList";
import { useStateValue } from "./StateProvider";

const Favourite = () => {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  if (basket) {
    return (
      <>
        {basket.map((item) => (
          <FavouriteList item={item} key={Math.random() * 10} />
        ))}
      </>
    );
  } else if (basket.length != 0) {
    return (
      <div>
        <h1>Please add in favourites to display your pokemon</h1>
      </div>
    );
  }
};

export default Favourite;
