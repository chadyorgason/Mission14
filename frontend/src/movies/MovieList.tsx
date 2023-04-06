import { useEffect, useState } from "react";
import { Movie } from "../types/movies";
import { Link } from "react-router-dom";

//MovieList function
function MovieList1() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  //get json from here
  useEffect (() => {
    const fetchMovies = async () => {
        const rsp = await fetch("https://localhost:4000/movie");
        const temp = await rsp.json();
        console.log(temp);
        setMovieData(temp);
    };

  fetchMovies();
  }, []);

  //links at the top and table
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
        <h1>Joel Hilton's Movie Collection:</h1>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList1;
