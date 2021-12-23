import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Navigation.css";
import logo from "../../../image/logo.png";
import { NavLink } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const Navigation = () => {
    const { user, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar className='app-bar-container' position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            mr: 2,
                            display: { xs: "flex", alignItems: "center" },
                        }}
                    >
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                            src={logo}
                            alt=''
                        />
                        <Typography
                            style={{ fontSize: "24px", fontWeight: 700 }}
                        >
                            Ant's
                            <span style={{ color: "#3572FC" }}>Nest</span>
                        </Typography>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none",
                                justifyContent: "end",
                            },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    className='navigation-link'
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            color: isActive
                                                ? "#6191FD"
                                                : "#000",
                                        };
                                    }}
                                    to='/'
                                >
                                    Home
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    className='navigation-link'
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            color: isActive
                                                ? "#6191FD"
                                                : "#000",
                                        };
                                    }}
                                    to='/listings'
                                >
                                    Listings
                                </NavLink>
                            </MenuItem>

                            {!user.email && (
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink
                                        className='navigation-link'
                                        style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                margin: "1rem 0",
                                                color: isActive
                                                    ? "#6191FD"
                                                    : "#000",
                                            };
                                        }}
                                        to='/sign-in'
                                    >
                                        <div className='sign-in-nav'>
                                            <FaUser />
                                            <span style={{ marginLeft: "5px" }}>
                                                Sign In
                                            </span>
                                        </div>
                                    </NavLink>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                                justifyContent: "end",
                                columnGap: "10px",
                            },
                        }}
                    >
                        <NavLink
                            className='navigation-link'
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "#6191FD" : "#000",
                                };
                            }}
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className='navigation-link'
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "#6191FD" : "#000",
                                };
                            }}
                            to='/listings'
                        >
                            Listings
                        </NavLink>
                    </Box>
                    {!user.email && (
                        <Box>
                            <NavLink
                                className='navigation-link'
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "#6191FD" : "#000",
                                    };
                                }}
                                to='/sign-in'
                            >
                                <div className='sign-in-nav'>
                                    <FaUser />
                                    <span style={{ marginLeft: "5px" }}>
                                        Sign In
                                    </span>
                                </div>
                            </NavLink>
                        </Box>
                    )}

                    {user.email && (
                        <Box sx={{ flexGrow: 0, margin: "0 15px" }}>
                            <Tooltip title='Open settings'>
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt={user.displayName}
                                        src={user.photoURL}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id='menu-appbar'
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    style={{ zIndex: "9999" }}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        onClick={logout}
                                        textAlign='center'
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            columnGap: "8px",
                                        }}
                                    >
                                        <MdLogout />
                                        <span>Logout</span>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    )}
                    {user.email && (
                        <NavLink
                            className='navigation-link add-listing-btn'
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "#6191FD" : "#000",
                                };
                            }}
                            to='/add-listing'
                        >
                            <IoIosAdd className='add-listing-icon' />
                            <span>Add Listing</span>
                        </NavLink>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
