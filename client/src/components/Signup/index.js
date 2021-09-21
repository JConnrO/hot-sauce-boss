import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const useStyles = makeStyles(theme => ({
    coolers: {
        backgroundColor: "#70D6FF"
    },
    text: {
        color: "#FF70A6"
    }
}))

const Signup = () => {

    const classes = useStyles();

    // set initial form state
    const [userFormData, setUserFormData] = useState({ name: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    // check error 
    const [addUser, { error }] = useMutation(ADD_USER);
    useEffect(() => {
        if (error) {
            setShowAlert(true)
        } else {
            setShowAlert(false)
        }
    }, [error])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            password: data.get('password'),
        });;

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {

            // update for mutation
            const { data } = await addUser({
                variables: { ...userFormData }
            });

            // update auth 
            Auth.login(data.addUser.token);

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            name: '',
            password: '',
        });
    };

    return (
        <Box component="form"
            onSubmit={handleFormSubmit}
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
                width: 400,
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
                    id="name"
                    label="Name"
                    name="name"
                    size="small"
                    autoComplete="name"
                    autoFocus
                    onChange={handleInputChange}
                    value={userFormData.name}
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
                    onChange={handleInputChange}
                    value={userFormData.password}
                />
            </Grid>

            <Grid container alignItems="center" justifyContent="center">
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.coolers}
                >
                    Sign Up
                </Button>
            </Grid>
        </Box >
    )
}


export default Signup;