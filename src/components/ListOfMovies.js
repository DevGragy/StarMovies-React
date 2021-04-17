import React from "react";
import "../css/listofmovies.css";

const ListOfMovies = (props) => {
    return (
        <>
            {props.movies.map((movies, index) => (
                <div className="image-container d-flex m-2">
                    <img src={movies.image} alt="Movie"></img>
                </div>
            ))}
        </>
    );
};

export default ListOfMovies;
