import LinearProgressMui, { LinearProgressProps } from "@mui/material/LinearProgress";
import React from "react";

function getColor(percent: number) {
    let color: LinearProgressProps["color"] = "success";

    if (percent >= 75) {
        color = "error";
    } else if (percent >= 50) {
        color = "warning";
    }

    return color;
}

export interface ExtendedLinearProgressProps extends LinearProgressProps {
    percent: number;
}

export default function LinearProgress({ percent, variant, color }: ExtendedLinearProgressProps) {
    return (
        <LinearProgressMui variant={variant} value={percent} color={color || getColor(percent)} />
    );
}
