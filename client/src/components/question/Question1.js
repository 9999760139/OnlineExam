import React from 'react';
import styles from './Question1.module.css';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const data = [
    {
        id: 1,
        question_text: "",
        question_img: "",
        option_text: "",
        question_img: ""
    }
]

const Question1 = () => {
    return (
        <Box className={styles.main}>
            <h2>Choose the correct answer :</h2>
            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>1.</div>
                    <Box className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </Box>
                </Box>
                <div className={styles.img_div}>
                    <img src='/img/question.png' alt='img' width="16px" height="12px" />
                </div>
            </Box>
            <Box className={styles.options}>
                <Box className={styles.option}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        //    value={props.apply.completion}
                        //    onClick={props.handleChangeApplyData}
                        name="completion">
                        <FormControlLabel
                            value="first"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="First"
                        />
                        <FormControlLabel
                            value="second"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="Second"
                        />
                        <FormControlLabel
                            value="third"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="Third"
                        />
                        <FormControlLabel
                            value="four"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="Fourth"
                        />
                    </RadioGroup>
                </Box>
                {/* <h3 className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </h3> */}

                {/* </Box> */}
            </Box>

            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>2.</div>
                    <Box className={styles.question_text}>The s electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </Box>
                </Box>
                <div className={styles.main_img_div}>
                    <div className={styles.img_divs}>
                        <img src='/img/option.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option1.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option1.png' alt='img' width="100%" height="100%" />
                    </div>
                </div>
            </Box>
            <Box className={styles.options}>
                <Box className={styles.option}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        // row
                        sx={{ display: "flex" }}
                        //    value={props.apply.completion}
                        //    onClick={props.handleChangeApplyData}
                        name="completion">
                        <FormControlLabel
                            value="first"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="a & b"
                        />
                        <FormControlLabel
                            value="second"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="c & b"
                        />
                        <FormControlLabel
                            value="third"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="a & d"
                        />
                        <FormControlLabel
                            value="four"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="c & b"
                        />
                    </RadioGroup>
                </Box>
                {/* <h3 className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </h3> */}

                {/* </Box> */}
            </Box>

            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>3.</div>
                    <Box className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </Box>
                </Box>
                <div className={styles.img_div}>
                    <img src='/img/question.png' alt='img' width="100%" height="100%" />
                </div>
            </Box>
            <Box className={styles.options}>
                <Box className={styles.option}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        row
                        sx={{ display: "flex" }}
                        //    value={props.apply.completion}
                        //    onClick={props.handleChangeApplyData}
                        name="completion">
                        <FormControlLabel
                            value="first"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label={<img src="/img/option.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="second"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}

                            label={<img src="/img/option1.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="third"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}

                            label={<img src="/img/option.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="four"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}

                            label={<img src="/img/option1.png" height='150px' width='140px' />}
                        />
                    </RadioGroup>
                </Box>
                {/* <h3 className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </h3> */}

                {/* </Box> */}
            </Box>

            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>4.</div>
                    <Box className={styles.question_text}>The s electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </Box>
                </Box>
            </Box>
            <Box className={styles.options}>
                <Box className={styles.option}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        // row
                        sx={{ display: "flex" }}
                        //    value={props.apply.completion}
                        //    onClick={props.handleChangeApplyData}
                        name="completion">
                        <FormControlLabel
                            value="first"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="First"
                        />
                        <FormControlLabel
                            value="second"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="Second"
                        />
                        <FormControlLabel
                            value="third"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="Third"
                        />
                        <FormControlLabel
                            value="four"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label="all of these"
                        />
                    </RadioGroup>
                </Box>
                {/* <h3 className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </h3> */}

                {/* </Box> */}
            </Box>

            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>5.</div>
                    <Box className={styles.question_text}>The s electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one ________________
                    </Box>
                </Box>
            </Box>
            <Box className={styles.question_main_div}>
                <Box className={styles.question_div}>
                    <div className={styles.flex_left}>6.</div>
                    <Box className={styles.question_text}>The s electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </Box>
                </Box>
                <div className={styles.main_img_div}>
                    <div className={styles.img_divs}>
                        <img src='/img/option.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option1.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option.png' alt='img' width="100%" height="100%" />
                    </div>
                    <div className={styles.img_divs}>
                        <img src='/img/option1.png' alt='img' width="100%" height="100%" />
                    </div>
                </div>
            </Box>
            <Box className={styles.options}>
                <Box className={styles.option}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="yes"
                        row
                        sx={{ display: "flex" }}
                        //    value={props.apply.completion}
                        //    onClick={props.handleChangeApplyData}
                        name="completion">
                        <FormControlLabel
                            value="first"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label={<img src="/img/option.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="second"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label={<img src="/img/option1.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="third"
                            // sx={{  width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label={<img src="/img/option.png" height='150px' width='140px' />}
                        />
                        <FormControlLabel
                            value="four"
                            // sx={{ backgroundColor: "#f6f6f6", width: "110px", borderRadius: "6px", px: 1 }}
                            control={<Radio />}
                            label={<img src="/img/option1.png" height='150px' width='140px' />}
                        />
                    </RadioGroup>
                </Box>
                {/* <h3 className={styles.question_text}>The electric potential at the centre of two concentric
                        half rings of radii R1 and R2, having same linear
                        charge density  is: this is question type one
                    </h3> */}

                {/* </Box> */}
            </Box>

        </Box>
    );
}

export default Question1;
