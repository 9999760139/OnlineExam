import React, { useState } from 'react'
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import MobileVarification from './MobileVarification';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
    const location = useLocation();
    // const signup_path = location.pathname("/manavrachna/signup")
    const login_path = location.pathname.includes("/manavrachna/login")
    const [user, setUser] = useState({ password: "", email: "", showPassword: false, passStrong: 0 });
    console.log(login_path)
    const navigate = useNavigate();
    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value.trim();
        setUser({ ...user, [name]: val });
        if (user.password.length >= 6) {
            setUser({ ...user, [name]: val, passStrong: 3 })
            console.log('click', user.password.length)
        } else if (user.password.length >= 4) {
            setUser({ ...user, [name]: val, passStrong: 2 })
            console.log('click', user.password.length)
        } else if (user.password.length >= 2) {
            setUser({ ...user, [name]: val, passStrong: 1 })
            console.log('click', user.password.length)
            // } else if (user.password.length === 8) {
            //     setUser({ ...user,[name]: val, passStrong: 3 })
        } else {
            setUser({ ...user, [name]: val, passStrong: 0 })
            console.log('click', user.password.length)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password.length < 8) {
            alert("Password must atleast 8 charcter")
        } else {
            navigate("/manavrachna/verification")
        }
    };
    return (
        <div className='content' style={{ display: 'flex', flexDirection: 'column', gap: '0.4em', alignItems: 'center' }}>
            <div className='login_logo'>
                <img src='/img/logo.png' height='32px' width='70px' />
            </div>
            <h1 className='login_heading'>Create Your Account</h1>
            <Typography variant='h6' sx={{ fontFamily: "DM Sans", mt: 1 }}>Already have an account ?<span onClick={() => navigate(login_path ? "/manavrachna/signup" : "/manavrachna/login")}>{login_path ? "Sign up" : "Sign in"}</span></Typography>
            <form onSubmit={handleSubmit} className='login_form' style={{ textAlign: 'left' }} >
                <label className='login_input_label'>Email*</label>
                {/* <input style={{ width: '18.5vw' }} type='text'></input> */}
                <TextField
                    //   className={styles.inputs}
                    variant="outlined"
                    type="text"
                    name="biography"
                    //   value={props.detail && props.detail.biography}
                    placeholder="Enter Your Biography"
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        height: 40,
                        borderRadius: "6px",
                        mt: 0.5,
                        mb: 2,
                        fontFamily: "DM Sans",
                        fontStyle: "normal",
                        fontWeight: "400",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                // border: "none",
                                // opacity: 0.5
                            },
                            // '&:hover fieldset': {
                            //     borderColor: 'yellow',
                            // },
                            // '&.Mui-focused fieldset': {
                            //     borderColor: 'green',
                            // },
                        },
                    }}
                    fullWidth
                />
                <label className="login_input_label" >Password*</label>
                {/* <input style={{ width: '18.5vw' }} type='text'></input> */}
                {/* <TextField
                    //   className={styles.inputs}
                    variant="outlined"
                    type="text"
                    name="biography"
                    //   value={props.detail && props.detail.biography}
                    placeholder="Enter Your Biography"
                    //   onChange={props.handleChange}
                    sx={{
                        backgroundColor: "white",
                        height: 40,
                        borderRadius: "6px",
                        mt: 0.5,
                        mb: 2,
                        fontFamily: "DM Sans",
                        fontStyle: "normal",
                        fontWeight: "400",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                // border: "none",
                                // opacity: 0.5
                            },
                            // '&:hover fieldset': {
                            //     borderColor: 'yellow',
                            // },
                            // '&.Mui-focused fieldset': {
                            //     borderColor: 'green',
                            // },
                        },
                    }}
                    fullWidth
                /> */}
                <TextField
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    sx={{
                        height: 40,
                        color: "#636365",
                        "& .MuiOutlinedInput-notchedOutline": { border: "non" },
                        "& .MuiInputBase-root": {
                            // height: 40
                        },
                        mb: 2,
                    }}
                    // inputProps={{
                    //     style: {
                    //         height: 10,
                    //     },
                    // }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" >
                                <IconButton
                                    onClick={() => setUser({ ...user, showPassword: !user.showPassword })}
                                // onMouseDown={handleMouseDownPassword}
                                >
                                    {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    id="outlined-basic"
                    type={user.showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    fullWidth
                    variant="outlined"
                />
                <Typography variant='label' sx={{ fontFamily: 'DM Sans', mt: 2 }}>Password stength is strong</Typography>

                {/* <Link to={'/verification'}> */}
                {window.location.pathname === "/manavrachna/signup" ?
                    <div className='signup_strong_pass_main_div'>
                        {user.passStrong === 3 ?
                            <>
                                <div className="signup_strong_pass_div"></div>
                                <div className="signup_strong_pass_div"></div>
                                <div className="signup_strong_pass_div"></div>
                            </> : user.passStrong === 2 ?
                                <>
                                    <div className="signup_strong_pass_div"></div>
                                    <div className="signup_strong_pass_div"></div>
                                </> :
                                user.passStrong === 1 ?
                                    <div className="signup_strong_pass_div"></div>
                                    :
                                    ""}
                    </div> :
                    ""
                }
                <Button className='SignUpBtn' type="submit" sx={{ mt: 2 }} color='secondary' fullWidth variant="contained">Sign Up</Button>
                {/* </Link> */}
            </form >

            <Typography variant='label' sx={{ fontFamily: "DM Sans", fontSize: "22px", fontWeight: 700, mt: 2 }}>Continue without signUp? <a href='#'>Explore</a></Typography>

        </div >
    )
}

export default LoginPage
