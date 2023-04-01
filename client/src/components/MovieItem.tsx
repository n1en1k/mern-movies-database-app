import React from "react";
import { Actor, Movie } from "../../../typings";
import "./MovieItem.css";

interface MovieItemProps {
  movie: Movie;
}
const MovieItem = ({ movie }: MovieItemProps) => {
  const listActors = (actors: Actor[]) => {
    return actors.map((actor) => actor.name).join(", ");
  };
  return (
    <div className="movie-item">
      <span className="movie-name">{movie.name}</span>
      <span className="detail">
        <strong>Year:</strong> {movie.year}
      </span>
      <span className="detail">
        <strong>Director:</strong> {movie.director.name}
      </span>
      <span className="detail">
        <strong>Starring:</strong> {listActors(movie.actors)}
      </span>
    </div>
  );
};

export default MovieItem;
