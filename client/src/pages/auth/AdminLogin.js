import React, { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function AdminLogin({ setSigned }) {
  const location = useLocation();
  const login_path = location.pathname.includes("/manavrachna/admin/login");
  const [user, setUser] = useState({
    password: "",
    email: "",
    showPassword: false,
    passStrong: 0,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value.trim();
    setUser({ ...user, [name]: val });
    if (user.password.length >= 6) {
      setUser({ ...user, [name]: val, passStrong: 3 });
    } else if (user.password.length >= 4) {
      setUser({ ...user, [name]: val, passStrong: 2 });
    } else if (user.password.length >= 2) {
      setUser({ ...user, [name]: val, passStrong: 1 });
    } else {
      setUser({ ...user, [name]: val, passStrong: 0 });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length < 8) {
      alert("Password must atleast 8 charcter");
    } else if (user.email !== "masteradmin01@gmail.com") {
      alert("please enter valid mail id");
    } else if (user.password !== "12345678") {
      alert("please enter valid password");
    } else {
      setSigned(true);
      navigate("/admin/");
    }
  };
  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4em",
        alignItems: "center",
      }}
    >
      <div className="login_logo">
        <img src="/img/logo.png" height="32px" width="70px" alt="img" />
      </div>
      <h1 className="login_heading">Login Your Account</h1>
      {/* <Typography
        variant="h6"
        sx={{ fontFamily: "DM Sans", mt: 1, cursor: "pointer" }}
      >
        New to Manavrachna ?
        <span onClick={() => navigate("/manavrachna/signup")}> Sign up</span>
      </Typography> */}
      <form
        onSubmit={handleSubmit}
        className="login_form"
        style={{ textAlign: "left" }}
      >
        <label className="login_input_label">Email*</label>
        <TextField
          variant="outlined"
          type="email"
          name="email"
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
              "& fieldset": {},
            },
          }}
          fullWidth
        />
        <label className="login_input_label">Password*</label>
        <TextField
          onChange={handleChange}
          name="password"
          value={user.password}
          sx={{
            height: 40,
            color: "#636365",
            "& .MuiOutlinedInput-notchedOutline": { border: "non" },
            "& .MuiInputBase-root": {},
            mb: 2,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setUser({ ...user, showPassword: !user.showPassword })
                  }
                >
                  {user.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          id="outlined-basic"
          type={user.showPassword ? "text" : "password"}
          placeholder="Enter your password"
          fullWidth
          variant="outlined"
        />
        {/* <Typography variant="label" sx={{ fontFamily: "DM Sans", mt: 2 }}>
          Password stength is strong
        </Typography> */}
        <Button
          className="SignUpBtn"
          type="submit"
          sx={{ mt: 2 }}
          color="secondary"
          fullWidth
          variant="contained"
        >
          Sign in
        </Button>
        {/* </Link> */}
      </form>

      {/* <Typography
        variant="label"
        sx={{ fontFamily: "DM Sans", fontSize: "22px", fontWeight: 700, mt: 2 }}
      >
        Continue without signUp? <a href="#">Explore</a>
      </Typography> */}
    </div>
  );
}

export default AdminLogin;
