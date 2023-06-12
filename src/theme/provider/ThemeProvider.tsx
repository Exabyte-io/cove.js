import { StyledEngineProvider, ThemeProvider as BaseThemeProvider } from "@mui/material/styles";
import React from "react";

import { AlertContextProvider } from "../../mui/components/custom/alert/AlertContextProvider";
import LightMaterialUITheme from "../theme";

/**
 * TODO: will be a good practice to add CSSBaseline component from material-ui
 * when we will fully migrate on material components
 * */
export interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <StyledEngineProvider injectFirst>
            <BaseThemeProvider theme={LightMaterialUITheme}>
                <AlertContextProvider>{children}</AlertContextProvider>
            </BaseThemeProvider>
        </StyledEngineProvider>
    );
}
