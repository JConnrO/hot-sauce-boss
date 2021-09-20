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
    ]

    return (
        <section>
            <h1 id="portfolio">Portfolio</h1>
            <div className="flex-row">
                {hotsauces.map((hotsauce) => (
                    <Card sx={{ maxWidth: 345 }}>
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
                            <Button size="small">Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Product;