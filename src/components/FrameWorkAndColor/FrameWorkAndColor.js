import React from 'react'
export const FrameWorkAndColor = (props) => {
    return <div>
        <div style={{ background: props.background, display: "inline-block", marginRight: "7px", margin: props.margin, alignSelf: "center", position: "relative", borderRadius: "50%", top: "2px", height: "15px", width: "15px" }}>
        </div>
        <div style={{ display: "inline-block", color: props.color, fontSize: props.fontSize }}>
            {props.framework}
        </div>
    </div>
}