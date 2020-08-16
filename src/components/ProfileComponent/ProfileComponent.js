import React, { useState } from 'react'
import { Grid, Card, Container } from '@material-ui/core'
import { ClickedText } from '../ClickedText/ClickedText'
import { FrameWorkAndColor } from '../FrameWorkAndColor/FrameWorkAndColor'
import { repositoriesCards } from "../../helpers"
import { TextAndIcon } from '../TextAndIcon/TextAndIcon'
import { HiddenPopover } from '../HiddenPopover/HiddenPopover'
import { BorderBottom } from '../BorderBottom/BorderBottom'
import style from "./style.module.scss"
export const ProfileComponent = (props) => {
    const [activeYear, setActiveYear] = useState("2020");
    const handlePaint = () => {
        const paint = []
        for (let i = 0; i < 365; i++) {
            paint.push(i)
        }
        return paint
    }
    const handleBackground = () => {
        let color = "#ebedf0"
        console.log(Math.floor(Math.random() * 10))
        if (Math.floor(Math.random() * 10) < 5) return color = "#ebedf0"
        if (Math.floor(Math.random() * 10) === 5) return "#9be9a8"
        if (Math.floor(Math.random() * 10) === 6) return color = "#40c463";
        if (Math.floor(Math.random() * 10) > 6) return color = "#216e39";
        return color

    }
    return <><Grid style={{ marginTop: "1.5rem", fontSize: "17px" }}>Popular repositories
<Grid container style={{ justifyContent: "space-between", marginTop: "15px" }}>
            {repositoriesCards.map(card =>
                <Grid item key={Math.random()} style={{ width: "48%", marginBottom: "20px" }}>
                    <Card style={{ padding: "0 20px 20px 20px", display: "flex", flexDirection: "column" }}>
                        <ClickedText underline="hover" color="#0366d6" margin="10px 0" fontSize="17px" fontWeight="600">
                            {card.headLine}
                        </ClickedText>
                        <p style={{ color: "#586069", height: "30px", fontSize: "13px", lineHeight: "1.5" }}>

                            {card.summary}
                        </p>
                        <div style={{ marginTop: "auto" }}>

                            <FrameWorkAndColor
                                background={card.background}
                                framework={card.framework}
                                color="gray"
                                fontSize="14px"
                            />
                        </div>
                    </Card>
                </Grid>)}
        </Grid>
    </Grid>
        <Grid container style={{ justifyContent: "space-between", marginBottom: "10px" }}>
            <Grid>251 contributions in the last year
</Grid>
            <Grid>
                <HiddenPopover
                    elementToHover={<TextAndIcon
                        height="15px"
                        fill="gray"
                        position="relative"
                        top="4px"
                        order="2"
                        right="-2px"
                        viewBox="0 0 32 32"
                        pathname="M15,23c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.286-0.286-0.372-0.716-0.217-1.09C4.23,11.243,4.596,11,5,11h20 c0.404,0,0.77,0.243,0.924,0.617c0.155,0.374,0.069,0.804-0.217,1.09l-10,10C15.512,22.902,15.256,23,15,23z"
                        text="Contribution settings "
                        margin="0 4px"
                    />}

                    hiddenElement={
                        <Card >
                            <div className={style.contribute_settings}>
                                <div style={{ padding: "20px 20px" }}>
                                    <div style={{ fontWeight: "bold" }} >
                                        Private contributions
                                 </div>
                                    <div style={{ marginTop: "5px" }}>
                                        Turning on private contributions will show anonymized
                                        private activity on your profile.
                                    </div>
                                </div>
                            </div>


                            <BorderBottom />
                            <div className={style.contribute_settings}>
                                <div style={{ padding: "20px 20px" }}>
                                    <div style={{ fontWeight: "bold" }} >
                                        Activity overview
                                 </div>
                                    <div style={{ marginTop: "5px" }}>
                                        Turning on the activity overview will show an overview of your activity
                                        across organizations and repositories.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    }
                />
            </Grid>
        </Grid>
        <Grid>
            <Card>
                <Container style={{ padding: "0 20px 0 60px" }}>

                    <div style={{ display: "flex", marginTop: "15px" }}>
                        {["Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug"].map(month => <div key={Math.random()} style={{ flexGrow: "1", fontSize: "12px" }}>{month}</div>)}
                    </div>
                </Container>
                <div style={{ display: "flex" }}>
                    <div style={{ flexDirection: "column", marginLeft: "35px", fontSize: "12px" }}>
                        {["Mon", "Wed", "Fre"].map(day => <div key={Math.random()}><div style={{ margin: "20px 5px 0 0 " }}>
                            {day}
                        </div ></div>)}
                    </div>
                    <div className={style.calendar_board} >
                        {handlePaint().map((day, index) => {
                            return <div key={Math.random()}>
                                <HiddenPopover
                                    elementToHover={<div key={Math.random()} className={style.calendar_cell} style={{ background: handleBackground(), padding: "0 7px", height: "15px", margin: "2px" }}></div>}
                                    hiddenElement={<div style={{ background: "#363232", borderRadius: "4px", color: "white", padding: "10px" }}>No contributions on the 22 of sep, 2022</div>
                                    }
                                />
                            </div>
                        })}
                    </div>
                </div>
                <Container style={{ margin: "0 0 10px 0" }}>
                    <Grid container style={{ justifyContent: "space-between", padding: "0 15px" }}>
                        <Grid>

                            <ClickedText color="#0366d6" underline="underline">
                                Learn how we count contributions.
                    </ClickedText>
                        </Grid>
                        <div style={{ display: "flex" }} >
                            {["Less", "#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39", "More"].map(square => square === "More" || square === "Less" ? <div key={Math.random()}>{square}</div> : <div key={Math.random()} className={style.calendar_cell} style={{ background: square, padding: "0 7px", height: "15px", margin: "2px" }}></div>)}
                            <Grid>
                            </Grid>

                        </div>
                    </Grid>
                </Container>
            </Card>
        </Grid>
        <Grid container style={{ justifyContent: "space-between", marginTop: "20px" }}>
            <Grid>
                Contribution activity
                <Grid>
                    <div style={{ fontSize: "12px", marginTop: "15px" }}>
                        August 2020
                    </div>
                    <div style={{ borderLeft: "2px solid lightgray", height: "40vh", position: "absolute" }}></div>
                    <div style={{ bottom: "7px", left: "72px", borderTop: "2px solid lightgray", width: "800px", position: "relative" }}></div>
                    <Grid>
                        <Container>
                            <Grid>
                                <ClickedText fontSize="18px">
                                    Created 27
                                    commits in
                                    3
                                    repositories
      </ClickedText>
                                orimazrafi/twitter-clone 13 commits
                        {[{ repository: "orimazrafi/twitter-clone", commit: "13 commits" }].map(commit => <Grid key={Math.random()} container>
                                    <Grid>
                                        <ClickedText>

                                            {commit.repository}
                                        </ClickedText>
                                    </Grid>
                                    <Grid>
                                        <ClickedText>

                                            {commit.commit}
                                        </ClickedText>

                                    </Grid>
                                </Grid>)}
                            </Grid>
                            <Grid>
                                orimazrafi/twitter-clone 13 commits

                        </Grid>
                            <Grid>
                                orimazrafi/twitter-clone 13 commits

                        </Grid>
                            <Grid>
                                orimazrafi/twitter-clone 13 commits

                        </Grid>
                        </Container>
                    </Grid>
                    {/* <Container>

                        orimazrafi/twitter-clone 13 commits
                        orimazrafi/github-clone 11 commits
                        orimazrafi/impreva-app 3 commits
                        orimazrafi/impreva-app  JavaScriptAug 16
                        orimazrafi/github-clone  JavaScriptAug 6
                </Container> */}
                </Grid>
            </Grid>
            <Grid>
                {["2020", "2019", "2018", "2017"].map(year => <div key={Math.random()} onClick={() => setActiveYear(year)} className={activeYear === year ? style.active_btn : style.year_btn} style={{ display: "block" }}> {year}</div>)}
            </Grid>
        </Grid>
    </>
}