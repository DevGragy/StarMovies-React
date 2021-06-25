import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/listofmovies.css";

function ListOfFavourites(props) {
  const FavouriteProp = props.favouriteProp;
  return (
    <>
      {props.favourite.map((favourite, index) => (
        <div className="image-container d-flex m-2 justify-content-start">
          <Link to={`movies/${favourite.imdbID}`}>
            <img
              src={
                favourite.Poster !== "N/A"
                  ? favourite.Poster
                  : "not_available.jpg"
              }
              alt={favourite.Title}
            ></img>
          </Link>
          {favourite.Poster === "N/A" ? (
            <div className="overlay_2 d-flex d-flex align-items-center justify-content-center">
              <p>{favourite.Title}</p>
            </div>
          ) : null}
          <div
            onClick={() => props.removeFavourite(favourite)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteProp />
          </div>
        </div>
      ))}
    </>
  );
}

ListOfFavourites.propTypes = {
  favourite: PropTypes.array.isRequired,
};

export default ListOfFavourites;
