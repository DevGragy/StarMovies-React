import React from "react";
import { Link } from "react-router-dom";

function InfoMovie(props) {
    const [movies, setMovies] = React.useState({ title: "", details: [] });
    const id = props.match.params.id;

    React.useEffect(
        function () {
            const getMovies = async () => {
                const response = await fetch(`${props.url}/${id}`);
                const data = await response.json();

                setMovies(data);
            };

            getMovies();
        },
        [id, props.url]
    );

    return (
        <>
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h1>{movies.Title}</h1>
                </div>
                <div class="card-body">
                    {movies.details.map((detail, i) => (
                        <p key={id} class="card-text">
                            {detail}
                        </p>
                    ))}
                </div>
                <div class="card-footer">
                    <Link to="/">Home</Link>
                </div>
            </div>
        </>
    );
}

export default InfoMovie;
