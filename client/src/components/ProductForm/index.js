import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const ProductForm = () => {

    const [values, setValues] = React.useState({
        amount: '',
        // password: '',
        // weight: '',
        // weightRange: '',
        // showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" flexDirection="row">
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
                    margin="normal"
                    required
                    id="category"
                    label="Category"
                    name="category"
                    size="small"
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

                {/* <TextField
                    id="outlined-number"
                    id="number"
                    label="Quantity"
                    type="quantity"
                    inputProps={{ min: 0 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> */}

            </Grid>

            <Grid container alignItems="center" justifyContent="center" flexDirection="row">


                <TextField
                    id="outlined-number"
                    // id="number"
                    label="Quantity"
                    type="number"
                    inputProps={{ min: 0 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        size="small"
                    />
                </FormControl>

            </Grid>

            <Grid container alignItems="center" justifyContent="center" flexDirection="row">

                <TextField
                    margin="normal"
                    required
                    id="image"
                    label="Image website"
                    name="image"
                    size="small"
                    autoFocus
                />

            </Grid>

        </ >
    )
}

export default ProductForm;