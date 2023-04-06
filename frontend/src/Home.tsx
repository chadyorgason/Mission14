import React from "react";
//import logo from "./logo.svg";
import "./main/App.css";
//import TopBanner from "./Blah";
//import MovieList from "./Movies";
import { Link } from "react-router-dom";

function Home(props: any) {
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
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="companyLogo" />
        </div>
        <div className="col-3">
        </div>
        <div className="col-3">
        </div>
        <div className="col-2">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="col-4">
        
      </div>
    </>
  );
}

export default Home;
