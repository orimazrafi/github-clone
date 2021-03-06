import React from 'react'
import { Grid } from '@material-ui/core'
import style from "./style.module.scss"
export const TextAndIcon = props => <div style={{ disply: "inline-block" }}>
    {console.log(props.color)}
    <Grid container
        className={props.hover ? style.hover : style.cursor}
    >
        <svg onClick={props.handleClick}
            style={{ order: props.order, height: props.height, fill: props.fill, position: props.position, right: props.right, top: props.top }} viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}>
            <path fillRule={props.fillRule} d={props.pathname}
            ></path>
            {props.svgPath2 ?
                <path d={props.svgPath2}
                ></path> : null
            }
        </svg >
        <span className={props.textHover ? style.text_hover : ""} style={{ margin: props.margin, color: props.color }}>
            {props.text}
        </span>
    </Grid>
</div>