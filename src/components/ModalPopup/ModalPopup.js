import React from 'react'
import { Modal } from '@material-ui/core'
import style from "./style.module.scss"
export const ModalPopup = (props) => {
    return <Modal
        className={style.modal}
        style={{
            maxWidth: props.maxWidth,
            margin: props.margin,
            position: props.position
        }}
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div
            style={{ background: "#fff" }}
            className={style.modal}
        >
            {props.children}

        </div>
    </Modal>
}

