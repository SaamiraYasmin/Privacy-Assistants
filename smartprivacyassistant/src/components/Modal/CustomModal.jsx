import React from 'react';

import {
    Modal,
    Backdrop,
    Fade,
    Box
} from '@mui/material';

const CustomModal = ({ open, setOpen, children }) => {

    const handleClose = () => { setOpen(false) }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        bgcolor: 'background.paper',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default CustomModal;