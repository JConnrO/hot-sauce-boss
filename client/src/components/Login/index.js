import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    coolers: {
        backgroundColor: "#70D6FF"
    },
    text: {
        color: "#FF70A6"
    }
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
        <Box component="form"
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            style=
            {{
                // paddingLeft: "20px",
                // width: "250px", 
                // height: "250px",
                backgroundColor: "#FFD670",
                // justifyContent: "center",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                // bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
            }}
        >
            <Grid container alignItems="center" justifyContent="center" flexDirection="column">
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
            </Grid>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className={classes.coolers}
            >
                Login
            </Button>
            <Grid container>
                <Grid item>
                    <Link href="#" variant="body2" className={classes.text}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;