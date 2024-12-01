import * as React from 'react';
import { ScrapData } from '../types';

import {
    Box,
    Typography
} from '@mui/material';

export interface ScrapDataBaseProps {
    item: ScrapData;
    children?: React.ReactNode;
}

export const ScrapDataBase = (props: ScrapDataBaseProps) => (
    <Box>
        <Typography>
            {props.item._title}
        </Typography>
        <Typography>
            {props.item._description}
        </Typography>
    </Box>
)