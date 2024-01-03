import React, { useEffect, useState } from "react";
import { Movie } from "../../../typings";
import MovieItem from "./MovieItem";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
    <main>
      <h2 className="heading2">Movies</h2>

      <NavLink className="regularLink fr" to="/movies/createMovie">
        <button className="btn btn-success">create movie</button>
      </NavLink>

      <h5 className="heading5">
        Sort by: <span className="sort-select">name</span>
        <span className="sort-arrow sort-arrow-active">&uarr;</span>
        <span className="sort-arrow">&darr;</span>
      </h5>

      <div className="contentGrid">
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
