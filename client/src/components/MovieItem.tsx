import React from "react";
import { Actor, Movie } from "../../../typings";
import { Link } from "react-router-dom";
const Poster = require("../assets/images/placeholder-poster.png");

interface MovieItemProps {
  movie: Movie;
}
const MovieItem = ({ movie }: MovieItemProps) => {
  const listActors = (actors: Actor[]) => {
    return actors.map((actor) => (
      <Link
        key={actor.id}
        to={`/actors/${actor.id}`}
        className="gridItemLink gridItemLinkColorShadeBlue"
      >
        {actor.name}
      </Link>
    ));
  };
  return (
    <div className="contentGridItem">
      <Link to="#" className="posterLink">
        <img src={Poster} alt="poster" className="contentGridItemImg" />
      </Link>
      <div className="contentGridItemText">
        <h3 className="heading3">
          <Link to="#" className="gridItemLink gridItemLinkColorGrey">
            {movie.name}
          </Link>
        </h3>
        <h4 className="heading4">
          <Link
            to={`/directors/${movie.director.id}`}
            className="gridItemLink gridItemLinkColorShadeBlue"
          >
            {movie.year} - {movie.director.name}
          </Link>
        </h4>
        <h4 className="heading4">
          <span className="detail">
            <strong>Starring:</strong> {listActors(movie.actors)}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default MovieItem;
