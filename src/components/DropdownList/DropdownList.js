import React from 'react'

import Popover from '@material-ui/core/Popover';
export const DropdownList = (props) => <Popover
    id={props.id}
    open={props.open}
    anchorEl={props.anchorEl}
    onClose={props.onClose}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
>
    {props.children}
    {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
</Popover>