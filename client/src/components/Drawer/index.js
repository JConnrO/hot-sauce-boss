import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@mui/material/Modal';
import Login from '../Login/index';
import Signup from '../Signup/index';
import AddProduct from '../AddProduct/index';
import EditProduct from '../EditProduct/index';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function MenuDrawer() {

    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [addProductModal, setAddProductModal] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <StyledMenuItem>
                    <Button
                        onClick={() => {
                            setLoginModal(true)
                            setSignupModal(false)
                            setAddProductModal(false)
                        }}>Login
                    </Button>

                </StyledMenuItem>

                <StyledMenuItem>
                    <Button
                        onClick={() => {
                            setSignupModal(true)
                            setLoginModal(false)
                            setAddProductModal(false)
                        }}>Sign Up</Button>

                </StyledMenuItem>

                <StyledMenuItem>
                    <Button
                        onClick={() => {
                            setAddProductModal(true)
                            setSignupModal(false)
                            setLoginModal(false)
                        }}>Add Product</Button>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Button
                        onClick={() => {
                            setAddProductModal(true)
                            setSignupModal(false)
                            setLoginModal(false)
                        }}>Edit Product</Button>
                </StyledMenuItem>

            </StyledMenu>

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

            <Modal
                style={{
                    position: "static"
                }}
                open={addProductModal}
                onClose={() => setAddProductModal(false)}
                aria-labelledby='addproduct-modal'>
                <AddProduct handleModalClose={() => setAddProductModal(false)}></AddProduct>
            </Modal>

        </div>
    );
}
