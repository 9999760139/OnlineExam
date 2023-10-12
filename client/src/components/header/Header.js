
import styles from './Header.module.css'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../utils/useLocationStorage';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Header(props) {
    const { window } = props;
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignout = () => {
        useLocalStorage.removeUser()
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: "DM Sans" }}>
                MRI
            </Typography>
            <Divider />
            {/* <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left',fontFamily:"DM Sans" }}>
                            <ListItemText primary={item}  sx={{fontFamily:"DM Sans" }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className={styles.appbar_main}>
            <AppBar component="nav" color='inherit' position="static" sx={{ boxShadow: "none" }}>

                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} className={styles.logo_div}>
                        <img src='/img/logo.png' height='32px' width='70px' />
                    </div>
                    <Box sx={{ flexGrow: 1, ml: '2', display: { xs: 'none', sm: 'block' } }}>

                        <Button variant='outlined' sx={{ ml: '2' }}
                            startIcon={<DarkModeOutlinedIcon />}>Dark</Button>
                    </Box>

                    {auth && (
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, }}
                            >
                                <NotificationsNoneOutlinedIcon />
                            </IconButton>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                sx={{ backgroundColor: "green", color: "white", width: "4rem", height: "3rem" }}
                            >
                                P
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleSignout}>Sign out</MenuItem>
                                <MenuItem onClick={() => navigate("/manavrachna/signup")}>Sign Up</MenuItem>
                            </Menu>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;