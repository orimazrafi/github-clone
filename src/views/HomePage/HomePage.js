import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Repositories } from './../../components/Repositories/Repositories';
export const HomePage = (props) =>
    <Grid container >
        <Grid item xs={3} >
            <Container>
                <Repositories />

            </Container> </Grid>
        <Grid item xs={6}>
            <Container>
                Main
                </Container></Grid>
        <Grid item xs={3}><Container>aside</Container></Grid>
    </Grid>