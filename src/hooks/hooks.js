// import { useState } from 'react';
export const useDialogBox = (state, setter) => {
    const handleClick = (event) => {
        setter(event.currentTarget);
    };
    const handleClose = () => {
        setter(null);
    };
    const open = Boolean(state);
    const id = open ? 'simple-popover' : undefined;
    return [handleClick, handleClose, id, open]
}
export const useModal = (setOpenModal) => {
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    }
    return [handleOpen, handleClose]
}
