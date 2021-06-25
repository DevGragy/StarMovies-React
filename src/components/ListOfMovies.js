import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/listofmovies.css";

function ListOfMovies(props) {
  const FavouriteProp = props.favouriteProp;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex m-2 justify-content-start">
          <Link to={`movies/${movie.imdbID}`}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "not_available.jpg"}
              alt={movie.Title}
            ></img>
          </Link>
          {movie.Poster === "N/A" ? (
            <div className="overlay_2 d-flex d-flex align-items-center justify-content-center">
              <p>{movie.Title}</p>
            </div>
          ) : null}
          <div
            onClick={() => props.addFavourite(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteProp />
          </div>
        </div>
      ))}
    </>
  );
}

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default ListOfMovies;
