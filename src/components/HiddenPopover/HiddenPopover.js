import React from 'react'
import style from "./style.module.scss"

export const HiddenPopover = (props) =>
    <div key={props.key}>
        <div className={style.element}>
            {props.elementToHover}
        </div>
        <div className={style.hidden_element}>{props.hiddenElement}</div>
    </div>
