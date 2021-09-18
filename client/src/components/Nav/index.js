import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import headerImage from "../../assets/nav/logo.png";
import Login from '../Login/index';
import Signup from '../Signup/index';
import MenuDrawer from '../Drawer/index';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center'
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

    // set modal display state
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.coolers}>
                <Toolbar width="100%">
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <MenuDrawer></MenuDrawer>
                    <img src={headerImage} style={{ width: "10%", height: "10%" }} alt="logo" />
                    <Typography variant="h6" className={classes.title}>
                        HotSauceBoss
                    </Typography>
                    {/* <Button className={classes.text}
                        onClick={() => {
                            setLoginModal(true)
                            setSignupModal(false)
                        }}>Login
                    </Button>
                    <Button className={classes.text}
                        onClick={() => {
                            setSignupModal(true)
                            setLoginModal(false)
                        }}>Sign Up</Button> */}
                </Toolbar>
            </AppBar>
            <Modal
                style={{
                    position: "static"
                }}
                open={loginModal}
                onClose={() => setLoginModal(false)}
                aria-labelledby='login-modal'>
                <Login handleModalClose={() => setLoginModal(false)} ></Login>
            </Modal>
            <Modal
                style={{
                    position: "static"
                }}
                open={signupModal}
                onClose={() => setSignupModal(false)}
                aria-labelledby='signup-modal'>
                <Signup handleModalClose={() => setSignupModal(false)}></Signup>
            </Modal>
        </div >
    );
}
