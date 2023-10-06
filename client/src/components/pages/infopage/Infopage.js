import { Button, Grid, Typography } from '@mui/material';
import styles from './Infopage.module.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Infopage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.info_div}>

                <ol>
                    <Typography color="secondary" sx={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: "21px" }}>General Instructions</Typography>
                    <li>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server  Lorem </li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c
                        <Grid container columns={{ xs: 12, md: 12 }} >
                            <Grid item xs={12} sm={6} sx={{ display: "flex", columnGap: 2, mt: 1 }}>
                                <div className={styles.notvisited}>
                                </div>
                                <Typography sx={{ whiteSpace: "nowrap", fontFamily: "DM Sans" }}>You have not visited the question yet
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: "flex", columnGap: 2, mt: 1 }}>
                                <div className={styles.not_answered}>
                                </div>
                                <Typography sx={{ whiteSpace: "nowrap", fontFamily: "DM Sans" }}>You have not visited the question yet
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: "flex", columnGap: 2, mt: 1 }}>
                                <div className={styles.annswered}>
                                </div>
                                <Typography sx={{ whiteSpace: "nowrap", fontFamily: "DM Sans" }}>You have not visited the question yet
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: "flex", columnGap: 2, mt: 1 }}>
                                <div className={styles.marked}>
                                </div>
                                <Typography sx={{ whiteSpace: "nowrap", fontFamily: "DM Sans" }}>You have not visited the question yet
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: "flex", columnGap: 2, mt: 1 }}>
                                <div className={styles.ans_marked}>
                                    <div className={styles.marked_dot}></div>
                                </div>
                                <Typography sx={{ whiteSpace: "nowrap", fontFamily: "DM Sans" }}>You have not visited the question yet
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                    <p>Milk</p>
                    <Typography color="secondary" sx={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: "21px" }}>Navigation to a question</Typography>
                    <li>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server  Lorem
                        <p>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem</p>
                        <p>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem</p>
                        <p>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem</p>
                    </li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <Typography color="secondary" sx={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: "21px" }}>Answering Questions</Typography>
                    <li>The clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server  Lorem
                        <ol>
                            <li>The clock ha has been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem</li>
                            <li>The clock haas been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem</li>
                            <li>The clock hahas been set on the server clock has been set on the server clock has been set on the server clock has been set on the server Lorem

                            </li>
                        </ol>
                    </li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <Typography color="secondary" sx={{ fontFamily: "DM Sans", fontWeight: 500, fontSize: "21px" }}>Navigation through sections</Typography>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                    <li>The question pallete at the right clock has been set on the server clock has been set on the server clock has been set on the server c</li>
                </ol>
                <div className={styles.table_div}>
                    <table style={{ width: "100%", marginBottom: '10px' }} >
                        <thead>
                            <th>Subjects</th>

                            <th>Number of Questions</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Exam Duration
                                </td>
                                <td>
                                    3hour
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Subjects
                                </td>
                                <td>
                                    90 (need of answer 75 question)
                                    <br />
                                    (Each Subject will have 30 MCQ out 25 are must)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Type of Questions
                                </td>
                                <td>
                                    30 Objective questions having  4 option jhdj sh sdh sdk sdjh option
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                </td>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                    <br />
                                    JEE Main 2021 Marking  SchemeJEE Main 2021 Marking  Scheme
                                </td>
                            </tr> <tr>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                </td>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                    <br />
                                    300
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <th>Subjects</th>

                            <th>Number of Questions</th>
                            <th>Marks</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Mathematics
                                </td>
                                <td>
                                    30 MCQ - 25 need to answer
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Physics
                                </td>
                                <td>
                                    30 MCQ - 25 need to answer
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Chemistry
                                </td>
                                <td>
                                    30 MCQ - 25 need to answer
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total
                                </td>
                                <td>
                                    90 Question (75 question mandatary)
                                </td>
                                <td>
                                    300
                                </td>
                            </tr> <tr>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                </td>
                                <td>
                                    JEE Main 2021 Marking  Scheme
                                    <br />
                                    300
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.start_tst_btn_div}>
                <Button variant='contained' color='secondary' sx={{ width: "250px", fontFamily: "DM Sans", fontSize: "19px" }} onClick={() => navigate("/test/live")}>Start Test</Button>
            </div>
        </div>
    );
}

export default Infopage;
