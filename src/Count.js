import React, { useState,useReducer } from "react";



const initialstate=0;

const reducer=(state,action)=>{
    return state;
}

const Count = () => {

    // const [list,setList]=useState(0)

    // const increment=()=>{
    //     setList(prev=>prev+1)
    // }

   const [state,dispatch]= useReducer(reducer,initialstate);


  return (
    <div>
      <h2></h2>
      <button>inc</button>
      <button>dec</button>
    </div>
  );
};

export default Count;
