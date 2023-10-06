import React from 'react'
import { useState, useEffect } from 'react';

function Timer(props) {
    const [otp, setOtp] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            if (props.seconds > 0) {
                props.setSeconds(props.seconds - 1);
            }

            if (props.seconds === 0) {
                if (props.minutes === 0) {
                    clearInterval(interval);
                } else {
                    props.setSeconds(59);
                    props.setMinutes(props.minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [props.seconds]);
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="countdown-text">
                        {props.seconds > 0 || props.minutes > 0 ? (
                            <p>
                                 {props.minutes < 10 ? `0${props.minutes}` : props.minutes}:
                                {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
                            </p>
                        ) : (
                            <p></p>
                        )}

                        
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Timer
