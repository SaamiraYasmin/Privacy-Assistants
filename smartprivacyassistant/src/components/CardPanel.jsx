import React from 'react';

import {
    Box,
} from '@mui/material';

const CardPanel = ({ children }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {children}
        </Box>
    );
};

export default CardPanel;