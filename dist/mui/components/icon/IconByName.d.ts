import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
export type IconByNameProps = SvgIconProps & {
    name: string;
    rotateDegrees?: number;
};
declare function rotateIcon(IconComponent: typeof SvgIcon, degrees: number): (props: IconByNameProps) => React.JSX.Element;
declare const iconComponentMap: Record<string, typeof SvgIcon | ReturnType<typeof rotateIcon>>;
export default function IconByName({ name, rotateDegrees, fontSize, sx, ...iconProps }: IconByNameProps): React.JSX.Element;
export type CoveIcon = keyof typeof iconComponentMap;
export {};
