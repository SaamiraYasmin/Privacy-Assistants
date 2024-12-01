import React from 'react';
import { MixedScrapData } from '../types';
import { plainToClass } from 'class-transformer';
import * as Types from '../types';

import {
    Box,
} from '@mui/material';

export interface MixedScrapDataBaseProps {
    item: MixedScrapData;
    children?: React.ReactNode;
}

export const MixedScrapDataBase = (props: MixedScrapDataBaseProps) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        }}
    >
        {
            props.item._data.map((element, index) => {
                const elem = plainToClass(Types.TypeToClass.get(element._type), element);
                return (
                    <Box
                        key={index}
                        sx={{
                            padding: '10px',
                        }}
                    >
                        {
                            elem instanceof Types.ScrapData ? elem.render() : null
                        }
                    </Box>
                )
            })
        }
    </Box>
)