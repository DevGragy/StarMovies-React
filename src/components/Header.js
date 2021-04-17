import React from "react";
import "../css/header.css";

function MovieHeader(props) {
    return (
        <div className="col header-movies">
            <h1>{props.header}</h1>
        </div>
    );
}

export default MovieHeader;
