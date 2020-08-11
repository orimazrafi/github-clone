import React from 'react'
import { Card, Grid, Container } from '@material-ui/core'
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { ClickedText } from './../ClickedText/ClickedText';
export const HiddenRepositoryCard = props => <Card >
    <Grid container style={{ padding: "20px" }}>
        <Grid>
            <SvgIcon
                height="15px"
                fill="gray"
                position="relative"
                top="5px"
                fillRule="evenodd"
                pathname="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
        </Grid><Grid>

            <ClickedText margin="0 4px" fontSize="16px" color="black" fontWeight="600"> voronianski/jquery.avgrund.js </ClickedText>
        </Grid>
    </Grid>
    <Container>Avgrund is jQuery plugin with new modal concept for popups</Container>
    <Grid container style={{ padding: "20px" }}>
        <span style={{ height: "10px", width: "10px", background: "yellow", padding: "5px", marginRight: "4px", alignSelf: "center", borderRadius: "50%" }}></span>
        JavaScript

            <SvgIcon
            height="15px"
            fill="gray"
            position="relative"
            top="5px"
            right="-4px"
            hover="hover"
            pathname="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" />
        <ClickedText margin="3px 5px 0px 7px">
            1,842</ClickedText>
    </Grid>
</Card>