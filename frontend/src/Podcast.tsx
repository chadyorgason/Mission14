import React from "react";
//import logo from "./logo.svg";
import "./main/App.css";
//import TopBanner from "./Blah";
//import MovieList from "./Movies";
import { Link } from "react-router-dom";

function Podcast() {
  return (
    <>
    <div>
        <ul className="list-group list-group-flush">
          <>
            <Link to="/" className="list-group-item">
              Home
            </Link>
          </>
          <>
            <Link to="/podcast" className="list-group-item">
              Podcast
            </Link>
          </>
          <>
            <Link to="/movies" className="list-group-item">
              Movies List
            </Link>
          </>
        </ul>
      </div>
    <div className="App">
        <Link to="https://baconsale.com/">
            <h1>Baconsale</h1>
        </Link>    
      </div>
    </>
  );
}

export default Podcast;