// import React, { useState } from 'react';
import React from 'react';

// import photo from '../../assets/small/reciplanner.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import cholula from '../../assets/hotsauce/cholula.jpeg'
import franks from '../../assets/hotsauce/franks.jpeg'
import hoffs from '../../assets/hotsauce/hoffs.jpeg'
import jolokia from '../../assets/hotsauce/jolokia.jpeg'
import louisiana from '../../assets/hotsauce/louisiana.jpeg'

import EditProduct from '../EditProduct/index';
import Modal from '@mui/material/Modal';

const Product = (props) => {
    // input ProductInput {
    //     name: String
    //     description: String
    //     image: String
    //     quantity: Int
    //     price: Float
    //   }
    const hotsauces = [
        {
            name: "Franks Red",
            description: "Frank's Red Hot Sauce",
            image: franks,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Cholula",
            description: "Cholula1",
            image: cholula,
            quantity: "1",
            price: "1.99"

        },
        {
            name: "Jolokia",
            description: "Jolokia",
            image: jolokia,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Louisiana",
            description: "Louisiana",
            image: louisiana,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Hoffs",
            description: "Hoffs",
            image: hoffs,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Franks Red",
            description: "Frank's Red",
            image: franks,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Cholula",
            description: "Cholula1",
            image: cholula,
            quantity: "1",
            price: "1.99"

        },
        {
            name: "Jolokia",
            description: "Jolokia",
            image: jolokia,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Louisiana",
            description: "Louisiana",
            image: louisiana,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Hoffs",
            description: "Hoffs",
            image: hoffs,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Franks Red",
            description: "Frank's Red",
            image: franks,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Cholula",
            description: "Cholula1",
            image: cholula,
            quantity: "1",
            price: "1.99"

        },
        {
            name: "Jolokia",
            description: "Jolokia",
            image: jolokia,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Louisiana",
            description: "Louisiana",
            image: louisiana,
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Hoffs",
            description: "Hoffs",
            image: hoffs,
            quantity: "1",
            price: "1.99"
        },
    ]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section>
            <h1 id="hotsauce">Sauces</h1>
            <div className="flex-row" id="hot-sauce">
                {hotsauces.map((hotsauce) => (
                    <div class="sauce-card">
                        <Card class='fullCard' sx={{ width: '95%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={hotsauce.image}
                                alt={hotsauce.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {hotsauce.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {hotsauce.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button
                                    onClick={handleOpen}>Edit</Button>
                                <Button size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal
                style={{
                    position: "static"
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby='editproduct-modal'>
                <EditProduct handleClose={handleClose} ></EditProduct>
            </Modal>
        </section>
    );
}

export default Product;