import React, { useEffect, useState } from "react";

function Fav() {
  const [data, setData] = useState();
  const [pokemon, setPokemon] = useState();
  const [url2,setUrl2]=useState(1)

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/"; 
    fetch(`${url}${url2}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url2]);

  const getPokemon = (e) => {
    if (e.target.value && !0) {
      setPokemon(e.target.value);
    } 
   
    // console.log(e.target.value);
  };

  return (
    <div>
      {data && (
        <>
          <input onChange={getPokemon} type="text" />
          <button onClick={()=>setUrl2(pokemon)} type="submit">Search</button>
          <div className="card">
            <h1>{data.name}</h1>
            <h3>{data.id}</h3>
            <img src={data.sprites.other.dream_world.front_default} alt="" />
          </div>
          {/* <h2>{url2}</h2> */}
        </>
      )}
    </div>
  );
}

export default Fav;
