import styles from './LiveHeader.module.css'
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
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const time = 3 * 60 * 60
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function LiveHeader(props) {
    const { window } = props;
    const [timer, setTimer] = React.useState("00:00:00");
    const Ref = React.useRef()
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date())
        const hour = Math.floor(total / (1000 * 60 * 60) % 24);
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const seconds = Math.floor((total / 1000) % 60)

        return { total, hour, minutes, seconds }
    }
    function startTimer(e) {
        let { total, hour, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hour > 9 ? hour : '0' + hour) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    function clearTimer(e) {
        // setTimer("00:00:10");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e)
        }, 1000)
        Ref.current = id
    }
    function getDeadTime() {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + time)
        return deadline

    }
    React.useEffect(() => {
        clearTimer(getDeadTime());
    }, [])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className={styles.appbar_main}>
            <CssBaseline />
            <AppBar component="nav" color='inherit' position="static" sx={{ boxShadow: { xs: 'none', sm: "1" } }}>
                <Toolbar sx={{ display: "flex", columnGap: "0px",width:"100vw" }}>
                    <Box sx={{ width: {xs:"95%",sm:"66%"}, display: "flex", alignItems: "center", flexGrow: { xs: 0, sm: 1 } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={props.handleOpen}
                        // sx={{ mr: 1}}
                        >
                            <CancelOutlinedIcon />
                        </IconButton>
                        <hr className={styles.hr_ver} />
                        <Typography  sx={{ fontFamily: "DM Sans",fontSize:{xs:"17px",sm:"25px"}}}>JEE MOCK TEST 2023</Typography>
                    </Box>
                    {auth && (
                        <Box sx={{ width: {xs:"5%",sm:"34%"}}}>
                            <Box className={styles.right_nav} sx={{ display: "flex", alignItems: "center", mr: 12.2 }}>
                                <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>{timer}</Typography>
                                <hr className={styles.hr_ver_right} />
                                <IconButton
                                    size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                    sx={{ backgroundColor: "green", mr: 1, color: "white", width: "3rem", height: "3rem", display: { xs: 'none', sm: 'block' } }}
                                >
                                    P
                                </IconButton>
                                <Typography variant='h5' sx={{ fontFamily: "DM Sans", display: { xs: 'none', sm: 'block' } }}>Parasherinism</Typography>
                            </Box>
                            <Box className={styles.menu_btn} sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={props.toggleDrawer("right", true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    )}
                </Toolbar>
                <hr className={styles.hrs_h} />
                <Box className={styles.timer_mobile} >
                    <Typography variant='h5' sx={{ display: { xs: 'block', sm: 'none' } }}>{timer}</Typography>
                </Box>
                <hr className={styles.hrs_h} />
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

LiveHeader.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default LiveHeader;