import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({

}))

const Login = () => {

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}

        >
            <div>
                <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                    autoComplete="email"
                    autoFocus
                />
            </div>
            <div>
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
            </div>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            <Grid container>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;