import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#f5f5f1",
  },
}));

function Title(props) {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={10}>
      <Typography component="h1" variant="h4" className={classes.title}>
        StarMovies
      </Typography>{" "}
    </Box>
  );
}

export default Title;
