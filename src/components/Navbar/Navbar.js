import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import style from "./style.module.scss"
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { colors, fonts } from './../../constans';
import { useHistory } from 'react-router-dom';
import { Box, Avatar, Grid, Container, FormControlLabel, Checkbox, NativeSelect, withStyles, FormControl } from '@material-ui/core';
import { DropdownList } from './../DropdownList/DropdownList';
import { DownArrowWithIcon } from './../DownArrowWithIcon/DownArrowWithIcon';
import { useDialogBox, useModal } from '../../hooks/hooks';
import { userName } from './../../helpers';
import { ModalPopup } from './../ModalPopup/ModalPopup';
import { BorderBottom } from '../BorderBottom/BorderBottom';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '4px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
}));
export const Navbar = () => {

    const history = useHistory()
    const classes = useStyles();
    const [status, setStatus] = useState("")
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const [openModal, setOpenModal] = React.useState(false);
    const [busy, setBusy] = React.useState(false);
    const [handleOpenModal, handleCloseModal] = useModal(setOpenModal)
    const [newDialod, setNewDialod] = React.useState(null);
    const [handlNewOpen, handleNewClose, newId, newOpen] = useDialogBox(newDialod, setNewDialod)
    const [profileDialod, setProfileDialod] = React.useState(null);
    const [handleProfileOpen, handleProfileClose, profileId, profileOpen] = useDialogBox(profileDialod, setProfileDialod)
    const handleChange = () => {
        setBusy(pre => pre === false ? true : false)
    }
    const BlueHoverBackground = (props) => <Box className={style.background_container}>
        {props.children}
    </Box>


    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: colors.navbarColor }}>
                <Toolbar>
                    <SvgIcon
                        height="32px"
                        fill={colors.textColor}
                        pathname="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                    <input className={style.searchBox} style={{ fontFamily: fonts.fontFamily, fontSize: "14px", marginLeft: "10px" }} placeholder="Search GitHub" />
                    {[
                        { label: "Pull requests", to: "pull-requests" },
                        { label: "Issues", to: "issues" },
                        { label: "MarketPlace", to: "market-place" },
                        { label: "Explore", to: "explore" },
                    ].map(link =>
                        <Box key={Math.random()} className={style.title} m={2} onClick={() => history.push(`/${link.to}`)}>
                            {link.label}
                        </Box>
                    )
                    }

                    <div className={classes.grow} />
                    <div className={style.right_links}>
                        <IconButton >
                            <SvgIcon
                                height="20px"
                                fill="#fff"
                                pathname="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                                svgPath2="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                            />
                            <span className={style.blue_notification} />
                        </IconButton>
                        <DropdownList
                            id={newId}
                            open={newOpen}
                            anchorEl={newDialod}
                            onClose={handleNewClose}
                        >
                            {[{ label: "New repository", to: "new" },
                            { label: "Import repository", to: "/new/repository" },
                            { label: "New gist", to: "/new/gist" },
                            { label: "New organization", to: "/new/organization" },
                            { label: "New Project", to: "/new/project" },
                            ].map(link => <BlueHoverBackground key={Math.random()}>
                                <Typography className={classes.typography} style={{ padding: "10px 15px", width: "140px" }} >{link.label}</Typography>
                            </BlueHoverBackground>
                            )}

                        </DropdownList>
                        <DownArrowWithIcon handleClick={handlNewOpen} icon={<SvgIcon
                            height="20px"
                            fill="#fff"
                            pathname="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
                        />} />
                        <DownArrowWithIcon handleClick={handleProfileOpen}
                            icon={<Avatar alt="Ori Mazrafi" style={{ height: "30px", width: "30px" }} src="https://avatars2.githubusercontent.com/u/26501267?s=60&v=4" />}
                        />
                        <DropdownList
                            id={profileId}
                            open={profileOpen}
                            anchorEl={profileDialod}
                            onClose={handleProfileClose}
                        >
                            {[
                                { other: <div style={{ padding: "5px 15px", width: "160px" }} >Signed as <b>{userName}</b> </div> },
                                {
                                    other: <div style={{ borderBottom: "1px solid lightgray", borderTop: "1px solid lightgray" }} >
                                        <div style={{ margin: "10px", padding: "5px", border: "1px solid lightgray" }}>
                                            <div style={{ display: "flex" }} className={style.set_status} onClick={handleOpenModal}>

                                                <SvgIcon
                                                    hover="hover"
                                                    position="relative"
                                                    top="4px"
                                                    height="15px"
                                                    fill="black"
                                                    pathname="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                                                />
                                                <Box ml={1}>
                                                    Set status
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                },
                                { label: "Your profile", to: "/profile" },
                                { label: "Your repository", to: "/profile/repository" },
                                { label: "Your Projects", to: "/profile/projects" },
                                { label: "Your Stars", to: "/profile/stars" },
                                { label: "Your Gists", to: "/profile/gists" },
                                { other: <BorderBottom /> },
                                { label: "Upgrade", to: "/profile/upgrade" },
                                { label: "Feature preview", to: "/profile/preview" },
                                { label: "Help", to: "/profile/help" },
                                { label: "Settings", to: "/profile/settings" },
                                { label: "Logout", to: "/logout" },
                            ].map(link => <div key={Math.random()}>
                                {link.label ?
                                    <BlueHoverBackground key={Math.random()}>
                                        <Typography className={classes.typography} style={{ padding: "10px 15px", width: "140px", color: "#24292e" }} >
                                            {link.label}
                                        </Typography>
                                    </BlueHoverBackground>
                                    : <Box style={{ color: "#24292e" }} >
                                        {link.other}
                                    </Box>

                                }

                            </div>

                            )}

                        </DropdownList>


                    </div>
                </Toolbar>
            </AppBar>
            <ModalPopup
                onClose={handleCloseModal}
                open={openModal}
                maxWidth="600px"
                margin="auto"
                position="relative"
            >
                <Container style={{ background: "#f6f8fa", padding: "15px 25px" }}>
                    <Grid container justify="space-between" alignItems="center" >
                        <div style={{ color: "#586069" }}>
                            Edit Status
                        </div>
                        <SvgIcon
                            height="15px"
                            fill="#586069"
                            pathname="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                        />
                    </Grid>
                </Container>
                <div>
                    <Grid container style={{ margin: "15px 10px 10px 25px" }}>
                        <div style={{ border: "1px solid rgba(27,31,35,.15)", padding: "5px 10px", borderRadius: "3px", background: "#fafbfc" }}>
                            <SvgIcon
                                height="20px"
                                fill="#586069"
                                pathname="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                            />
                        </div>
                        <div style={{ border: "1px solid rgba(27,31,35,.15)", borderRadius: "3px", background: "#fafbfc", padding: "5px 200px 5px 5px" }}>
                            what's happening
                        </div>
                    </Grid>
                </div>
                <Grid container>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={busy}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                                style={{ marginLeft: "25px" }}
                            />
                        }
                        label="Busy"
                    />
                    <Grid>
                    </Grid>
                    <Grid style={{ marginLeft: "8.33%" }}>
                        <Grid >
                            When others mention you, assign you, or request your review,
                            GitHub will let them know that you have limited availability.
                        </Grid>

                    </Grid>
                </Grid>
                <BorderBottom margin="10px 0" />
                <FormControl >
                    <Grid container>
                        <Box style={{ alignSelf: "center", marginLeft: "25px", marginRight: "5px" }}>Clear status</Box>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={status}
                            onChange={handleStatus}
                            input={<BootstrapInput />}
                        >
                            <option value={"never"}>
                                never
                        </option>
                            <option value={"in 30 minutes"}>in 30 minutes</option>
                            <option value={"in 4 hours"}>in 4 hours</option>
                            <option value={"today"}>today</option>
                            <option value={"this week"}>this week</option>

                        </NativeSelect>
                    </Grid>

                </FormControl>
                <BorderBottom margin="10px 0" />
                <Container style={{ paddingBottom: "10px" }}>
                    <Grid container>
                        <Grid item xs={6} m={2}>
                            <button className={style.set_status_btn} style={{ textAlign: "center" }} >Set status</button>
                        </Grid>
                        <Grid item xs={6} m={2}>
                            <button className={style.clear_status_btn}>Clear status</button>
                        </Grid>
                    </Grid>
                </Container>
            </ModalPopup>
        </div>
    );
}