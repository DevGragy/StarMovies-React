import React from "react";
import Box from '@material-ui/core/Box';

import "../css/header.css";

function Header(props) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" m={10}> 
            <h1>StarMovies</h1>
        </Box>
    );
}

export default Header;
