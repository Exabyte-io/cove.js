import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
export type IconByNameProps = SvgIconProps & {
    name: string;
    rotateDegrees?: number;
};
export default function IconByName({ name, rotateDegrees, fontSize, sx, ...iconProps }: IconByNameProps): React.JSX.Element;
