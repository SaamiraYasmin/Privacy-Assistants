import React from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

const LinkCardContent = ({ item }) => {
    return (
        <Box>
            <hr />
            <Typography variant="h6">Link Data</Typography>
            <Typography variant="body1"><a href={item._url}>{item._title}</a></Typography>
        </Box>
    );  
};

export {LinkCardContent};