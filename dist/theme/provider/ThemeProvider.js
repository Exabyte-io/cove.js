import { StyledEngineProvider, ThemeProvider as BaseThemeProvider } from "@mui/material/styles";
import React from "react";
import { AlertContextProvider } from "../../mui/components/custom/alert/AlertContextProvider";
import { LightMaterialUITheme } from "../theme";
export default function ThemeProvider({ children, theme = LightMaterialUITheme, }) {
    return (React.createElement(StyledEngineProvider, { injectFirst: true },
        React.createElement(BaseThemeProvider, { theme: theme },
            React.createElement(AlertContextProvider, null, children))));
}
