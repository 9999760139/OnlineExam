import * as React from 'react';
import styles from './Modal.module.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Modals(props) {

    return (
        <>{props.type === "submit" ?
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={props.open}>
                    <Box className={styles.modal_box}>
                        <div className={styles.cancel_icon}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                sx={{ fontSize: "17px" }}
                                onClick={props.handleClose}
                                className={styles.question_number}
                            >
                                <CancelOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className={styles.content_div}>

                            <Typography variant='h4' id="transition-modal-description" sx={{ mt: 2, fontFamily: 'Marcellus',fontSize:"30px" }}>
                                Are Your Sure for Submit Test ?
                            </Typography>
                            <Button onClick={()=>props.handleClose("submit")} color='success' sx={{ fontFamily: 'DM Sans', my: 2 }} fullWidth variant='contained' >Submit</Button>
                            <Button onClick={()=>props.handleClose("cancel")} color='success' fullWidth variant='' sx={{ fontFamily: 'DM Sans', mb: 2 }}>CANCEL</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
            :
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={props.open}>
                    <Box className={styles.modal_box}>
                        <div className={styles.cancel_icon}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                sx={{ fontSize: "17px" }}
                                onClick={props.handleClose}
                                className={styles.question_number}
                            >
                                <CancelOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className={styles.content_div}>

                            <Typography variant='h4' id="transition-modal-description" sx={{ mt: 2, fontFamily: 'Marcellus' }}>
                                Exit Test!
                            </Typography>
                            <Typography id="transition-modal-description" variant='h6' sx={{ fontFamily: 'DM Sans', mt: 2, mb: 1 }}>
                                Are you sure, you want to exit test ?
                            </Typography>
                            <Button onClick={props.handleClose} color='success' sx={{ fontFamily: 'DM Sans', my: 2 }} fullWidth variant='contained'>OK</Button>
                            <Button onClick={props.handleClose} color='success' fullWidth variant='' sx={{ fontFamily: 'DM Sans', mb: 2 }}>CANCEL</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        }
        </>
    );
}
