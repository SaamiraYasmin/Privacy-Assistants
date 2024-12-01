import React from 'react';

import {
    Box,
    Button,
    TextField
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Datefilter } from '../../services/filter/datefilter';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DateFilterComponent = ({ filter, setFilter, setOpen }) => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const handleStartChange = (newValue) => {
        setStartDate(newValue);
    };

    const handleEndChange = (newValue) => {
        setEndDate(newValue);
    };

    const handleSubmition = () => {
        var l = [...filter];
        l.push(new Datefilter(startDate, endDate));
        setFilter(l);
        console.log(filter);
        setOpen(false);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box
                    sx={{
                        padding: '1em',
                    }}
                >
                    <DateTimePicker
                        label="Pick Start Time"
                        onChange={handleStartChange}
                        value = {startDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box
                    sx={{
                        padding: '1em',
                    }}
                >
                    <DateTimePicker
                        label="Pick End Time"
                        onChange={handleEndChange}
                        value = {endDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box
                    sx={{
                        padding: '1em',
                    }}
                >
                    <Button 
                        variant="primary"
                        onClick={handleSubmition}
                    >Submit</Button>
                </Box>
            </LocalizationProvider>
        </Box>
    )
}

export default DateFilterComponent;