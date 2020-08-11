import React, { useState } from 'react'

import { Grid, TextField } from '@material-ui/core'

import { SvgIcon } from '../SvgIcon/SvgIcon'
import style from "./style.module.scss"
import { repositories } from "../../helpers"
import { Link } from 'react-router-dom'
import { ClickedText } from './../ClickedText/ClickedText';
import { BorderBottom } from '../BorderBottom/BorderBottom'

export const Repositories = (props) => {
    const [fullList, setFullList] = useState(false);
    const filtersRepositories = !fullList ? repositories.slice(0, 5) : repositories
    return <div className={
        style.repository_container
    }

    ><Grid container justify="space-between"><Grid style={{ fontWeight: "500", alignSelf: "center" }}>Repositories</Grid><Grid><button className={
        style.new_btn
    }

    ><SvgIcon fillRule="evenodd"
        position="relative"
        top="3px"
        right="4px"
        height="15px"
        fill="white"
        pathname="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
        /><span>New </span></button></Grid>

            <TextField className="repository" style={{ margin: "10px 0" }} fullWidth placeholder="Find a repository.." variant="outlined" />
        </Grid>
        {

            filtersRepositories.map(repository =>
                <Grid key={Math.random()} container style={{ margin: "10px 0" }}>
                    <SvgIcon
                        pathname={repository.icon.pathname}
                        fill={repository.icon.fill}
                        height={repository.icon.height}
                        fillRule="evenodd"
                        position="relative"
                        top="4px"
                    />
                    <Link to={repository.repositoryName} style={{ marginLeft: "5px", fontSize: "14px", fontWeight: "600", color: "#0366d6", letterSpacing: "0.50px" }}>
                        {repository.repositoryName}</Link>

                </Grid>)}
        <Grid container>
            {!fullList &&
                <ClickedText margin="10px 0" onClick={() => setFullList(true)}>
                    show more
            </ClickedText>
            }
        </Grid>
        <BorderBottom margin="10px 0" />
        <Grid >
            <Grid>
                <h2 style={{ lineHeight: "1.5", fontSize: "14px", color: "#24292e", fontWeight: "600" }}>

                    Working with a team?
                </h2>
            </Grid>
            <Grid>
                <p style={{ lineHeight: "1.5", fontSize: "14px", color: "#24292e" }}>

                    GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.
</p>
                <button className={style.organization_btn} >Create an organization</button>

            </Grid>

        </Grid>
    </div>
}