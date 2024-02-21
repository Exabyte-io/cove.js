/// <reference types="react" />
import { Theme } from "@mui/material/styles";
export declare const TotalContainer: import("@mui/styles").StyledComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "classes" | "className"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<{
    theme: Theme;
    isBorder: boolean;
}, "className" | "theme"> & {
    className?: string | undefined;
    theme?: Theme | undefined;
}>;
export declare const ColorBox: import("@mui/styles").StyledComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "classes" | "className"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<{
    color: string;
    isPointer: boolean;
}, "className" | "theme"> & {
    className?: string | undefined;
    theme?: import("@mui/styles").DefaultTheme | undefined;
}>;
