import React, { useEffect, useState } from "react";
import { Movie } from "../../../typings";
import MovieItem from "./MovieItem";
import "./Movies.css";
import { Link } from "react-router-dom";

const moviesMock: Movie[] = [
  {
    name: "Titanic",
    director: {
      id: 1,
      name: "James Cameron",
      born: new Date("1954-08-16"),
    },
    actors: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        born: new Date("1974-11-11"),
      },
      {
        id: 2,
        name: "Kate Winslet",
        born: new Date("1975-11-11"),
      },
    ],
    year: 1997,
  },
  {
    name: "Titanic2",
    director: {
      id: 2,
      name: "James Cameron",
      born: new Date("1954-08-16"),
    },
    actors: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        born: new Date("1974-11-11"),
      },
      {
        id: 2,
        name: "Kate Winslet",
        born: new Date("1975-11-11"),
      },
    ],
    year: 1997,
  },
];

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = () => {
    const fetchedMovies = moviesMock;
    setMovies(fetchedMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies">
      <h1>Movies</h1>
      <Link to="/createMovie">Add Movie</Link>
      <div className="details">
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
