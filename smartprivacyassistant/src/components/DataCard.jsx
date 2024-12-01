import React from 'react';
import { ScrapDataType } from 'scraperlib';

import {
    Card,
    CardContent,
    Typography,
    Stack,
    Box,
    Grid,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import ArcProgress from 'react-arc-progress';
import DeleteModal from './Modal/DeleteModal';
import DetailModal from './Modal/DetailModal';


const DataCard = ({ item }) => {

    const deleteActivity = () => {
        setDelModalOpen(true);
    }

    const [delModalOpen, setDelModalOpen] = React.useState(false);
    const [detailModalOpen, setDetailModalOpen] = React.useState(false);

    return (
        <Card
            sx={{
                my: '0.75em',
                width: '80%',
                height: '20vh',
                borderRadius: '10px',
            }}
        >
            <CardContent
                sx={{
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    paddingBottom: '0 !important'
                }}
            >
                <Grid
                    container
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Grid item
                        xs={2}
                        sx={{
                            boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                // backgroundColor: item._class === "Unsafe" ? 'red.main' : 'primary.dark'
                                backgroundColor: item._probability > 0.5 ? 'red.main' : 'primary.dark'
                            }}
                        >
                            <Tooltip title="Risk Percentage" arrow>
                            <Box
                                sx={{
                                    position: 'relative',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-25%, -50%)',
                                    '& div': {
                                        margin: 0,
                                        padding: 0,
                                        marginRight: 0,
                                        paddingRight: 0,
                                    },
                                    '& svg': {
                                        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
                                    }
                                }}
                            >
                                <ArcProgress
                                    progress={item._probability}
                                    text={`${item._probability * 100}%`}
                                    arcStart={270}
                                    arcEnd={630}
                                    lineCap="square"
                                    fillColor="#F3F3F3"
                                    // emptyColor={item._class === "Unsafe" ? '#A63737' : '#2D3047'}
                                    emptyColor={item._probability > 0.5 ? '#A63737' : '#2D3047'}
                                    thickness={5}
                                    size={80}
                                    textStyle={{
                                        color: '#ffffff',
                                        font: `'Manrope', sans-serif`,
                                    }}
                                />
                            </Box>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{
                                height: '100%',
                                px: '1.5rem',
                            }}
                        >
                            <Stack
                                spacing={1.5}
                                sx={{
                                    position: 'relative',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                <Typography
                                    variant='h6'
                                >
                                    {item._title}
                                </Typography>
                                <Typography>
                                    {item._datetime.toLocaleString()}&nbsp;&nbsp;|&nbsp;&nbsp;<Typography
                                        component="span"
                                        sx={{
                                            color: 'blue.dark'
                                        }}
                                        onClick={() => setDetailModalOpen(true)}
                                    >
                                        More Details
                                    </Typography>
                                </Typography>
                                <Typography>
                                    Is this result accurate: <Typography
                                        component="span"
                                        sx={{
                                            color: 'blue.dark'
                                        }}
                                    >
                                        Yes
                                    </Typography> | <Typography
                                        component="span"
                                        sx={{
                                            color: 'blue.dark'
                                        }}
                                    >
                                        No
                                    </Typography>
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box
                            sx={{
                                alignItems: 'right',
                                textAlign: 'right',
                            }}
                        >
                            <Tooltip title="Delete from activity dashboard" arrow>
                                <IconButton onClick={deleteActivity}>
                                    <CloseIcon
                                        sx={{
                                            width: '1.3em',
                                            height: '1.3em',
                                            color: 'primary.grey',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
            <DeleteModal open={delModalOpen} setOpen={setDelModalOpen} item={item}/>
            <DetailModal open={detailModalOpen} setOpen={setDetailModalOpen} item={item} />
        </Card>
    );
};

export default DataCard;