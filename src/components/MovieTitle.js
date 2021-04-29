import React from "react";

function MovieTitle(props) {
    return (
        <div className="col header-movies">
            <h3>{props.header}</h3>
        </div>
    );
}

export default MovieTitle;
