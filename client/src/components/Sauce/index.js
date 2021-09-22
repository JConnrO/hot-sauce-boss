import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import spicyRice from "../../assets/fonts/SpicyRice-Regular.ttf";

function Sauce(props) {
  const [sauceList, setSauceList] = useState(props.hotsauces);

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
  // Update the state with the new friends list.
  const removeSauce = (name) => {
    console.log("Delete Clicked");
    const newList = sauceList.filter((sauce) => sauce.name !== name);
    setSauceList(newList);
  };
  const editSauce = (name) => {
    console.log("Delete Clicked");
    const newList = sauceList.filter((sauce) => sauce.name !== name);
    setSauceList(newList);
  };
  return (
    <section>
      <h1 id="hotsauce">Sauces</h1>
      <div id="hotsauce" className="flex-row" id="hot-sauce">
        {sauceList.map((hotsauce) => (
          <div class="sauce-card">
            <Card class="fullCard" sx={{ width: "95%" }}>
              <CardMedia
                component="img"
                height="140"
                image={hotsauce.image}
                alt={hotsauce.name}
                key={hotsauce.name}
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
                <Button size="small" onClick={() => editSauce()}>
                  Edit
                </Button>
                <Button size="small" onClick={() => removeSauce(hotsauce.name)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sauce;
