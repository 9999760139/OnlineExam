import React, { useState } from 'react'
import styles from './MobileVefication.module.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Mobileinput from '../components/mobileinput/Mobileinput';
// import PhoneInput from 'react-phone-number-input'


function MobileVarification() {
  const [number, setNumber] = useState('')
  const navigate = useNavigate();

  const handleSubmitOtp = () => {
     if(number.length<12){
    alert(`please enter 10 digit Contact No. ${number.length}`)
  }else{
    navigate("/manavrachna/otp")
  }
  }

  const handleChangeNumber = (e) => {
    setNumber(e);
  };
  return (
    <div className={styles.main_div} >
      <div className={styles.child_div}>
        <h1>Mobile Varification</h1>
        <p className={styles.text}>Verify your account by signing in through OTP</p>

        <form className={styles.form} style={{ textAlign: 'left' }}  >
          <label className={styles.input_label}>Phone number*</label>
          {/* <Flags></Flags> */}
          {/* <PhoneInput style={{width: '18.5vw'}} placeholder="Enter the Number" value={value} onChange={setValue}/> */}
          <Mobileinput handleChangeNumber={handleChangeNumber} number={number} border="applyform" />
          {/* <input style={{ width: '18.5vw' }} type='text'></input> */}
          <Button className='SignUpBtn' color='secondary' sx={{mt:2,height:'40px',fontSize:"18px",fontFamily:"DM Sans"}} fullWidth onClick={handleSubmitOtp} variant="contained">Submit</Button>
         </form>
        {/* <Link to={'/OTP'}> */}
        {/* </Link> */}
        <Button className='SignUpBtn' onClick={()=>navigate("/manavrachna/signup")} sx={{mt:2,fontFamily:"DM Sans",fontSize:"18px"}} fullWidth>Cancel</Button>
      </div>
    </div>
  )
}

export default MobileVarification
