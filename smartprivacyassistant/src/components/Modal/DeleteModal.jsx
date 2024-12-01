import React from 'react';

import CustomModal from './CustomModal';

import {
    Box, Typography, Button
} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

const DeleteModal = ({ open, setOpen, item }) => {

    const handleClose = () => { setOpen(false) }

    const agreeActivity = () => {
        console.log("Deleting this item");
    }

    return (
        <CustomModal open={open} setOpen={setOpen}>
            <>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        pt: '1em',
                    }}
                >
                    <CancelIcon sx={{
                        fontSize: '15em',
                        color: 'error.main',
                    }} />
                    <Box
                        sx={{
                            py: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '2em',
                                color: 'primary.grey',
                            }}
                        >Are you sure?</Typography>
                    </Box>
                    <Box
                        sx={{
                            py: 1.5,
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: 'grey.600',

                            }}
                        >
                            Do you really want to delete this activity from your dashboard? This process cannot be undone.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            pt: 4,
                            pb: 2,
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: 'grey.400',
                                px: 5,
                                py: 1,
                                mx: 2,
                                '&:hover': {
                                    backgroundColor: 'grey.500',
                                }
                            }}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: 'error.main',
                                px: 5,
                                py: 1,
                                mx: 2,
                                '&:hover': {
                                    backgroundColor: 'error.dark',
                                }
                            }}
                            onClick={
                                () => {
                                    agreeActivity();
                                    handleClose();
                                }
                            }
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </>
        </CustomModal>
    )
}

export default DeleteModal;