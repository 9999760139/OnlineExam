import React, { useEffect, useState } from 'react';
import styles from './Landing.module.css'
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";


const data = [
    {
        _id: 1,
        image: "/img/online_exam.png",
        title: "ATMA MOCK TEST 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 2,
        image: "/img/online_exam.png",
        title: "CMAT MOCK TEST 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 3,
        image: "/img/online_exam.png",
        title: "MAT MOCK TEST 3 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 4,
        image: "/img/online_exam.png",
        title: "CAT MOCK TEST 4 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 5,
        image: "/img/online_exam.png",
        title: "NEET MOCK TEST 5 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 6,
        image: "/img/online_exam.png",
        title: "SSC MOCK TEST 6 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 7,
        image: "/img/online_exam.png",
        title: "ATMA MOCK TEST 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 8,
        image: "/img/online_exam.png",
        title: "CMAT MOCK TEST 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 9,
        image: "/img/online_exam.png",
        title: "MAT MOCK TEST 3 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 10,
        image: "/img/online_exam.png",
        title: "CAT MOCK TEST 4 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 11,
        image: "/img/online_exam.png",
        title: "NEET MOCK TEST 5 2023",
        is_live: true,
        is_paid: false
    }, {
        _id: 12,
        image: "/img/online_exam.png",
        title: "SSC MOCK TEST 6 2023",
        is_live: true,
        is_paid: false
    },
]
const Landing = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [tabCount, setTabCount] = useState(4);
    const navigate = useNavigate()

    useEffect(() => {
        const width = window.innerWidth;
        if (width < 768) {
            setTabCount(1);
        } else if (width >= 768 && width < 1024) {
            setTabCount(2);
        } else {
            setTabCount(4);
        }
    }, [window.innerWidth]);

    const indexHandler = (type) => {
        if (type === "-") {
            if (startIndex > 0) {
                if (startIndex >= 0) {
                    setStartIndex(startIndex - 1);
                    // setStartIndex(startIndex - 1)
                } else {
                    setStartIndex(0);
                }
            }
        }
        if (type === "+") {
            if (startIndex + tabCount < data.length) {
                if (startIndex + tabCount <= data.length) {
                    setStartIndex(startIndex + 1);
                } else {
                    setStartIndex(data.length - 1);
                }
            }
        }
    };
    const handleDetailPage = (id) => {
        navigate(`/test/${id}`)
    }
    const handleViewLess = () => {

    }

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.text}>
                    <div className={styles.banner_title}>Hi Parasherinism,</div>
                    <div className={styles.banner_subtitle} sx={{
                        sm: {
                            fontFamily: 'Mulish',
                            fontStyle: 'normal',
                            // fontWeight: '600',
                            fontSize: '40px'
                        }, xs: {
                            fontSize: "20px", fontFamily: 'Mulish',
                            fontStyle: 'normal',
                        }
                        // lineHeight: '190%',
                    }}>Welcome to Manav Rachna Institute</div>
                </div>
            </div>
            <div className={styles.carousel_hdr}>
                <div className={styles.total_tests}>
                    <Typography variant='h5'>Tests</Typography>
                    <Typography variant='subtitle1' className={styles.total}>{data.length}</Typography>
                </div>
                <div className={styles.btns_views}>
                    {/* {(startIndex === 0 && tabCount === data.length) ? <Typography variant='h6' sx={{ cursor: "pointer" }} onClick={() => (setTabCount(4), setStartIndex(0))}> View Less</Typography>
                        : <Typography variant='h6' sx={{ cursor: "pointer" }} onClick={() => (setTabCount(data.length), setStartIndex(0))}> View All</Typography>} */}

                    <IconButton
                        color="inherit"
                        edge="start"
                        disabled={startIndex <= 0}
                        onClick={startIndex > 0 ? () => indexHandler("-") : null}
                        className={startIndex <= 0 ? styles.left_inactive : styles.left_active}
                        sx={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)" }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        edge="start"
                        disabled={startIndex + tabCount >= data.length}
                        onClick={startIndex + tabCount < data.length ? () => indexHandler("+") : null} className={startIndex + tabCount >= data.length ? styles.right_inactive : styles.right_active} sx={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)" }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <ul className={styles.test_plans}>
                {data &&
                    data.map((item, index) => {
                        if (index < startIndex + tabCount && index >= startIndex) {
                            return (
                                <div
                                    className={styles.card__main}
                                    onClick={() => handleDetailPage(item.title)}
                                >
                                    <div className={styles.card__top}>
                                        <img className={styles.card__Image} src={item.image} width="100%" height='130px' />
                                    </div>
                                    <div className={styles.title}>{item.title}
                                    </div>
                                    <div className={styles.sub_info}>{item.is_live ? "Live" : "Offline"}
                                    </div>
                                    <div className={styles.free}>{item.is_paid ? "Paid" : "Free"}
                                    </div>
                                </div>)

                        }
                    })}
            </ul>
        </>
    );
}

export default Landing;
