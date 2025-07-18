import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
export type IconByNameProps = SvgIconProps & {
    name: string;
    rotateDegrees?: number;
};
declare function rotateIcon(IconComponent: typeof SvgIcon, degrees: number): (props: IconByNameProps) => React.JSX.Element;
declare const iconComponentMap: Record<string, typeof SvgIcon | ReturnType<typeof rotateIcon>>;
/**
 * Extend the iconComponentMap with additional icons
 * @param additionalIcons - Object mapping icon names to icon components
 */
export declare function extendIconMap(additionalIcons: Record<string, typeof SvgIcon | ReturnType<typeof rotateIcon>>): void;
export default function IconByName({ name, rotateDegrees, fontSize, sx, ...iconProps }: IconByNameProps): React.JSX.Element;
export type CoveIcon = keyof typeof iconComponentMap;
export {};
