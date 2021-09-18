import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const AddProduct = () => {

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" flexDirection="column">
                <TextField
                    margin="normal"
                    required
                    id="username"
                    label="Username"
                    name="username"
                    size="small"
                    autoComplete="username"
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

export default AddProduct;