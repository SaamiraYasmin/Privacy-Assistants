import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SideMenu from './SideMenu';

import {
    goTo
} from "react-chrome-extension-router";

import ProfilePage from '../pages/ProfilePage';


function CustomAppbar() {
    const [openMenu, setOpenMenu] = React.useState(true);

    const toggleNavMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleAvatarClick = () => {
        goTo(ProfilePage);
    }

    return (
        <>
            <AppBar
                color="primary"
                elevation={3}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                ml: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 400,
                                fontSize: '1.5em !important',
                                textDecoration: 'none',
                                color: "black"
                                
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                sx = {{
                                    fontSize: '1.5rem !important',
                                    fontWeight: 400,
                                    color: "blue.light"
                                }}
                            >AudioSense&nbsp;</Typography>
                            <Typography
                                variant="h6"
                                noWrap
                                sx = {{
                                    fontSize: '1.5rem !important',
                                    fontWeight: 400,
                                }}
                            >Activity Dashboard</Typography>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            {/* <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu> */}
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                sx = {{
                                    fontSize: 22,
                                    fontWeight: 400,
                                    color: "blue.light"
                                }}
                            >AudioSense&nbsp;</Typography>
                            Activity Dashboard
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings" arrow>
                                <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <SideMenu open={openMenu} />
        </>
    )
}

export default CustomAppbar;