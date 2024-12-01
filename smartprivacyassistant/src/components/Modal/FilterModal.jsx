import React from 'react';
import CustomModal from './CustomModal';

import { FilterType, availableTypes, FilterTypeToComponent } from '../Filters/FilterType';

import {
    Box,
    Button,
    Stack
} from '@mui/material';


const FilterModal = ({ open, setOpen, filter, setFilter }) => {
    const [currentMode, setCurrentMode] = React.useState(FilterType.DATE);

    return (
        <CustomModal open={open} setOpen={setOpen}>
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
                <Stack direction="row" spacing={2}
                    sx={{
                        overflow: 'scroll',
                    }}
                >
                    {
                        availableTypes.map((mode) => {
                            return <Button variant="contained" onClick={() => setCurrentMode(mode)}>{mode}</Button>
                        })
                    }
                </Stack>
                <Box
                    sx={{
                        margin: '1em 0'
                    }}
                >
                    {React.createElement(FilterTypeToComponent[currentMode], { filter, setFilter, setOpen })}
                </Box>
            </Box>
        </CustomModal>
    )
}

export default FilterModal;