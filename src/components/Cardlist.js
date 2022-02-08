import React from 'react';
import Card from './Card';
import './Cardlist.css'

function Cardlist({data}) {
    // console.log(data)
    const {results}=data
  const pokemon=results.map(item=> < Card key={Math.random()*10} item={item}/>)  
  return <div className="cardlist">
      {
          pokemon
      }
      
  </div>;
}

export default Cardlist;
