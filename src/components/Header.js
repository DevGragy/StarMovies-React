import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    fontSize: 18,
    color: "white",
  },
}));

function Header(props) {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://smlogin.herokuapp.com/user", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setData(response.data);
        }
      });
  }, [setData]);

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .get("https://smlogin.herokuapp.com/logout", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setData(null);
        props.history.push("/");
      });
  };

  const sendToSignin = (e) => {
    e.preventDefault();
    props.history.push("/signin");
  };

  const sendToSignup = (e) => {
    e.preventDefault();
    props.history.push("/signup");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      m={0}
    >
      <Typography component="h1" variant="h5" className={classes.title}>
        {data ? `${data.email}` : ""}{" "}
      </Typography>{" "}
      <Box>
        {" "}
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={data ? handleLogOut : sendToSignin}
        >
          {data ? "Logout" : "Login"}
        </Button>{" "}
        {data ? null : (
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendToSignup}
          >
            Sign Up
          </Button>
        )}{" "}
      </Box>
    </Box>
  );
}

export default Header;
