import React from 'react';

import {
    Box,
    Typography,
    Container,
} from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const ShowErrorHelp = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h2" gutterBottom>No Data Parsed Yet</Typography>
                <Typography variant="h6">
                    It seems that the extension has not yet parsed any data to show you <SentimentDissatisfiedIcon />. 
                </Typography>
                <Typography variant="h6">
                    Please go to the <a href="https://myactivity.google.com/item" target="_blank" rel="noopener noreferrer">dashboard</a> for the extension to parse your data.
                    The link <a href="https://myactivity.google.com/item" target="_blank" rel="noopener noreferrer">"https://myactivity.google.com/item"</a> is the link to trigger parsing.
                </Typography>
                <Typography variant="h6">
                    Click on the browser icon once you have visited the link to see the parsed data.
                    The browser icon will indicate that it is "ON" on the icon.
                </Typography>
            </Box>
        </Container>
    )
}

export default ShowErrorHelp;