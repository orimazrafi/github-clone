import React, { useState } from 'react'
import { Grid, Card, Container } from '@material-ui/core'
import { ClickedText } from '../ClickedText/ClickedText'
import { FrameWorkAndColor } from '../FrameWorkAndColor/FrameWorkAndColor'
import { repositoriesCards } from "../../helpers"
import { TextAndIcon } from '../TextAndIcon/TextAndIcon'
import { HiddenPopover } from '../HiddenPopover/HiddenPopover'
import { BorderBottom } from '../BorderBottom/BorderBottom'
import style from "./style.module.scss"
import { commitsInRepositories } from './../../helpers';
import { SvgIcon } from './../SvgIcon/SvgIcon';
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
        if (Math.floor(Math.random() * 10) < 5) return color = "#ebedf0"
        if (Math.floor(Math.random() * 10) === 5) return "#9be9a8"
        if (Math.floor(Math.random() * 10) === 6) return color = "#40c463";
        if (Math.floor(Math.random() * 10) > 6) return color = "#216e39";
        return color

    }
    const handleLineLength = commit => {
        const commitsArray = commit.split(" ");
        if (parseInt(commitsArray[0]) < 8) return "lightgreen"
        if (parseInt(commitsArray[0]) > 8) return "green"
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
                    <Grid>
                        {commitsInRepositories.map(commitObject => {
                            return <Container key={Math.random()}>
                                <div style={{ fontSize: "12px", marginTop: "15px" }}>
                                    {commitObject.date}
                                </div>
                                <div style={{ borderLeft: "2px solid lightgray", minHeight: "168px", position: "absolute" }}></div>
                                <div style={{ bottom: "7px", marginTop: commitObject.date ? "" : "-5px", left: commitObject.date ? "72px" : "2px", borderTop: "2px solid lightgray", width: commitObject.date ? "800px" : "864px", position: "relative" }}></div>
                                <Grid style={{ marginLeft: "25px" }}>
                                    <Grid container style={{ margin: "25px 0 0 0 " }}>

                                        <ClickedText fontSize="18px"  >
                                            {commitObject.headline}
                                        </ClickedText>
                                        <Grid style={{ margin: "2px 0 0 auto" }}>

                                            <SvgIcon
                                                height="20px"
                                                fill="gray"
                                                position="relative"
                                                margin="0 4px 0 0 "
                                                top="-5px"
                                                right="6px"
                                                fillRule="evenodd"
                                                pathname="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z" />

                                        </Grid>
                                    </Grid>
                                    <div style={{ padding: "10px", background: "lightgray", borderRadius: "50%", position: "relative", width: "10px", height: "10px", right: "37px", bottom: "24px" }}>

                                        <SvgIcon
                                            height="20px"
                                            fill="black"
                                            position="relative"
                                            margin="0 4px 0 0 "
                                            top="-5px"
                                            right="6px"
                                            fillRule="evenodd"
                                            pathname="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z" />

                                    </div>
                                    {commitObject.repositoryCommits.map((commit, index) => <Grid key={Math.random()} container style={{ margin: index === 0 ? "-10px 0 10px 0" : "10px 0" }}>
                                        <Grid >
                                            <ClickedText color="blue" underline="underline" fontSize="16px">
                                                {commit.repository}
                                            </ClickedText>
                                        </Grid>
                                        <Grid style={{ flexGrow: "1" }} >
                                            {commit.commit ?
                                                <Grid container>
                                                    <Grid>
                                                        <ClickedText margin="2px 2px 2px 6px" fontSize="14px">
                                                            {commit.commit}
                                                        </ClickedText>
                                                    </Grid>
                                                    <Grid style={{ margin: "7px 150px 0 auto" }}>
                                                        <div style={{ borderRadius: "4px", borderBottom: `10px solid ${handleLineLength(commit.commit)}`, width: commit.commit.split(" ")[0] * 7 + "px" }} ></div>
                                                    </Grid>
                                                </Grid>
                                                :
                                                <Grid container>
                                                    <Grid>
                                                        <FrameWorkAndColor
                                                            margin="3px 5px 0 5px"
                                                            background={commit.framework.background}
                                                            framework={commit.framework.framework}
                                                            color="gray"
                                                            fontSize="14px"
                                                        />
                                                    </Grid>
                                                    <Grid style={{ margin: "4px 0 0.5px auto ", fontSize: "14px", color: "gray" }}>
                                                        Aug 16
                                                        </Grid>
                                                </Grid>
                                            }
                                        </Grid>
                                    </Grid>)}
                                </Grid>
                            </Container>
                        })}
                        <button className={style.show_more_activity} style={{ border: "1px solid lightgray", background: "white", fontSize: "13px", fontWeight: "600", padding: "12px", width: "100%", borderRadius: "7px", color: "blue" }}>Show more activity</button>
                        <div style={{ margin: "40px 0 70px 0", color: "gray", fontSize: "14px" }}>
                            Seeing something unexpected? Take a look at the <ClickedText inlineBlock="inline-block" color="blue" underline="underline">
                                GitHub profile guide.    </ClickedText></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                {["2020", "2019", "2018", "2017"].map(year => <div key={Math.random()} onClick={() => setActiveYear(year)} className={activeYear === year ? style.active_btn : style.year_btn} style={{ display: "block" }}> {year}</div>)}
            </Grid>
        </Grid>
    </>
}