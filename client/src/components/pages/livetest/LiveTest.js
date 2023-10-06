import React, { useEffect, useRef, useState } from 'react';
import styles from './LiveTest.module.css'
import LiveHeader from './header/LiveHeader';
import { Box, Button, FormControlLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Modals from '../../components/modals/Modal';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const LiveTest = () => {
    const navigate = useNavigate();

    const [state, setState] = React.useState({ right: false });
    const [sidebar, setSidebar] = useState(true)
    const [section, setSection] = useState({ previeus: "mathematics", updated: "mathematics" });
    const [open, setOpen] = React.useState({ exit: false, submit: false });
    const [questions, setQuestions] = useState([
        {
            _id: 1,
            question: "question 1",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 2,
            question: "question 2",
            image: "/img/question.png",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 3,
            question: "question 3",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 4,
            question: "question 4",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 5,
            question: "question 5",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 6,
            question: "question 6",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 7,
            question: "question 7",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 8,
            question: "question 8",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 9,
            question: "question 9",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 10,
            question: "question 10",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 11, question: "question 11",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 12,
            question: "question 12",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        }, {
            _id: 13,
            question: "question 13",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 14,
            question: "question 14",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 15,
            question: "question 15",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 16,
            question: "question 16",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 17,
            question: "question 17",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 18,
            question: "question 18",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 19,
            question: "question 19",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 20,
            question: "question 20",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 21,
            question: "question 21",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 22,
            question: "question 22",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 23, question: "question 23",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 24,
            question: "question 24",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 25, question: "question 25",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
        {
            _id: 26,
            question: "question 26",
            options: [
                {
                    _id: 1,
                    name: "first"
                }, {
                    _id: 2,
                    name: "second"
                }, {
                    _id: 3,
                    name: "third"
                }, {
                    _id: 4,
                    name: "fourth"
                },
            ]
        },
    ])
    const [answers, setAnswers] = useState([]);
    const [liveQuestion, setLiveQuestion] = useState(0)
    var ans_filter_id = []
    const indexHandler = (type) => {
        var question_id = questions[liveQuestion]._id
        if (type === "-") {
            if (liveQuestion > 0) {
                if (liveQuestion >= 0) {
                    setLiveQuestion(liveQuestion - 1);
                    // setLiveQuestion(questions - 1)
                } else {
                    setLiveQuestion(0);
                }
                if (!ans_filter_id.includes(Number(question_id))) {
                    var answer = [...answers];
                    answer.push({ _id: Number(question_id), not_answered: true, answered: false, review: false, ans_review: false, option: "" });
                    setAnswers(answer);
                }
            }
        }
        if (type === "+") {
            if (liveQuestion + 1 < questions.length) {
                if (liveQuestion + 1 <= questions.length) {
                    setLiveQuestion(liveQuestion + 1);
                } else {
                    setLiveQuestion(questions.length - 1);
                }
                if (!ans_filter_id.includes(Number(question_id))) {
                    var answer = [...answers];
                    answer.push({ _id: Number(question_id), not_answered: true, answered: false, review: false, ans_review: false, option: "" });
                    setAnswers(answer);
                }
            }
        }
    };
    const handleClickQuestionNumber = (val, _id) => {
        var question_id = questions[liveQuestion]._id

        if (!ans_filter_id.includes(Number(question_id))) {
            var answer = [...answers];
            answer.push({ _id: Number(question_id), not_answered: true, answered: false, review: false, ans_review: false, option: "" });
            setAnswers(answer);
        }
        setLiveQuestion(val);
    }
    const handleReview = () => {
        const question_id = questions[liveQuestion]._id
        const answer = [...answers];
        const dt = answer && answer.map((val) => val._id);
        const index = dt.indexOf(Number(question_id));
        if (!ans_filter_id.includes(Number(question_id))) {
            // for review
            answer.push({ _id: Number(question_id), review: true, answered: false, not_answered: false, ans_review: false, option: "" });
            setAnswers(answer);
            console.log('if', liveQuestion, answers[liveQuestion])
            // } else if (ans_filter_id.includes(question_id) && answers[liveQuestion].review === true && answers[liveQuestion].visited===false) {
            //     // for visited
            //     var answer = [...answers];
            //     answer.push({ _id: question_id, answered:false,not_answered:false,review:false,ans_review:false });
            //     setAnswers(answer);
            //     console.log('else')
        } else if ((index !== -1 && answers[index].answered === true && answers[index].review === false)) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: false, review: false, ans_review: true, option: "" })
            setAnswers(answer);
        } else if ((index !== -1 && answers[index].not_answered === true)) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: false, review: true, ans_review: false, option: "" })
            setAnswers(answer);
        } else if ((index !== -1 && answers[index].review === true)) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: true, review: false, ans_review: false, option: "" })
            setAnswers(answer);
        }
    }
    const handleClear = () => {
        const question_id = questions[liveQuestion]._id.toString()
        var answer = [...answers];
        const dt = answer && answer.map((val) => val._id);
        const index = dt.indexOf(Number(question_id));
        if (index !== -1 && answers[index].answered === true) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: true, review: false, ans_review: false, option: "" })
            // answer.push({ _id: question_id,  answered: false, not_answered: false, review: false, ans_review: false });
            setAnswers(answer);
            console.log(answer)
        } else if (index !== -1 && answers[index].review === true) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: true, review: false, ans_review: false, option: "" })
            // answer.push({ _id: question_id,  answered: false, not_answered: false, review: false, ans_review: false });
            setAnswers(answer);
            console.log(answer)
        } else if (index !== -1 && answers[index].ans_review === true) {
            answer.splice(index, 1, { _id: Number(question_id), answered: false, not_answered: true, review: false, ans_review: false, option: "" })
            // answer.push({ _id: question_id,  answered: false, not_answered: false, review: false, ans_review: false });
            setAnswers(answer);
            console.log(answer)
        }

    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            sx={{ width: 320 }}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles.mobile_sidebar} onClick={toggleDrawer("right", true)}>
                <div className={styles.mobile_sid_header}>
                    <Typography variant='h5'>Section</Typography>
                    <CancelOutlinedIcon
                        onClick={toggleDrawer(anchor, false)} />
                </div>
                <div className={styles.mob_sid_name}>
                    <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                        color="inherit"
                        sx={{
                            backgroundColor: "green", color: "white", width: "2.5rem",
                            height: "2rem",
                        }}
                    >
                        P
                    </IconButton>
                    <Typography variant='h5' sx={{
                        fontFamily: "DM Sans"
                    }}>Mathematics</Typography>
                </div>
            </div>
            <div className={styles.right_question_div}>
                {questions.map((val, i) => {
                    // if (ans_filter_id.length === 0 ? false : ans_filter_id.includes(Number(val._id)) && (answers[i] && answers[i].answered === true))
                    if ((answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].answered === true)) {
                        return <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ backgroundColor: "greenyellow", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                            className={styles.question_number}
                        >
                            {i + 1}
                        </IconButton>
                    }
                    else if ((answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].not_answered === true)) {
                        return <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ backgroundColor: "red", fontSize: "17px" }}
                            className={styles.question_number}
                            onClick={() => handleClickQuestionNumber(i, val._id)}
                        >
                            {i + 1}
                        </IconButton>
                    } else if (answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].review === true) {
                        return <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ backgroundColor: "rgb(134, 113, 251)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                            className={styles.question_number}
                        >
                            {i + 1}
                        </IconButton>
                    } else if (answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].ans_review === true) {
                        return <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ backgroundColor: "rgb(134, 113, 251)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                            className={styles.question_number}
                        >
                            <div className={styles.review_ans}></div>
                            {i + 1}
                        </IconButton>
                    }
                    else {
                        return <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{ backgroundColor: i === liveQuestion ? "rgb(2, 226, 226)" : "rgb(226, 226, 226)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                            className={styles.question_number}
                        >
                            {i + 1}
                        </IconButton>
                    }
                })}
            </div>
            <div className={styles.notify_sign_div}>
                <div className={styles.notify_sign} >
                    <div>
                        <div className={styles.answer_color}></div> ANSWERED
                    </div>
                    <div>
                        <div className={styles.not_answer_color}></div>NOT ANSWERED
                    </div>
                    <div>
                        <div className={styles.review_color}></div> MARKED FOR REVIEW
                    </div>
                    <div>
                        <div className={styles.not_visit_color}></div>NOT VISITED
                    </div>
                    <div>
                        <div className={styles.answer_mark_color}>
                            <div className={styles.mark_ans}></div></div>ANSWERED MARK FOR REVIEW
                    </div>
                </div>
                {/* <h3>All Question Instruction</h3>
                <h6>COPYRIGHT 2023</h6> */}
                <Button onClick={handleOpenSubmit} variant='contained' color='success' style={{ margin: '0px 10px', width: '90%' }} >SUBMIT</Button>
            </div>
        </Box>
    );
    const handleSection = (value) => {
        setSection({ ...section, previeus: value });
    }
    const handlechangeSection = (anchor) => {
        setSection({ ...section, updated: section.previeus, });
    }
    const list_left = (anchor) => (
        <Box
            role="presentation"
            // onClick={toggleDrawer("left", false)}
            sx={{ width: 320 }}
            onKeyDown={toggleDrawer(anchor, false)}
        ><Typography variant='h4' sx={{ fontFamily: "Marcellus", p: 1 }}>
                Change Section
            </Typography>
            <Typography variant='h6' sx={{ fontFamily: "DM Sans", p: 1 }}>
                By Changing Section , you will be shifted to new section. if you are sure about section change select any from blow.
            </Typography>
            <hr />
            <div onClick={() => handleSection("mathematics")} className={styles.selected_section}>
                <Typography variant='h5' sx={{ fontFamily: "DM Sans", p: 1 }}
                    name="mathematics">Mathematics</Typography>
                {section.previeus === "mathematics" ? <CheckIcon /> : ""}
            </div>
            <hr />
            <div onClick={() => handleSection("physics")} className={styles.selected_section}>
                <Typography variant='h5' name="physics" sx={{ fontFamily: "DM Sans", p: 1 }} >Physics</Typography>
                {section.previeus === "physics" ? <CheckIcon /> : ""}
            </div>
            <hr />
            <div onClick={() => handleSection("chemistry")} className={styles.selected_section}>
                <Typography variant='h5' value="chemistry" sx={{ fontFamily: "DM Sans", p: 1 }} >Chemistry</Typography>
                {section.previeus === "chemistry" ? <CheckIcon /> : ""}
            </div>
            <div className={styles.change_section_btn} onClick={toggleDrawer("left", false)}>
                <Button variant='outlined' onClick={toggleDrawer(anchor, false)}>CANCEL</Button>
                <Button variant='contained' color='secondary' onClick={handlechangeSection}>CHANGE SECTION</Button>
            </div>
        </Box>
    );
    const handleSelectOption = (e) => {
        const value = e.target.value;
        const id = e.target.name;
        // setAnswers({ ...answers, answered: true, option: value })
        // const a = vl.forEach((element) => {
        var answer = [...answers];
        const dt = answer && answer.map((val) => val._id);
        const index = dt.indexOf(Number(id));
        console.log(answers, Number(id));
        if (index === -1) {
            answer.push({ _id: Number(id), answered: true, option: value, not_answered: false, review: false, ans_review: false });
            setAnswers(answer);
            console.log("if", answers);
        } else {
            answer.splice(index, 1, { _id: Number(id), answered: true, option: value, not_answered: false, review: false, ans_review: false })
            setAnswers(answer);
            console.log("else", answers);
        }
    }
    ans_filter_id = answers && answers.map(vl => vl._id)
    const a = answers && answers.filter((val) => (questions[liveQuestion]._id) === val._id)
    
    const handleOpen = () => {
        setOpen({ ...open, exit: true })
    };
    const handleOpenSubmit = () => {
        setOpen({ ...open, submit: true })
    };
    const handleClose = () => setOpen({ ...open, exit: false });
    const handleSubmit = (type) => {
        if (type === "submit") {
            setOpen({ ...open, submit: false });
            navigate("/");
        }
        else {
            setOpen({ ...open, submit: false });
        }
    };
    return (
        <div>
            {open.exit ? <Modals handleClose={handleClose} open={open.exit} /> : ""}
            {open.submit ? <Modals handleClose={handleSubmit} open={open.submit} type="submit" /> : ""}
            <Drawer
                anchor="right"
                open={state['right']}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
            <Drawer
                anchor="left"
                open={state['left']}
                onClose={toggleDrawer("left", false)}
            >
                {list_left("left")}
            </Drawer>
            <LiveHeader handleOpen={handleOpen} toggleDrawer={toggleDrawer} />
            <Box className={styles.flex_div}>
                <Box className={sidebar ? styles.left_div : styles.left_div_side} >
                    <div className={styles.subject_btn_div}>
                        <Button variant='outlined' >{section.updated === "mathematics" ? 'MATHMATICS' : section.updated === 'physics' ? "PHYSICS" : "CHEMISTRY"}</Button>
                        <Button variant='outlined' color='secondary' onClick={toggleDrawer("left", true)}>+2 SECTIONS</Button>
                    </div>
                    <hr className={styles.hrh} />
                    {questions.map((val, i) => {
                        if (i < liveQuestion + 1 && i >= liveQuestion) {
                            return (
                                <>
                                    <div key={val._id} className={styles.question_div}>
                                        <div className={styles.subject_btn_div}>
                                            <p className={styles.question_no}> Q.{liveQuestion + 1} of                                      {questions.length} </p>Marks
                                            <span className={styles.positive_marking}>
                                                4.0,</span>-1.0
                                        </div>
                                        <Typography variant='h6' sx={{
                                            ml: "3%",
                                            mr: "0.5%",
                                            fontFamily: "DM Sans",
                                            lineHeight: "1.26rem"
                                        }}>
                                            If the order of Matrix A is xp ,and the order
                                            of p*n.Then the order of matrix Ab is ? {val.question}
                                        </Typography>
                                    </div>
                                    <img className={val.image && styles.question__Image} src={val.image && val.image} />
                                    <Box className={styles.option}>
                                        {val.options.map((vl, i) => (
                                            <>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    // row
                                                    sx={{ display: "flex" }}
                                                    value={answers.filter(v => Number(v._id) === Number(val._id)).map(item => item.option)}
                                                    onChange={handleSelectOption}
                                                    name={val._id}>
                                                    <FormControlLabel
                                                        className={styles.radio_btn}
                                                        control={<Radio color='secondary' />}
                                                        value={i}
                                                        // name={vl._id}
                                                        // id={vl._id}
                                                        label={vl.name}
                                                        color='secondary'
                                                    />
                                                </RadioGroup>
                                            </>
                                        )

                                        )}
                                    </Box>
                                </>
                            )
                        }
                    })}
                    <Box className={sidebar ? styles.footer : styles.footer_side}>
                        <hr />
                        <div className={styles.footer_child_div}>
                            <div className={styles.footer_btn}>
                                <Button startIcon={a[0] && (a[0].review === true) || (a[0] && a[0].ans_review === true) ? <StarIcon /> : <StarBorderOutlinedIcon />} onClick={handleReview}> MARK FOR REVIEW</Button>
                                <Button variant="" startIcon={<DeleteIcon />} onClick={handleClear}>
                                    CLEAR
                                </Button>
                            </div>
                            <div className={styles.next_prev_btn}>
                                <IconButton
                                    size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    disabled={liveQuestion === 0}
                                    onClick={liveQuestion > 0 ? () => indexHandler("-") : null}
                                >
                                    <ArrowLeftIcon fontSize="large" />
                                </IconButton>
                                {liveQuestion + 1} OF {questions.length}
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={liveQuestion >= 0 ? () => indexHandler("+") : null}
                                    size='large'
                                    disabled={liveQuestion === questions.length - 1}
                                >
                                    <ArrowRightIcon fontSize="large" />
                                </IconButton>
                            </div>
                            <div className={styles.next_btn}>
                                <Button variant='contained' disabled={liveQuestion === questions.length - 1} onClick={liveQuestion >= 0 ? () => indexHandler("+") : null} color='secondary' sx={{ display: { xs: "none", sm: "flex" }, mr: '1', width: "100px" }} endIcon={<ArrowForwardIcon />}>NEXT</Button>
                            </div>
                        </div>
                    </Box>
                </Box>
                {sidebar ?
                    <Box className={styles.right_div}>
                        <hr className={styles.hr_ver} />
                        <div className={styles.toggle_btn} onClick={() => setSidebar(false)}><ChevronRightIcon /></div>
                        <div className={styles.right_question_div}>
                            {questions.map((val, i) => {
                                // if (ans_filter_id.length === 0 ? false : ans_filter_id.includes(Number(val._id)) && (answers[i] && answers[i].answered === true))
                                if ((answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].answered === true)) {
                                    return <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{ backgroundColor: "greenyellow", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                                        className={styles.question_number}
                                    >
                                        {i + 1}
                                    </IconButton>
                                }
                                else if ((answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].not_answered === true)) {
                                    return <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{ backgroundColor: "red", fontSize: "17px" }}
                                        className={styles.question_number}
                                        onClick={() => handleClickQuestionNumber(i, val._id)}
                                    >
                                        {i + 1}
                                    </IconButton>
                                } else if (answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].review === true) {
                                    return <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{ backgroundColor: "rgb(134, 113, 251)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                                        className={styles.question_number}
                                    >
                                        {i + 1}
                                    </IconButton>
                                } else if (answers[ans_filter_id.indexOf(val._id)] && answers[ans_filter_id.indexOf(val._id)].ans_review === true) {
                                    return <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{ backgroundColor: "rgb(134, 113, 251)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                                        className={styles.question_number}
                                    >
                                        <div className={styles.review_ans}></div>
                                        {i + 1}
                                    </IconButton>
                                }
                                else {
                                    return <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{ backgroundColor: i === liveQuestion ? "rgb(2, 226, 226)" : "rgb(226, 226, 226)", fontSize: "17px" }} onClick={() => handleClickQuestionNumber(i, val._id)}
                                        className={styles.question_number}
                                    >
                                        {i + 1}
                                    </IconButton>
                                }
                            })}
                        </div>
                        <div className={styles.notify_sign_div}>
                            <div className={styles.notify_sign} >
                                <div>
                                    <div className={styles.answer_color}></div> ANSWERED
                                </div>
                                <div>
                                    <div className={styles.not_answer_color}></div>NOT ANSWERED
                                </div>
                                <div>
                                    <div className={styles.review_color}></div> MARKED FOR REVIEW
                                </div>
                                <div>
                                    <div className={styles.not_visit_color}></div>NOT VISITED
                                </div>
                                <div>
                                    <div className={styles.answer_mark_color}>
                                        <div className={styles.mark_ans}></div></div>ANSWERED MARK FOR REVIEW
                                </div>
                            </div>
                            <h3>All Question Instruction</h3>
                            <h6>COPYRIGHT 2023</h6>                                                                                                    <Button variant='contained' color='success' onClick={handleOpenSubmit} style={{ margin: '0px 10px', width: '90%' }} >SUBMIT</Button>
                        </div>
                    </Box>
                    : <div className={styles.toggle_btn_true} onClick={() => setSidebar(true)}><ChevronLeftIcon />
                    </div>
                }
            </Box >
        </div >
    );
}

export default LiveTest;
