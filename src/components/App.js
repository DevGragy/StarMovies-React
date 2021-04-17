import React, { useState } from "react";
import "../css/index.css";
import Header from "./Header";
import MovieTitle from "./MovieTitle";
import ListOfMovies from "./ListOfMovies";

const App = () => {
    const [movies, setMovies] = useState([
        {
            title: "The Godfather",
            year: "1972",
            type: "Crime, Drama",
            image:
                "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d70d324d3a00bd44c1d4360570698325f06cdce0daf1e22ff8244366a47b822d._UR1920,1080_RI_SX329_.jpg",
        },
        {
            title: "The Godfather: Part II",
            year: "1974",
            type: "Crime, Drama",
            image:
                "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/47ca6cc8ff17632d854ff3ad931185662e552d0a64006e4e9099dfe97301759b._UR1920,1080_RI_SX329_.jpg",
        },
        {
            title: "The Godfather: Part III",
            year: "1990",
            type: "Crime, Drama",
            image:
                "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/paramount-32318-Full-Image_GalleryCover-en-US-1484001254171._UR1920,1080_RI_SX329_.jpg",
        },
    ]);

    useState({ setMovies });

    return (
        <div className="container-fluid star-movies">
            <Header></Header>
            <MovieTitle header="Movies"></MovieTitle>
            <div className="row py-3">
                <ListOfMovies movies={movies}></ListOfMovies>
            </div>

            <MovieTitle header="Favourites"></MovieTitle>
        </div>
    );
};

export default App;
