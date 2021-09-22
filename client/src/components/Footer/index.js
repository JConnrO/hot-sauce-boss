import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
    coolers: {
        backgroundColor: "#70D6FF", 
        paddingLeft: "30px",
        alignItems: "center",
        marginTop: "25px",
        bottom: "0"
    }, 
    title: {
        textAlign: "center"
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.coolers} >
            <Grid container >

                <Grid item xs={8} className={classes.coolers}>
                    <h3 className={classes.title}>About</h3>
                    <p>This webpage is a project for the Rutgers Coding Bootcamp.
                        With this app you'll be able to see other user's hot sauce selections,
                        so you don't have to worry about scrounging around for a new sauce.
                        You can even make an account to add your own future recommendations!
                        Each student did their part in making this webpage what it is today.
                        If you like what you see,
                        feel free to check out our personal GitHubs!
                    </p>
                </Grid>

                <Grid className={classes.coolers} >
                    <h3 className={classes.title}>Contact Us:</h3>
                    <ul >

                        <li><a href="https://github.com/stephgeorge22" target="_blank">Stephanie George</a></li>
                        <li><a href="https://github.com/JConnrO" target="_blank">Connor O'Brien</a></li>
                        <li><a href="https://github.com/DiSantoz" target="_blank">David Ferreira</a></li>
                        <li><a href="https://github.com/Imaparadox" target="_blank">Stephen Marsh</a></li>
                        <li><a href="https://github.com/maa-hub" target="_blank">Maame Konadu Assasie Gyimah</a></li>
             
                    </ul>

                </Grid>

            </Grid>
        </footer >
    )
}

export default Footer;