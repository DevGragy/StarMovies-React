import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 6,
    },
    bg: {
        background: "linear-gradient(45deg, #e66465 45%, #252850 75%)",
        borderRadius: 10,
    },
    poster: {
        borderRadius: 10,
    },
    button: {
        color: "white",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            background: "linear-gradient(45deg, #e66465 90%, #FE6B8B 30%)",
        },
    },
});

const useThemes = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        [theme.breakpoints.up("md")]: {
            width: 575,
        },
        [theme.breakpoints.up("lg")]: {
            width: 575,
        },
    },
}));

function InfoMovie(props) {
    const [movies, setMovies] = React.useState({
        Title: "",
        Poster: "",
        Year: "",
        Plot: "",
        Runtime: "",
        Genre: "",
        Released: "",
        Director: "",
        Writer: "",
        Actors: "",
        Production: "",
        Metascore: "",
        imdbRating: "",
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

    const classes = useStyles();
    const themes = useThemes();
    return (
        <Box my={4}>
            <Grid
                container
                className={classes.bg}
                spacing={2}
                display="flex"
                alignItems="center"
                justify="center"
            >
                <Grid item>
                    <Box m={2} py={2}>
                        <img
                            className={classes.poster}
                            src={movies.Poster}
                            alt="Movie"
                        ></img>
                    </Box>
                </Grid>
                <Grid item>
                    <Card className={themes.root}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                ({movies.Year})
                            </Typography>
                            <Typography variant="h4" component="h4">
                                {movies.Title}
                            </Typography>
                            <Typography
                                className={classes.pos}
                                color="textSecondary"
                            >
                                {movies.Runtime} | {movies.Genre} |{" "}
                                {movies.Released}
                            </Typography>
                            <Typography
                                className={classes.pos}
                                variant="body1"
                                component="p"
                            >
                                {movies.Plot}
                            </Typography>
                            <Typography
                                className={classes.pos}
                                variant="body2"
                                component="p"
                            >
                                <i>Director(s):</i> {movies.Director}
                                <br />
                                <i>Writer(s):</i> {movies.Writer}
                                <br />
                                <i>Actors:</i> {movies.Actors}
                                <br />
                                <i>Production:</i> {movies.Production}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                <Box mt={3}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-around"
                                        alignItems="center"
                                    >
                                        <Box>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Metascore.png"
                                                alt="Metacritic Logo"
                                                width="40"
                                            ></img>{" "}
                                            : {movies.Metascore}
                                        </Box>
                                        <Box>
                                            <img
                                                src="https://banner2.cleanpng.com/20181111/wrv/kisspng-logo-brand-product-design-font-imdb-com-reviews-crackwatch-5be8d64bd43f03.0164031415419858678694.jpg"
                                                alt="IMDB Logo"
                                                width="50"
                                            ></img>{" "}
                                            : {movies.imdbRating}
                                        </Box>
                                    </Grid>
                                </Box>
                            </Typography>
                        </CardContent>
                        <Box display="flex" justifyContent="center">
                            <CardActions>
                                <Link to="/">
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                    >
                                        Home
                                    </Button>
                                </Link>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default InfoMovie;
