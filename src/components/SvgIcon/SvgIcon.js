import React from 'react'
export const SvgIcon = (props) => {
    return (
        <svg style={{ height: props.height, fill: props.fill, position: props.position, top: props.top }} viewBox="0 0 16 16">
            <path d={props.pathname}
            ></path>
            {props.svgPath2 ?
                <path d={props.svgPath2}
                ></path> : null
            }
        </svg >
    )
}