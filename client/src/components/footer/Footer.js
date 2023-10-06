import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (<div className={styles.footer_main}>
        <hr className={styles.hrs} />
        <div className={styles.child_main}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={6} sm={6} md={6} >
                    <div className={styles.first_col}>
                        <div className={styles.logo_div}>
                            <img src='/img/logo.png' height='25px' width='70px' />
                        </div>
                        {/* <Button variant='outlined'>Languages</Button> */}
                        {/* <Typography>About Us</Typography> */}
                    </div>
                    {/* <p className={styles.copyright_text} >Copyright @ 2023  Manav Rachna Institute</p> */}
                </Grid>
                <Grid item xs={6} sm={6} md={6} >
                    <div className={styles.links_div}>
                        <div><img src="/img/facebook.png" height='30px' width='20px' /></div>
                        <div><img src="/img/linkedin.png" height='30px' width='20px' /></div>
                        <div><img src="/img/twitter.png" height='30px' width='20px' /></div>
                        <div><img src="/img/facebook.png" height='30px' width='20px' /></div>
                    </div>
                </Grid>
                {/* <Grid item xs={6} sm={6} md={2} container
                    direction="row-reverse"
                    alignItems="start">
                    <div><img src="/img/logo.png" height='30px' width='110px' /></div>
                </Grid> */}
            </Grid>
        </div>
    </div>
    );
}

export default Footer;
