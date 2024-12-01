import React from 'react';


import {
    Container,
    Input,
    TextField,
    Box,
    Button
} from '@mui/material';
import {
    goTo
} from 'react-chrome-extension-router';
import Dashboard from '../pages/Dashboard';



const UserForm = () => {

    const onSubmit = () => {
        console.log("Submitted");
        goTo(Dashboard, { order: "rp" });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    marginTop: 3,
                }}
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </Box>
            <Box
                sx={{
                    marginTop: 3,
                }}
            >
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <Box
                sx={{
                    marginTop: 3,
                }}
            >
                <Input
                    type="number"
                    placeholder="Age"
                />
            </Box>
            <Box
                sx={{
                    marginTop: 7,
                }}
            >
                <Button variant="contained" onClick={onSubmit}>Submit</Button>
            </Box>
        </Box>
    )
}

export default UserForm;