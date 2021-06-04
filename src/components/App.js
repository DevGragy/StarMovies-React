import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/index.css";
import Container from "@material-ui/core/Container";
import Home from "./Home";
import Error404 from "./Error404";
import InfoMovie from "./InfoMovie";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import axios from 'axios';

const URL = `http://www.omdbapi.com/?s=&apikey=e8d51da1`;

function App(props) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [favourite, setFavourite] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const fetchAPI = async (search) => {
        const URL = `https://www.omdbapi.com/?s=${search}&apikey=e8d51da1`;
        const response = await fetch(URL);
        const responseJSON = await response.json();

        if (responseJSON.Search) return setMovies(responseJSON.Search);
    };

    const addFavourite = (movie) => {
        const newFavList = [...favourite, movie];
        setFavourite(newFavList);
    };

    const removeFavourite = (movie) => {
        const newFavList = favourite.filter(
            (fav) => fav.imdbID !== movie.imdbID
        );

        setFavourite(newFavList);
    };

    useEffect(() => {
        fetchAPI(search);
    }, [search]);

    const handleSubmitSignUp = (e) => {  
        e.preventDefault();      
    axios
      .post("https://smlogin.herokuapp.com/signup", {email: email, password: password})
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }

    const handleSubmitSignIn = (e) => {  
        e.preventDefault();      
    axios
      .post("https://smlogin.herokuapp.com/signin", {email: email, password: password})
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
      
    return (
        <Container>
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
                                favourite={favourite}
                                setFavourite={setFavourite}
                                addFavourite={addFavourite}
                                removeFavourite={removeFavourite}
                            />
                        )}
                    ></Route>{" "}
                    <Route
                        path="/movies/:id"
                        render={(props) => (
                            <InfoMovie {...props} url={URL}>
                                {" "}
                            </InfoMovie>
                        )}
                    ></Route>
                    <Route 
                        path="/signin"
                        render={(props) => (
                            <SignIn
                            {...props} 
                            email={email} 
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleSubmitSignIn={handleSubmitSignIn}
                            >
                            </SignIn>
                        )}
                    ></Route>
                    <Route
                        path="/signup"
                        render={(props) => (
                            <SignUp
                            {...props} 
                            email={email} 
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword} 
                            handleSubmitSignUp={handleSubmitSignUp}
                            >
                            </SignUp>
                        )}>
                        
                    </Route>
                    <Route path="*" component={Error404}>
  
                    </Route>
                </Switch>{" "}
            </Router>{" "}
        </Container>
    );
}

export default App;
