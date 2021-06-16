import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  title: {
    color: "white",
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    axios
      .post("https://smlogin.herokuapp.com/signup", null, {
        params: { email, password },
      })
      .then(
        (response) => {
          console.log(response);
          alert("Usuario nuevo creado con éxito");
          history.push("/signin");
        },
        (error) => {
          console.log(error);
          alert("Ocurrió un error al crear el usuario");
        }
      );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>{" "}
        <Typography component="h1" variant="h5" className={classes.title}>
          Sign up
        </Typography>{" "}
        <form className={classes.form} onSubmit={handleSubmitSignUp} noValidate>
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeEmail}
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up{" "}
          </Button>{" "}
        </form>{" "}
      </div>{" "}
      <Box mt={8}>
        <Copyright />
      </Box>{" "}
    </Container>
  );
}

export default SignUp;
