import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBanner from "../Blah";
import MovieList from "../Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcast from "../Podcast";
import Home from "../Home";

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
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
      {/*<TopBanner saying="Home" />
      <MovieList />*/}
    </div>
  );
}

export default App;
