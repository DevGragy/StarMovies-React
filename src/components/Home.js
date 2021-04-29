import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import InputSearch from "./InputSearch";
import MovieTitle from "./MovieTitle";
import ListOfMovies from "./ListOfMovies";

function Home(props) {
    return (
        <div className="container-fluid star-movies">
            <Header></Header>
            <InputSearch
                search={props.search}
                setSearch={props.setSearch}
            ></InputSearch>
            <MovieTitle header="Search"></MovieTitle>
            <div className="row p-3">
                <ListOfMovies movies={props.movies}></ListOfMovies>
            </div>

            <MovieTitle header="Favourites"></MovieTitle>
        </div>
    );
}

Home.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
};

export default Home;
