import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

function InfoMovie(props) {
    const [movies, setMovies] = React.useState({
        Title: "",
        Poster: "",
        Plot: "",
    });
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
        <Container>
            <div class="d-flex my-5 justify-content-center">
                <img src={movies.Poster} alt="Movie"></img>
                <div>
                    <h1>{movies.Title}</h1>
                    <p>{movies.Plot}</p>
                </div>
            </div>
            <Link to="/">Home</Link>
        </Container>
    );
}

export default InfoMovie;
