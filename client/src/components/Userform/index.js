import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Userform = () => {

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" flexDirection="column">
                <TextField
                    margin="normal"
                    required
                    id="name"
                    label="Name"
                    name="name"
                    size="small"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                    autoComplete="current-password"
                />
            </Grid>
        </ >
    )
}

export default Userform;