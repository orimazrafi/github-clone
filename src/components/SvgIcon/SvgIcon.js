import React from 'react'
import style from "./style.module.scss"
export const SvgIcon = (props) => {
    return (
        <svg onClick={props.handleClick}
            className={props.hover ? style.hover : style.cursor}
            style={{ margin: props.margin, height: props.height, fill: props.fill, position: props.position, right: props.right, top: props.top }} viewBox="0 0 16 16">
            <path fillRule={props.fillRule} d={props.pathname}
            ></path>
            {props.svgPath2 ?
                <path d={props.svgPath2}
                ></path> : null
            }
        </svg >
    )
}