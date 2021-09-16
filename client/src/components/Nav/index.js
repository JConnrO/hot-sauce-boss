import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import headerImage from "../../assets/nav/logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#FF70A6",
        // color: "#E9FF70"
    },
    title: {
        flexGrow: 1,
        color: "#FF70A6",
        // color: "#E9FF70",
        fontWeight: "bold"
    },
    coolers: {
        backgroundColor: "#70D6FF"
    },
    text: {
        color: "#FF70A6",
        // color: "#E9FF70",
        fontWeight: "bold"
    }
}));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.coolers}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                        <img src={headerImage} style={{ width: "10%", height: "10%" }} alt="logo" />
                    <Typography variant="h6" className={classes.title}>
                        HotSauceBoss
                    </Typography>
                    <Button className={classes.text}>Login</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}
