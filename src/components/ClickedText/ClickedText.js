import React from 'react';
import style from "./style.module.scss"

export const ClickedText = (props) =>
    <div className={style.text_wrapper} onClick={props.onClick} style={{ margin: props.margin }}>{props.children}</div>
