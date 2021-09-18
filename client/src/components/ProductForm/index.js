import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const ProductForm = () => {

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" flexDirection="column">
                <TextField
                    margin="normal"
                    required
                    id="productname"
                    label="Product Name"
                    name="productname"
                    size="small"
                    // autoComplete="productname"
                    autoFocus
                />

                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    required
                    name="description"
                    label="Description"
                    type="description"
                />

                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="quantity"
                    inputProps={{ min: 0 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    id="category"
                    label="Category"
                    name="category"
                    size="small"
                    autoFocus
                />

            </Grid>
        </ >
    )
}

export default ProductForm;