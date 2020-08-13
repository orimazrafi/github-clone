import React from 'react'
import style from "./style.module.scss"
import { Card, Grid, Container } from '@material-ui/core'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { ClickedText } from '../ClickedText/ClickedText'
import { FrameworksNumbers } from '../FrameworksNumbers/FrameworksNumbers'
import { frameworksArray } from '../../helpers'
export const Aside = props => <div className={style.aside_container}>
    <Card style={{ border: "1px solid blue" }}>
        <Container>
            <Grid container style={{ padding: "10px 0" }}>

                <Grid item xs={11}>
                    <ClickedText fontSize="14px" fontWeight="600">

                        TutorMe is hiring: Senior Frontend Engineer in Los Angeles
                    </ClickedText>

                </Grid>
                <Grid item xs={1}>
                    <SvgIcon position="relative"
                        height="18px"
                        right="-25px"
                        fill="gray"
                        hover="hover"
                        fillRule="evenodd"
                        pathname="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                    />

                </Grid>
            </Grid>
        </Container>
    </Card>
    <div style={{ margin: "10px 0" }}>

        <ClickedText inlineBlock="inline-block">
            Brought to you by
    </ClickedText>
        <span style={{ fontWeight: "600", marginLeft: "4px" }}>GitHub jobs</span>
    </div>
    <h4 style={{ fontWeight: "600" }} >
        Explore repositories
    </h4>
    {frameworksArray.map((framework, index) =>
        <FrameworksNumbers
            index={index}
            arrayLength={frameworksArray.length}
            key={Math.random()}
            repository={framework.repository}
            repositorySummary={framework.repositorySummary}
            framework={framework.framework}
            number={framework.number}
            background={framework.background}
        />
    )}
</div>