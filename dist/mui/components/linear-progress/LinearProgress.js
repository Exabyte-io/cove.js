import LinearProgressMui from "@mui/material/LinearProgress";
import React from "react";
function getColor(percent) {
    let color = "success";
    if (percent >= 75) {
        color = "error";
    }
    else if (percent >= 50) {
        color = "warning";
    }
    return color;
}
export default function LinearProgress({ percent, variant, color }) {
    return (React.createElement(LinearProgressMui, { variant: variant, value: percent, color: color || getColor(percent) }));
}
