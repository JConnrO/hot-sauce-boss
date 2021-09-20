// import React, { useState } from 'react';
import React from 'react';

// import photo from '../../assets/small/reciplanner.jpg';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            image: "0",
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Cholula",
            description: "Cholula1",
            image: "0",
            quantity: "1",
            price: "1.99"

        },
        {
            name: "Tabasco",
            description: "Tabasco1",
            image: "0",
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Mule Sauce",
            description: "Mule Sauce1",
            image: "0",
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Hot Ones: The Last Dab XXX",
            description: "Hot Ones: The Last Dab XXX1",
            image: "0",
            quantity: "1",
            price: "1.99"
        },
        {
            name: "Hot Ones - Los Calientes",
            description: "Hot Ones - Los Calientes1",
            image: "0",
            quantity: "1",
            price: "1.99"
        }
    ]

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={hotsauces.image}
          alt={hotsauces.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hotsauces.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hotsauces.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    );
}

export default Product;