import React, { useEffect, useState } from "react";
import { Movie } from "../../../typings";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav/Nav";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const fetchedMovies: Movie[] = (
        await axios.get("http://localhost:4000/movies")
      ).data;

      setMovies(fetchedMovies);
    } catch (error: any) {
      console.error("fetchMovie error: ", error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <Nav />
      <main>
        <h2 className="heading2">Movies</h2>
        <button className="btn btn-ghost">edit</button>
        <button className="btn btn-warning">add</button>
        <button className="btn btn-success">create</button>
        <button className="btn btn-danger">delete</button>
        <button className="btn btn-neutral">watch</button>

        <h5 className="heading5">
          Sort by: <span className="sort-select">name</span>
          <span className="sort-arrow sort-arrow-active">&uarr;</span>
          <span className="sort-arrow">&darr;</span>
        </h5>

        <p className="regularP">
          LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot sit amet so
          <Link className="regularLink" to="#">
            {" "}
            dot iso ewlr
          </Link>{" "}
          LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot sit amet so
          dot iso ewlr LOREM IPSUM dot sit amet so dot iso ewlr LOREM IPSUM dot
          sit amet so dot iso ewlr
        </p>

        <Link className="regularLink" to="/createMovie">
          Add Movie
        </Link>
        <div className="contentGrid">
          {movies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Movies;
