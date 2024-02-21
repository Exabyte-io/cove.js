/// <reference types="react" />
import { Theme } from "@mui/material/styles";
export declare const EditorContainer: import("@mui/styles").StyledComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "classes" | "className"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "className" | "theme"> & {
    className?: string | undefined;
    theme?: import("@mui/styles").DefaultTheme | undefined;
}>;
export declare const ViewerContainer: import("@mui/styles").StyledComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "classes" | "className"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<{
    theme: Theme;
}, "className" | "theme"> & {
    className?: string | undefined;
    theme?: Theme | undefined;
}>;
