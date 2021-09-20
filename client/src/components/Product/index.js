// import React, { useState } from 'react';
import React from 'react';

// import photo from '../../assets/small/reciplanner.jpg';
import Card from 'react-bootstrap/Card'

const Product = (props) => {

    return (
        <Card style={{ width: '18rem' }} className="bg-dark text-white polaroid">
            <Card.Img src={require(`../../assets/small/${props.image}.png`).default} alt={props.alt} />
            <Card.ImgOverlay className="imgOverlay">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <a href={props.github}><img src="https://img.icons8.com/material-outlined/96/000000/github.png" alt="GitHub Repo" /> </a>
                <a href={props.deployed}><img src="https://img.icons8.com/clouds/100/000000/domain.png" alt="Live Application" /></a>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Product;