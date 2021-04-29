import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/listofmovies.css";

function ListOfMovies(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex m-2 justify-content-start">
                    <Link to={`details/${props.id}`}>
                        <img src={movie.Poster} alt="Movie"></img>
                    </Link>
                </div>
            ))}
        </>
    );
}

ListOfMovies.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default ListOfMovies;
