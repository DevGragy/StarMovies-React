import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
    return (
        <Typography variant="body2" color="primary" align="center">
            {" "}
            {"Copyright © "}{" "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website{" "}
            </Link>{" "}
            {new Date().getFullYear()} {"."}{" "}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: "white",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textfield: {
        backgroundColor: "white",
    },
    title: {
        color: "white",
    },
    checkbox:{
        color: "white",
    }
}));

function SignIn(props) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>{" "}
                <Typography component="h1" variant="h5" className={classes.title}>
                    Sign in
                </Typography>{" "}
                <form className={classes.form} onSubmit={props.handleSubmitSignIn} noValidate>
                    <TextField
                        className = {classes.textfield}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                    <TextField
                        className = {classes.textfield}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" className = {classes.checkbox} />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In{" "}
                    </Button>{" "}
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password ?
                            </Link>{" "}
                        </Grid>{" "}
                        <Grid item>
                            <Link to="/signup">
                                {" "}
                                {"Don't have an account? Sign Up"}{" "}
                            </Link>{" "}
                        </Grid>{" "}
                    </Grid>{" "}
                </form>{" "}
            </div>{" "}
            <Box mt={8}>
                <Copyright />
            </Box>{" "}
        </Container>
    );
}

export default SignIn;
