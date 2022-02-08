import React, { StrictMode, useEffect, useState } from "react";
import Cardlist from "./components/Cardlist";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fav from "./components/Fav";

function App() {
  const [data, setdata] = useState(0);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=102";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
      });
  }, []);

  return (
   
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ data && <Cardlist data={data} />}/>
            <Route path="/fav" element={<Fav/>}/>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;

