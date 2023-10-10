import React, { useState } from "react";
// import Data from './data.json'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import Timer from "../user/components/modals/timer/Timer";

function OTP() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();

  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const handleSubmitOtp = () => {
    navigate("/manavrachna/login");
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
      <div className="child_div">
        <h1>Mobile Varification</h1>
        <p style={{ fontSize: "17px" }}>
          Please enter the OTP sent on 9089765121 <br /> via text message
        </p>
        <p style={{ fontSize: "15px" }}>
          Entered incorrect number ?<a href="/manavrachna/verification">EDIT</a>
        </p>
        {/* <div class="otp-input-wrapper">
        <input type="text" maxlength="6" pattern="[0-9]*" autocomplete="off" />
        <svg viewBox="0 0 240 1" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="240" y2="0" stroke="#3e3e3e" stroke-width="2" stroke-dasharray="20,22" />
        </svg>
      </div> */}
        {/* <input id='partitioned' type='text' maxLength="5" /> */}
        <label className="verification_input_label">
          verification code (OTP)
        </label>
        <MuiOtpInput
          className="otp_box"
          sx={{ height: "50px" }}
          value={otp}
          onChange={handleChange}
          display="flex"
          gap={3}
          length={5}
          TextFieldsProps={{
            disabled: false,
            size: "small",
            height: 50,
            placeholder: "",
          }}
        />
        <div className="not_get_otp_div">
          <p>Did not recieve an OTP ?</p>
          <Timer
            setSeconds={setSeconds}
            setMinutes={setMinutes}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
        <Button
          sx={{ fontFamily: "DM Sans", fontSize: "18px" }}
          fullWidth
          onClick={handleSubmitOtp}
          variant="contained"
          color="secondary"
          style={{}}
        >
          {seconds === 0 && minutes === 0 ? "RESEND" : "SUBMIT"}
        </Button>
        <Button
          sx={{ mt: 2, fontFamily: "DM Sans", fontSize: "18px" }}
          fullWidth
          className="SignUpBtn"
        >
          CANCEL
        </Button>
      </div>
    </div>
  );
}

export default OTP;
