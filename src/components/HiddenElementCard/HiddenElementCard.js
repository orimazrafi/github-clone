import React from 'react'
import { Card, Grid, Avatar, Container } from '@material-ui/core'
import { ClickedText } from '../ClickedText/ClickedText'
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { BorderBottom } from '../BorderBottom/BorderBottom';
export const HiddenElementCard = props => <Card >
    <Grid container style={{ padding: "20px" }}>
        <Grid> <Avatar alt={props.userName} style={{ height: "52px", width: "52px" }} height="52px" width="52px" src={props.img} /></Grid>
        <Grid>
            <Container>
                <Grid container>
                    <ClickedText fontSize="16px" fontWeight="600" color="black">
                        {props.fullName}
                    </ClickedText>
                    <ClickedText margin="2px 0 0 10px" fontSize="14px">
                        {props.lastName}

                    </ClickedText>
                </Grid>
            </Container>
            <Container>{props.languages}</Container>
            <Container>
                <SvgIcon
                    height="15px"
                    fill="gray"
                    position="relative"
                    top="3px"
                    fillRule="evenodd"
                    pathname="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" /> Berlin, Germany</Container>
        </Grid>
    </Grid>
    <BorderBottom margin="10px 0" />
    <Grid container>
        <Grid style={{ padding: "10px 20px" }}>
            <SvgIcon
                height="15px"
                fill="gray"
                position="relative"
                top="3px"
                fillRule="evenodd"
                pathname="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
            <span> Member of <ClickedText inlineBlock="inline-block">{props.firstText}</ClickedText>,<ClickedText inlineBlock="inline-block" margin="0 0 0 2px"> {props.secondText}</ClickedText>, and 7 more</span>
        </Grid>
    </Grid>
</Card>