import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Repositories } from './../../components/Repositories/Repositories';
import { MainNotification } from './../../components/MainNotification/MainNotification';
import { Aside } from './../../components/Aside/Aside';
export const HomePage = (props) =>
    <Grid container >
        <Grid item xs={3} style={{ background: "white", height: "95vh", overflow: "auto" }} >
            <Container>
                <Repositories />
            </Container>
        </Grid>
        <Grid item xs={6}>
            <Container>
                <MainNotification />
            </Container>
        </Grid>
        <Grid item xs={3}><Container><Aside /></Container></Grid>
    </Grid>