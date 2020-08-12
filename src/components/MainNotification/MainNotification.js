import React from 'react'
import { Grid, Avatar, Card } from '@material-ui/core'
import style from "./style.module.scss"
import { HiddenPopover } from '../HiddenPopover/HiddenPopover'

import { HiddenElementCard } from '../HiddenElementCard/HiddenElementCard';
import { ClickedText } from '../ClickedText/ClickedText';
import { HiddenRepositoryCard } from './../HiddenRepositoryCard/HiddenRepositoryCard';
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

        <Card>
            <div>1 commit to master</div>
            <div>
                <HiddenPopover
                    elementToHover={<Avatar alt="@voronianski" style={{ height: "22px", width: "22px" }} height="32" width="32" src="https://avatars0.githubusercontent.com/u/974035?s=64&v=4" />}
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
b072666
.com to .dev
    </div>


        </Card>
    </div>