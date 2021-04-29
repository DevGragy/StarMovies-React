import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import "../css/index.css";
import Home from "./Home";
import Error404 from "./Error404";
import InfoMovie from "./InfoMovie";

const URL = "`http://www.omdbapi.com/?s=&apikey=e8d51da1`";

function App(props) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const fetchAPI = async (search) => {
        const URL = `http://www.omdbapi.com/?s=${search}&apikey=e8d51da1`;
        const response = await fetch(URL);
        const responseJSON = await response.json();

        if (responseJSON.Search) return setMovies(responseJSON.Search);
    };

    useEffect(() => {
        fetchAPI(search);
    }, [search]);

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Home
                            {...props}
                            search={search}
                            setSearch={setSearch}
                            movies={movies}
                            setMovies={setMovies}
                        />
                    )}
                ></Route>
                <Route
                    path="/details/:id"
                    render={(props) => (
                        <InfoMovie {...props} url={URL}></InfoMovie>
                    )}
                ></Route>
                <Route path="*" component={Error404}></Route>
            </Switch>
        </Router>
    );
}

export default App;
