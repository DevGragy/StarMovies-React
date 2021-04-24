import React from "react";
import "../css/listofmovies.css";

function ListOfMovies(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex m-2">
                    <img src={movie.Poster} alt="Movie"></img>
                </div>
            ))}
        </>
    );
}

export default ListOfMovies;
