import { useState } from "react";
import data from "./MovieData.json";
import { Link } from "react-router-dom";

const MovieStuff = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(MovieStuff);

  const addMovie = () =>
    setListOMovies([
      ...MovieStuff,
      {
        Category: "Action/Adventure",
        Title: "Batman Returns",
        Year: 1992,
        Director: "Tim Burton",
        Rating: "PG-13",
        Edited: "No",
      },
    ]);

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
      <div>
        <h1>Joel Hilton's Movie Collection:</h1>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Category}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
