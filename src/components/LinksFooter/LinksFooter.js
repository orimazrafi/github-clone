import React from 'react'
import { Grid } from '@material-ui/core'
import { ClickedText } from './../ClickedText/ClickedText';
export const LinksFooter = props =>
    <Grid item xs={2}>
        <ul>
            {props.links.map(link => <li key={Math.random()} style={{ listStyleType: "none" }}><ClickedText margin="2px 0" underline="underline">
                {link}</ClickedText> </li>)}
        </ul>
    </Grid>