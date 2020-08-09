import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export const DownArrowWithIcon = (props) =>
    <IconButton onClick={props.handleClick} >
        {props.icon}
        {/* <SvgIcon
            height="20px"
            fill="#fff"
            pathname="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
        /> */}
        <ArrowDropDownIcon
            style={{ color: "white" }} />
    </IconButton>
