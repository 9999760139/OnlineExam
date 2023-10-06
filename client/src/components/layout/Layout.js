import React, { useEffect } from 'react';
import styles from './Layout.module.css'
import { Alert, Typography } from '@mui/material';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, signed }) => {
    const location = useLocation();

    const path = location.pathname.includes('/test/live')
    const path_info = location.pathname.includes('/test/info')
    const path_login = location.pathname.includes('/manavrachna')
    return (
        <>
            {signed ? children : path || path_login || path_info ? children :
                <>
                    <Header />
                    {/* <Alert icon={false} sx={{ display: "block" }} severity="warning">
                        <Typography align='center'> Please confirm your Email address &nbsp;  &nbsp;
                            <u> Resend Email</u></Typography>
                    </Alert> */}
                    <div className={styles.children}>
                        {children}
                    </div>
                    <Footer />
                </>
            }
        </>
    );
}

export default Layout;
