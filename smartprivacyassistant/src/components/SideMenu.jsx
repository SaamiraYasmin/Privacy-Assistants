import React from 'react';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import SortIcon from '@mui/icons-material/Sort';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShieldIcon from '@mui/icons-material/Shield';
import HomeIcon from '@mui/icons-material/Home';

import {
    goTo
} from 'react-chrome-extension-router';


import SettingsPage from '../pages/SettingsPage';
import Dashboard from '../pages/Dashboard';

function SideMenu({ open }) {
    const drawerWidth = 240;

    const [sortOpen, setSortOpen] = React.useState(true);
    const [order, setOrder] = React.useState("rp");

    const toggleSortClick = () => {
        setSortOpen(!sortOpen);
    }

    React.useEffect(() => {
        goTo(Dashboard, { order: order })
    }, [order])

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '0px',
                        backgroundColor: 'primary.main'
                    },
                    zIndex: 1000,
                    position: 'relative',
                    backgroundColor: 'primary.main',
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <List
                    sx={{
                        mt: '6em',
                    }}
                >
                    <ListItemButton onClick={() => goTo(Dashboard, { order })}>
                        <ListItemIcon>
                            <HomeIcon sx={{
                                color: 'black',
                            }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography
                                    color='primary.grey'
                                >
                                    Home
                                </Typography>
                            }
                        />
                    </ListItemButton>
                    <ListItemButton onClick={() => goTo(SettingsPage)}>
                        <ListItemIcon>
                            <SettingsIcon sx={{
                                color: 'black',
                            }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography
                                    color='primary.grey'
                                >
                                    Configure Settings
                                </Typography>
                            }
                        />
                    </ListItemButton>
                    <ListItemButton onClick={toggleSortClick}>
                        <ListItemIcon>
                            <SortIcon sx={{
                                color: 'black',
                            }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography
                                    color='primary.grey'
                                >
                                    Sort by
                                </Typography>
                            }
                        />
                        {sortOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={sortOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => {
                                setOrder("date");
                            }}>
                                <ListItemIcon>
                                    <CalendarTodayIcon
                                        sx={{
                                            color: 'black',
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography
                                            color='primary.grey'
                                        >
                                            Date and Time
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => {
                                setOrder("rp");
                            }}>
                                <ListItemIcon>
                                    <ShieldIcon
                                        sx={{
                                            color: 'black',
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography
                                            color='primary.grey'
                                        >
                                            Risk Percentage
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider
                        sx={{
                            width: '80%',
                            margin: 'auto',
                            borderWidth: '1px',
                            backgroundColor: 'black',
                            my: '0.5rem',
                        }}
                    />
                    <ListItemButton>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography
                                    color='primary.grey'
                                    textAlign='center'
                                >
                                    Help & Feedback
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </List>
                <Box
                    sx={{
                        position: "relative",
                        textAlign: "center",
                        paddingBottom: 2,
                        width: "100%",
                        marginTop: 'auto',
                    }}
                >
                    <Typography
                        component="a"
                        href="/"
                        color='primary.grey'
                        sx={{
                            display: 'inline-block',
                            textDecoration: 'none',
                        }}
                    >
                        Privacy
                    </Typography>
                    <Typography
                        color='primary.grey'
                        sx={{
                            display: 'inline-block',
                        }}
                    >
                        &nbsp;•&nbsp;
                    </Typography>
                    <Typography
                        component="a"
                        href="/"
                        color='primary.grey'
                        sx={{
                            display: 'inline-block',
                            textDecoration: 'none',
                        }}
                    >
                        Terms
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default SideMenu;