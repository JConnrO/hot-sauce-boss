// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';

// const ProductForm = () => {

//     const [values, setValues] = React.useState({
//         amount: '',
//         // password: '',
//         // weight: '',
//         // weightRange: '',
//         // showPassword: false,
//     });

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     return (
//         <>
//             <Grid container alignItems="center" justifyContent="center" flexDirection="row">
//                 <TextField
//                     margin="normal"
//                     required
//                     id="productname"
//                     label="Product Name"
//                     name="productname"
//                     size="small"
//                     // autoComplete="productname"
//                     autoFocus
//                     onChange={handleInputChange}
//                     value={productFormData.name}
//                 />

//             </Grid>

//             <Grid container alignItems="center" justifyContent="center" >

//                 <TextField
//                     id="outlined-multiline-static"
//                     multiline
//                     rows={4}
//                     required
//                     name="description"
//                     label="Description"
//                     type="description"
//                     onChange={handleInputChange}
//                     value={productFormData.description}
//                 />

//             </Grid>

//             <Grid container alignItems="center" justifyContent="center" flexDirection="row">


//                 <TextField
//                     id="outlined-number"
//                     // id="number"
//                     label="Quantity"
//                     type="number"
//                     inputProps={{ min: 0 }}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     onChange={handleInputChange}
//                     value={productFormData.quantity}
//                 />

//                 <FormControl fullWidth sx={{ m: 1 }}>
//                     <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
//                     <OutlinedInput
//                         id="outlined-adornment-amount"
//                         value={values.amount}
//                         onChange={handleChange('amount')}
//                         startAdornment={<InputAdornment position="start">$</InputAdornment>}
//                         label="Amount"
//                         size="small"
//                         onChange={handleInputChange}
//                         value={productFormData.price}
//                     />
//                 </FormControl>

//             </Grid>

//         </ >
//     )
// }

// export default ProductForm;