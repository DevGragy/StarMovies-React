import React from "react";
import Box from '@material-ui/core/Box';

function Title(props) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" m={10}> 
            <h1>StarMovies</h1>
        </Box>
    );
}

export default Title;
