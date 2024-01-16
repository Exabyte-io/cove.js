import { createTheme, Theme } from "@mui/material/styles";

import { buttons, chips, cssBaseline, icons, inputs, tooltips } from "./components";
import { paletteDark, paletteLight } from "./palette";
import shadows from "./shadows";
import { MDTypography, typography } from "./typography";

const commonSettings = {
    dropdownPopperZindex: 2147483647,
    iconDefaultFontSize: 20,
    inputMinWidth: "75px",
    fonts: {
        roboto: ["Roboto", "-apple-system", "sans-serif"].join(","),
        monospace: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"].join(", "),
    },
    sizes: {
        button: {
            // numbers are in theme.spacing units
            small: {
                height: 8,
                icon: "1.375rem",
                startIcon: "1.125rem",
                paddingX: 2.5,
            },
            medium: {
                height: 10,
                icon: "1.5rem",
                startIcon: "1.25rem",
                paddingX: 4,
            },
            large: {
                height: 12,
                icon: "1.625rem",
                startIcon: "1.375rem",
                paddingX: 5.5,
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
};

export type CommonSettings = typeof commonSettings;

const defaultTheme = createTheme();

const createCustomTheme = (
    theme: Theme,
    palette: Partial<Theme["palette"]>,
    typography: (theme: Theme, commonSettings: CommonSettings) => Partial<Theme["typography"]>,
) =>
    createTheme(theme, {
        ...commonSettings,
        palette,
        shadows: shadows(theme),
        components: {
            ...icons(),
            ...buttons(theme, commonSettings),
            ...chips(),
            ...tooltips(),
            ...inputs(theme, commonSettings),
            ...cssBaseline(),
        },
        typography: typography(theme, commonSettings),
    });

export const oldLightMaterialUITheme = createCustomTheme(
    defaultTheme,
    { ...paletteLight, mode: "light" },
    typography,
);

export const LightMaterialUITheme = createCustomTheme(
    defaultTheme,
    { ...paletteLight, mode: "light" },
    MDTypography,
);

export const DarkMaterialUITheme = createCustomTheme(
    defaultTheme,
    { ...paletteDark, mode: "dark" },
    MDTypography,
);

// Temporarily use oldTypography for compatibility purposes with the web app.
// TODO: make light and dark themes both use Typography and remove "old".
export default oldLightMaterialUITheme;
