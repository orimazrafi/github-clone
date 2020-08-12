import React from 'react';
import style from "./style.module.scss"

export const ClickedText = (props) =>
    <div className={props.underline ? style.underline : style.text_wrapper} onClick={props.onClick} style={{ display: props.inlineBlock, margin: props.margin, color: props.color, fontSize: props.fontSize, fontWeight: props.fontWeight }}>{props.children}</div>
