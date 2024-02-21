import { LinearProgressProps } from "@mui/material/LinearProgress";
import React from "react";
export interface ExtendedLinearProgressProps extends LinearProgressProps {
    percent: number;
}
export default function LinearProgress({ percent, variant, color }: ExtendedLinearProgressProps): React.JSX.Element;
