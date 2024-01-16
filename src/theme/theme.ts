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
                height: 4,
                icon: "1.375rem",
                startIcon: "1.125rem",
                paddingX: 1.25,
            },
            medium: {
                height: 5,
                icon: "1.5rem",
                startIcon: "1.25rem",
                paddingX: 2,
            },
            large: {
                height: 6,
                icon: "1.5rem",
                startIcon: "1.375rem",
                paddingX: 2.75,
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

const createCustomTheme = (
    palette: object,
    typography: (theme: Theme, commonSettings: CommonSettings) => Partial<Theme["typography"]>,
) => {
    const defaultTheme = createTheme();
    return createTheme(defaultTheme, {
        ...commonSettings,
        palette,
        shadows: shadows(defaultTheme),
        components: {
            ...icons(),
            ...buttons(defaultTheme, commonSettings),
            ...chips(),
            ...tooltips(),
            ...inputs(defaultTheme, commonSettings),
            ...cssBaseline(),
        },
        typography: typography(defaultTheme, commonSettings),
    });
};

export const oldLightMaterialUITheme = createCustomTheme(
    { ...paletteLight, mode: "light" },
    typography,
);

export const LightMaterialUITheme = createCustomTheme(
    { ...paletteLight, mode: "light" },
    MDTypography,
);

export const DarkMaterialUITheme = createCustomTheme(
    { ...paletteDark, mode: "dark" },
    MDTypography,
);

// Temporarily use oldTypography for compatibility purposes with the web app.
// TODO: make light and dark themes both use Typography and remove "old".
export default oldLightMaterialUITheme;
