import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles(theme => ({
    coolers: {
        backgroundColor: "#70D6FF"
    },
    text: {
        color: "#FF70A6"
    }
}))

const EditProduct = () => {

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box component="form"
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            style=
            {{
                backgroundColor: "#FFD670",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                border: '2px solid #000',
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
            }}
        >
            <Grid container alignItems="center" justifyContent="center" flexDirection="row">

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

            </Grid>

            <Grid container alignItems="center" justifyContent="center" >

                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    required
                    name="description"
                    label="Description"
                    type="description"
                />

            </Grid>

            <Grid container alignItems="center" justifyContent="center">
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.coolers}
                >
                    Edit Product
                </Button>
            </Grid>
        </Box >
    )
}

export default EditProduct;