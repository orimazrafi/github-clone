import React from 'react'
import { Grid, Avatar, Card, Container } from '@material-ui/core'
import style from "./style.module.scss"
import { HiddenPopover } from '../HiddenPopover/HiddenPopover'

import { HiddenElementCard } from '../HiddenElementCard/HiddenElementCard';
import { ClickedText } from '../ClickedText/ClickedText';
import { HiddenRepositoryCard } from './../HiddenRepositoryCard/HiddenRepositoryCard';
import { BorderBottom } from '../BorderBottom/BorderBottom';
import { SvgIcon } from './../SvgIcon/SvgIcon';
import { ColoredText } from '../ColoredTexted/ColoredText';
import { TextAndIcon } from '../TextAndIcon/TextAndIcon';
import { LinksFooter } from './../LinksFooter/LinksFooter';
export const MainNotification = (props) =>
    <div className={style.main_notification_wrapper}><Grid container>
        <HiddenPopover
            elementToHover={<Avatar alt="@voronianski" style={{ height: "32px", width: "32px" }} height="32" width="32" src="https://avatars0.githubusercontent.com/u/974035?s=64&v=4" />}
            hiddenElement={<HiddenElementCard
                img="https://avatars0.githubusercontent.com/u/974035?s=64&v=4"
                userName="@voronianski"
                fullname="Dmitri Voronianski"
                lastName="voronianski"
                languages="*.js,*.lua,*.swift"
                firstText="SumUp"
                secondText="KOSMETISM"
            />
            }
        />
        <HiddenPopover
            elementToHover={<ClickedText margin="0 2px 0 0" fontSize="16px" color="black" fontWeight="600">voronianski </ClickedText>}
            hiddenElement={<HiddenElementCard
                img="https://avatars0.githubusercontent.com/u/974035?s=64&v=4"
                userName="@voronianski"
                fullname="Dmitri Voronianski"
                lastName="voronianski"
                languages="*.js,*.lua,*.swift"
                firstText="SumUp"
                secondText="KOSMETISM"
            />
            }
        />

pushed to
<HiddenPopover
            elementToHover={<ClickedText margin="0 2px" fontSize="16px" color="black" fontWeight="600"> voronianski/jquery.avgrund.js </ClickedText>}
            hiddenElement={<HiddenRepositoryCard
                repositoryName="voronianski/jquery.avgrund.js"
                repositorySummary="Avgrund is jQuery plugin with new modal concept for popups"
                repositoryLanguage="JavaScript"
                firstIconText="1,842"
                secondIconText="380"
                updateOn="Updated on Jun 15"
            />
            }
        />

 on Jun 15
</Grid>
        <Card style={{ marginLeft: "35px", marginTop: "10px", padding: "15px 0" }}>
            <Container style={{ marginBottom: "7px" }}>1 commit to  <span className={style.branch} style={{ color: "#0366d6", padding: "0 6px", background: "#eaf5ff", borderRadius: "15px" }}>master</span></Container>
            <Container>
                <HiddenPopover
                    elementToHover={<Avatar alt="@voronianski" style={{ height: "22px", width: "22px", float: "left", marginRight: "5px" }} height="32" width="32" src="https://avatars0.githubusercontent.com/u/974035?s=64&v=4" />}
                    hiddenElement={<HiddenElementCard
                        img="https://avatars0.githubusercontent.com/u/974035?s=64&v=4"
                        userName="@voronianski"
                        fullname="Dmitri Voronianski"
                        lastName="voronianski"
                        languages="*.js,*.lua,*.swift"
                        firstText="SumUp"
                        secondText="KOSMETISM"
                    />
                    }
                />
                <span>

                    <HiddenPopover
                        elementToHover={<ColoredText float="left">b072666</ColoredText>
                        }
                        hiddenElement={<HiddenElementCard
                            img="https://avatars0.githubusercontent.com/u/974035?s=64&v=4"
                            userName="@voronianski"
                            fullname="Dmitri Voronianski"
                            lastName="voronianski"
                            languages="*.js,*.lua,*.swift"
                            firstText="SumUp"
                            secondText="KOSMETISM"
                        />
                        }
                    />
                    .com to .dev
                </span>
            </Container>
        </Card>
        <BorderBottom margin="20px 0" />
        <SvgIcon
            height="15px"
            fill="gray"
            position="relative"
            top="2px"
            fillRule="evenodd"
            pathname="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
        <span style={{ marginLeft: "2px" }}>  ProTip! The feed shows you events from people you <ColoredText>follow</ColoredText> and repositories you <ColoredText>watch</ColoredText>.</span>

        <TextAndIcon
            height="15px"
            fill="gray"
            position="relative"
            top="5px"
            right="-2px"
            hover="hover"
            pathname="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            text={"Subscribe to your news feed"}
            textHover="textHover"
            margin="0 6px"
        />
        <div style={{ marginTop: "auto" }}>
            <Grid container>
                <Grid item xs={4} style={{ marginTop: "10px" }}>
                    <SvgIcon
                        height="15px"
                        fill="gray"
                        position="relative"
                        top="2px"
                        fillRule="evenodd"
                        pathname="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    <span style={{ marginLeft: "2px" }}>© 2020 GitHub, Inc. </span>
                </Grid>
                <LinksFooter
                    links={["Blog", "About", "Shop", "Contact GitHub", "Pricing"]}
                />
                <LinksFooter
                    links={["API", "Training", "Status", "Security"]}
                />
                <LinksFooter
                    links={["Terms", "Privacy", "Help"]}
                />
            </Grid>
        </div>
    </div>