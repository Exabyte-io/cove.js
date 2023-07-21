import { StyledEngineProvider, ThemeProvider as BaseThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";
import React from "react";

import { AlertContextProvider } from "../../mui/components/custom/alert/AlertContextProvider";
import LightMaterialUITheme from "../theme";

/**
 * TODO: will be a good practice to add CSSBaseline component from material-ui
 * when we will fully migrate on material components
 * */
export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
}

export default function ThemeProvider({
    children,
    theme = LightMaterialUITheme,
}: ThemeProviderProps) {
    return (
        <StyledEngineProvider injectFirst>
            <BaseThemeProvider theme={theme}>
                <AlertContextProvider>{children}</AlertContextProvider>
            </BaseThemeProvider>
        </StyledEngineProvider>
    );
}
