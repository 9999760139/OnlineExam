import React, { useState } from 'react';
import styles from './Mobileinput.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Mobileinput(props) {
    const [mobile, setMobile] = useState();

    const handleChangeCode = (e) => {
        setMobile(e);
    }

    return (
        <PhoneInput
            className={styles.phoneinput}
            country={'in'}
            value={props.number}
            autoFormat={true}
            disableSearchIcon={true}
            variant='contained'
            countryCodeEditable={false}
            inputProps={{
                name: 'phone',
                required: true,
                // autoFocus: true
            }}
            // searchStyle={{ borderColor: 'black', bakgrondColor: 'green' }}
            // {props.border && props.border === 'applyform' ? : }
            buttonStyle={props.border && props.border === 'applyform' ?
                {}
                : { paddingLeft: '0px', borderRightHeight: '4px', borderRightWidth: '20px', border: 'none', borderRight: '1px solid black', borderBottom: '1px solid black', borderRadius: '0px' }}
            containerStyle={{
                width: '100%',
                // border: '1px solid #ababab',
                borderRadius: '0px'
            }}
            // dropdownStyle={{width:'200px',padding:'30px',borderColor:'red'}}
            inputStyle={props.border && props.border === 'applyform' ? {
                // paddingLeft:'78px',
                width: '100%',
                // backgroundColor: '#f6f6f6',
                height: '54px',
                outlined: 'true',
                borderRadius: '0px',
                '&:focus': {
                    border: '1px solid black'
                },
            } : {
                // paddingLeft:'78px',
                width: '100%',
                backgroundColor: '#f6f6f6',
                height: '54px',
                outlined: 'true',
                border: 'none', borderBottom: '1px solid black',
                borderRadius: '0px',
                '&:focus': {
                    border: '1px solid black'
                },
            }}
            {...props}
            onChange={props.handleChangeNumber}
        />
    )
}