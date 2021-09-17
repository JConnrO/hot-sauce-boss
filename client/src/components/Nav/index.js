import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import headerImage from "../../assets/nav/logo.png";
import SignUpForm from '../SignupForm';
import Modal from '@mui/material/Modal';
// import * as React from 'react';
import Box from '@mui/material/Box';

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

    // set modal display state
    const [showModal, setShowModal] = useState(false);

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
                    {/* <Nav.Link className={classes.text} onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link> */}
                    {/* <Button className={classes.text}>Login/Sign Up</Button> */}
                    <Button className={classes.text} onClick={() => setShowModal(true)}>Login/Sign Up</Button>
                    <Modal
                        size='lg'
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <Nav.Item eventKey='signup'>
                                    <SignUpForm handleModalClose={() => setShowModal(false)} />
                                </Nav.Item>
                            </Typography>
                        </Box>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div >
    );
}
