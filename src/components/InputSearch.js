import React from "react";
import { Input } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function InputSearch(props) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={0} sm={4}></Grid>
            <Grid item xs={12} sm={4}>
                <Input
                    color="primary"
                    className="form-control"
                    value={props.search}
                    placeholder="Search..."
                    onChange={(e) => props.setSearch(e.target.value)}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={0} sm={4}></Grid>
        </Grid>
    );
}

export default InputSearch;
