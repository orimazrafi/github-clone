import React from 'react'
import { Modal } from '@material-ui/core'
export const ModalPopup = (props) =>
    <Modal
        style={{ background: "white" }}
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div
            style={{ background: "white" }}
        >
            {props.children}
        </div>
    </Modal>
