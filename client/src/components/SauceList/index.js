import React from 'react';
import Sauce from '../Sauce';
import cholula from '../../assets/hotsauce/cholula.jpeg'
import franks from '../../assets/hotsauce/franks.jpeg'
import hoffs from '../../assets/hotsauce/hoffs.jpeg'
import jolokia from '../../assets/hotsauce/jolokia.jpeg'
import louisiana from '../../assets/hotsauce/louisiana.jpeg'

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
];
function SauceList() {
    
  return <Sauce hotsauces={hotsauces} />;
}

export default SauceList;