import React, { useContext } from 'react'
import FavouriteList from './FavouriteList'
import { useStateValue } from "./StateProvider";

const Favourite = () => {

    const [{basket},dispatch]=useStateValue();


    console.log(basket)

  
    if(basket.length>0)
    {
        return (
            <>
            {
    
             basket.map(item=><FavouriteList item={item}/>)
            }
            </>
      )
    }
    else{
        return(
            <div>
                <h1>Please add in favourites to display your pokemon</h1>
            </div>
        )
    }

}

export default Favourite