import React, { useState, useEffect } from "react";
import "../css/index.css";
import Header from "./Header";
import InputSearch from "./InputSearch";
import MovieTitle from "./MovieTitle";
import ListOfMovies from "./ListOfMovies";

function App(props) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const fetchAPI = async (search) => {
        const URL = `http://www.omdbapi.com/?s=${search}&apikey=e8d51da1&s`;
        const response = await fetch(URL);
        const responseJSON = await response.json();

        if (responseJSON.Search) return setMovies(responseJSON.Search);
    };

    useEffect(() => {
        fetchAPI(search);
    }, [search]);

    return (
        <div className="container-fluid star-movies">
            <Header></Header>
            <InputSearch search={search} setSearch={setSearch}></InputSearch>
            <MovieTitle header="Search"></MovieTitle>
            <div className="row py-3">
                <ListOfMovies movies={movies}></ListOfMovies>
            </div>

            <MovieTitle header="Favourites"></MovieTitle>
        </div>
    );
}

export default App;
