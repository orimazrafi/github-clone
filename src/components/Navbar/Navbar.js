import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import style from "./style.module.scss"
// import SvgIcon from '@material-ui/icons/Menu';
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { colors, fonts } from './../../constans';
import { Link, useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { DropdownList } from './../DropdownList/DropdownList';
import { Popover } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: "16px",
        fontWeight: "600",
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        fonFamily: fonts.fontFamily
        // backgroundColor: "hsla(0,0%,100%,.125)",

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        fontSize: "14px",
        fontWeight: "400",
        color: "hsla(0,0%,100%,.7)",

        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
export const Navbar = () => {
    const history = useHistory()
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: colors.navbarColor }}>
                <Toolbar>
                    <SvgIcon
                        height="32px"
                        fill={colors.textColor}
                        pathname="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                    <input className={style.searchBox} style={{ fontFamily: fonts.fontFamily, fontSize: "14px" }} placeholder="Search GitHub" />
                    {[
                        { label: "Pull requests", to: "pull-requests" },
                        { label: "Issues", to: "issues" },
                        { label: "MarketPlace", to: "market-place" },
                        { label: "Explore", to: "explore" },
                    ].map(link =>
                        <Box key={Math.random()} className={classes.title} m={2} onClick={() => history.push(`/${link.to}`)}>
                            {link.label}
                        </Box>
                    )
                    }

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            {/* <Badge badgeContent={4} color="secondary"> */}
                            <SvgIcon
                                height="20px"
                                fill="#fff"
                                pathname="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                                svgPath2="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                            />
                            <span className={style.blue_notification} ></span>
                            {/* <MailIcon /> */}
                            {/* </Badge> */}
                        </IconButton>
                        <DropdownList
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                        >
                            {[{ label: "New repository", to: "new" },
                            { label: "Import repository", to: "/new/repository" },
                            { label: "New gist", to: "/new/gist" },
                            { label: "New organization", to: "/new/organization" },
                            { label: "New Project", to: "/new/project" },
                            ].map(link =>
                                <Typography key={Math.random()} className={classes.typography} style={{ padding: "10px 15px", width: "140px" }} >{link.label}</Typography>
                            )}

                        </DropdownList>
                        <IconButton onClick={handleClick} >

                            <SvgIcon
                                height="20px"
                                fill="#fff"
                                pathname="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
                            />

                            <ArrowDropDownIcon
                                style={{ color: "white" }} />


                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        {/* <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton> */}
                    </div>
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
            {renderMenu} */}
        </div>
    );
}