import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const useStyles = makeStyles(theme => ({
    coolers: {
        backgroundColor: "#70D6FF"
    },
    text: {
        color: "#FF70A6"
    }
}))

const AddProduct = () => {

    const classes = useStyles();

    // set initial form state
    const [productFormData, setProductFormData] = useState({ name: '', description: '' });
    // set state for form validation
    // const [validated] = useState(false);
    // set state for alert
    // const [showAlert, setShowAlert] = useState(false);

    const [addProduct] = useMutation(ADD_PRODUCT);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductFormData({ ...productFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            description: data.get('description'),
            // number: data.get('number'),
            // amount: data.get('amount')
        });

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {

            // update for mutation
            const { data } = await addProduct({
                variables: { ...productFormData }
            });

            // update auth 
            Auth.login(data.addProduct.token);

        } catch (err) {
            console.error(err);
            // setShowAlert(true);
        }

        setProductFormData({
            name: '',
            description: '',
            // number: '',
            // amount: ''
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
                    onChange={handleInputChange}
                    value={productFormData.name}
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
                    onChange={handleInputChange}
                    value={productFormData.description}
                />

            </Grid>

            <Grid container alignItems="center" justifyContent="center">
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.coolers}
                >
                    Add Product
                </Button>
            </Grid>
        </Box >
    )
}

export default AddProduct;