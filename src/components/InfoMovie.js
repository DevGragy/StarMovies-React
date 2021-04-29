import React from "react";
import { Link } from "react-router-dom";

function InfoMovie(props) {
    const [movies, setMovies] = React.useState({ Title: "", Poster: "" });
    const id = props.match.params.id;

    React.useEffect(
        function () {
            const getMovies = async () => {
                const response = await fetch(`${props.url}&i=${id}`);
                const data = await response.json();

                setMovies(data);
            };

            getMovies();
        },
        [id, props.url]
    );

    return (
        <div className="main-card-error d-flex justify-content-center align-items-center">
            <div class="card my-5" style={{ width: 18 + "rem" }}>
                <div class="card-header">
                    <h1>{movies.Title}</h1>
                </div>
                <div class="card-body">
                    <img src={movies.Poster} alt="Movie"></img>
                </div>
                <div class="card-footer">
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}

export default InfoMovie;
