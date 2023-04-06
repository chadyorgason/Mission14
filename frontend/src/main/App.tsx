import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import TopBanner from "../Blah";
//import MovieList from "../Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcast from "../Podcast";
import Home from "../Home";
import MovieList1 from "../movies/MovieList";

//function run on index.tsx
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home title="This is Joel's Movie Collection. Browse using the links" />
            }
          />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/movies" element={<MovieList1 />} />
        </Routes>
      </Router>
      {/*<TopBanner saying="Home" />
      <MovieList />*/}
      
    </div>
  );
}

export default App;
