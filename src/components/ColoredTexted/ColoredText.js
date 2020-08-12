import React from 'react';
import style from "./style.module.scss";
export const ColoredText = props =>
    <span className={style.branch} style={{ color: "#0366d6", borderRadius: "15px", float: props.float, marginRight: "5px" }}>
        {props.children}
    </span>
