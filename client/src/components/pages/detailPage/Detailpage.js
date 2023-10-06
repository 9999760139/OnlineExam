import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Detailpage.module.css'
import { useParams, Link, useNavigate } from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

const Detailpage = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    return (
        <div className={styles.main}>
            <Grid container columnSpacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12} sm={8} md={8} >
                    <div className={styles.first_col}>
                        <Typography sx={{ mt: 2,mb:1, letterSpacing: '0px', width: "fit-content",cursor:"pointer" }} onClick={() => navigate("/")}><u>Home</u></Typography>
                        {/* <h1 className={styles.main_title} >{id}</h1>
                        <h4 className={styles.sub_title} >{id}</h4> */}
                    </div>
                    <div className={styles.details_div}>
                        <div className={styles.details}>
                            {/* <strong>320<br /></strong> */}
                            320<br /> Marks
                        </div>
                        <div className={styles.details}>
                            {/* <span>180 <br /></span> */}
                            180 <br />
                            Minutes
                        </div>
                        <div className={styles.details}>
                            90
                            <br /> Question
                        </div>
                    </div>
                    <div className={styles.take_test}>
                        <Typography variant='h6' sx={{ fontFamily: "DM Sans", fontWeight: "600" }}>Test Apptempts:0</Typography>
                        <Button variant='contained' color='secondary' onClick={() => navigate("/test/info")}>TAKE TEST</Button>
                    </div>
                    {/* <p className={styles.About_test} >About This Test</p>

                    <div className={styles.test_title}>
                        {id}
                    </div> */}
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                    <div
                        className={styles.card__main}
                    // onClick={() => handleDetailPage(item.title)}
                    >
                        <div className={styles.card__top}>
                            <img className={styles.card__Image} src="/img/online_exam.png" width="100%" height='130px' />
                        </div>
                        <div className={styles.left_time}><AccessAlarmIcon />Valid for 20 days
                        </div>
                        {/* <Button fullWidth variant='contained'>Enroll for free</Button> */}
                        <hr className={styles.hrs} />
                        <div className={styles.sub_info}>What's Included
                        </div>
                        <div className={styles.free}>
                            <CheckIcon /> Live Test
                        </div>
                        <div className={styles.free}>
                            <CheckIcon /> Live Test
                        </div>
                        <div className={styles.free}>
                            <AccessTimeRoundedIcon /> 180 Minutes
                        </div>

                        <div className={styles.free}>
                            <QuestionMarkRoundedIcon /> 90 Question
                        </div>

                    </div>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Detailpage;
