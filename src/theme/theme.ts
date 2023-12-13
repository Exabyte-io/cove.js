import { createTheme, Theme } from "@mui/material/styles";

import buttons from "./components/buttons";
import chips from "./components/chips";
import inputs from "./components/inputs";
import tooltips from "./components/tooltips";
import { paletteDark, paletteLight } from "./palette";
import shadows from "./shadows";
import oldTypography, { Typography } from "./typography";

export const sizesConfig = {
    buttonPrimary: {
        height: "32.5px",
    },
};

const commonSettings = {
    dropdownPopperZindex: 2147483647,
    iconDefaultFontSize: 20,
    inputMinWidth: "200px",
    fonts: {
        roboto: ["roboto", "sans-serif"].join(", "),
        monospace: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"].join(", "),
    },
    sizes: {
        dropdown: {
            s: {
                width: "64px",
                height: sizesConfig.buttonPrimary.height,
            },
            m: {
                width: "128px",
                height: sizesConfig.buttonPrimary.height,
            },
            l: {
                width: "192px",
                height: sizesConfig.buttonPrimary.height,
            },
            xl: {
                width: "256px",
                height: sizesConfig.buttonPrimary.height,
            },
            inherit: {
                width: "auto",
                height: sizesConfig.buttonPrimary.height,
            },
        },
        header: {
            subHeader: {
                height: "30px",
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

const MuiSvgIconSizesOverrides = {
    MuiSvgIcon: {
        variants: [
            {
                props: { fontSize: "small" },
                style: {
                    fontSize: "18px",
                },
            },
            {
                props: { fontSize: "medium" },
                style: {
                    fontSize: "20px",
                },
            },
            {
                props: { fontSize: "large" },
                style: {
                    fontSize: "35px",
                },
            },
        ],
    },
};

const lightThemePrototype = createTheme({ palette: { ...paletteLight, mode: "light" } });
const darkThemePrototype = createTheme({ palette: { ...paletteDark, mode: "dark" } });

// TODO: figure out how to avoid having to patch the theme and use the above createTheme() function instead
const patchTheme = (theme: Theme, typography: any) => {
    return createTheme(theme, {
        ...commonSettings,
        typography: typography(theme),
        shadows: shadows(theme),
        components: {
            ...buttons(theme),
            ...chips(),
            ...tooltips(),
            ...inputs(commonSettings),
            ...MuiSvgIconSizesOverrides,
        },
    });
};

export const oldLightMaterialUITheme = patchTheme(lightThemePrototype, oldTypography);
export const LightMaterialUITheme = patchTheme(lightThemePrototype, Typography);
export const DarkMaterialUITheme = patchTheme(darkThemePrototype, Typography);

// Temporarily use oldTypography for compatibility purposes with the web app.
// TODO: make light and dark themes both use Typography and remove "old".
export default oldLightMaterialUITheme;
