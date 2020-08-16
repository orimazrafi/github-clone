import React from 'react'
import { Grid } from '@material-ui/core';
import { ClickedText } from '../ClickedText/ClickedText';
import { BorderBottom } from '../BorderBottom/BorderBottom';
import { FrameWorkAndColor } from '../FrameWorkAndColor/FrameWorkAndColor';
import { TextAndIcon } from './../TextAndIcon/TextAndIcon';
export const FrameworksNumbers = props => <div>
    <ClickedText fontWeight="500">
        {props.repository}
    </ClickedText>
    <div style={{ fontSize: "14px", color: "gray" }}>
        {props.repositorySummary}
        <Grid container style={{ margin: "10px 0" }}>
            <FrameWorkAndColor
                background={props.background}
                framework={props.framework}
            />
            <TextAndIcon
                height="15px"
                fill="gray"
                position="relative"
                top="2px"
                right="-2px"
                pathname="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                text={props.number}
                margin="0 4px"
            />
        </Grid>
    </div>
    {props.index + 1 === props.arrayLength ?
        <ClickedText margin="15px 0" fontSize="14px">
            Explore more →
    </ClickedText>
        :
        <BorderBottom margin="15px 0" />
    }
</div>