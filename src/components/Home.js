import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Header from "./Header";
import InputSearch from "./InputSearch";
import MovieTitle from "./MovieTitle";
import ListOfMovies from "./ListOfMovies";
import AddToFavourite from "./AddToFavourite";
import RemoveFavourite from "./RemoveFavourite";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ListOfFavourite from "./ListOfFavourite";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {" "}
      {"Copyright © "}{" "}
      <Link color="inherit" to="/">
        StarMovies{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

const useStyles = makeStyles({
  divider: {
    background: "#98a2a8",
  },
});

function Home(props) {
  const classes = useStyles();

  return (
    <div className="star-movies">
      <Header history={props.history}></Header> <Title> </Title>{" "}
      <InputSearch
        search={props.search}
        setSearch={props.setSearch}
      ></InputSearch>{" "}
      <List>
        <Divider classes={{ root: classes.divider }} light={true} />{" "}
        <ListItem disableGutters={true}>
          <MovieTitle header="Search"> </MovieTitle>{" "}
        </ListItem>{" "}
        <ListItem>
          <Grid
            container
            spacing={2}
            direction="row"
            display="flex"
            justify="center"
            alignItems="center"
          >
            <ListOfMovies
              movies={props.movies}
              favouriteProp={AddToFavourite}
              addFavourite={props.addFavourite}
            ></ListOfMovies>{" "}
          </Grid>{" "}
        </ListItem>{" "}
        <Divider classes={{ root: classes.divider }} light={true} />{" "}
        <ListItem disableGutters={true}>
          <MovieTitle header="Favourites"> </MovieTitle>{" "}
        </ListItem>{" "}
        <ListItem>
          <Grid
            container
            spacing={2}
            direction="row"
            display="flex"
            justify="center"
            alignItems="center"
          >
            <ListOfFavourite
              favourite={props.favourite}
              favouriteProp={RemoveFavourite}
              removeFavourite={props.removeFavourite}
            ></ListOfFavourite>{" "}
          </Grid>{" "}
        </ListItem>{" "}
        <Divider classes={{ root: classes.divider }} light={true} />{" "}
        <Box mt={8}>
          <Copyright />
        </Box>{" "}
      </List>{" "}
    </div>
  );
}

Home.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Home;
