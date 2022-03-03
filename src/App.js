import React, { useEffect, useState } from "react";
import Cardlist from "./components/Cardlist";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fav from "./components/Fav";
import Favourite from "./components/Favourite";
import Loading from "./components/Loading";

function App() {
  const [data, setdata] = useState(0);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=102";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        setloading(true);
      });
  }, []);

  return loading ? (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/pokemon" element={<Cardlist data={data} />} />
          <Route path="/search" element={<Fav />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>
      </div>
    </Router>
  ) : (
    <Loading />
  );
}

export default App;
