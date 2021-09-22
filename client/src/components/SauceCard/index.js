
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditProduct from '../EditProduct/index';

function SauceCard(props) {
    const [sauceList, setSauceList] = useState(props);
    const removeSauce = name => {
        console.log("Delete Clicked");
        const newList = sauceList.filter(sauce => sauce.name !== name);
        setSauceList(newList);
    };
    const editSauce = name => {
        console.log("Edit Clicked");
    };
    return (
        <div className="sauce-card" key={props.name}>
            <Card className='fullCard' sx={{ width: '95%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => editSauce(props)}>Edit</Button>
                    <Button size="small" onClick={() => removeSauce(props.name)}>Delete</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default SauceCard;
