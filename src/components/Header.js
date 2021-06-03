import React from "react";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Header(props) {
    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center" m={0}>
            <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => props.history.push('/signin')}
            >
                        Login{" "}
                       
            </Button>{" "}
        </Box>
    );
}

export default Header;