import { Theme } from "@mui/material/styles/createTheme";
import React from "react";
/**
 * TODO: will be a good practice to add CSSBaseline component from material-ui
 * when we will fully migrate on material components
 * */
export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
}
export default function ThemeProvider({ children, theme, }: ThemeProviderProps): React.JSX.Element;
