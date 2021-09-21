import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import headerImage from "../../assets/nav/logo.png";
import MenuDrawer from '../Drawer/index';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center'
    },
    title: {
        flexGrow: 1,
        color: "#FF70A6",
        // color: "#E9FF70",
        fontWeight: "bold"
    },
    coolers: {
        backgroundColor: "#70D6FF"
    }
}));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.coolers}>
                <Toolbar width="100%">
                    <MenuDrawer></MenuDrawer>
                    <img src={headerImage} style={{ width: "10%", height: "10%" }} alt="logo" />
                    <Typography variant="h6" className={classes.title}>
                        HotSauceBoss
                    </Typography>
                </Toolbar>
            </AppBar>

        </div >
    );
}
