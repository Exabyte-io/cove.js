import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, Theme } from "@mui/material/styles";

import buttons from "./components/buttons";
import chips from "./components/chips";
import inputs from "./components/inputs";
import tooltips from "./components/tooltips";
import { paletteDark, paletteLight } from "./palette";
import shadows from "./shadows";
import Typography, { MDTypography } from "./typography";

export const sizesConfig = {
    menuItem: {
        height: "32.5px",
    },
    button: {
        small: {
            height: "32px",
            icon: "1.375rem",
            startIcon: "1.125rem",
            paddingX: 2.5,
        },
        medium: {
            height: "40px",
            icon: "1.5rem",
            startIcon: "1.25rem",
            paddingX: 4,
        },
        large: {
            height: "48px",
            icon: "1.625rem",
            startIcon: "1.375px",
            paddingX: 5.5,
        },
    },
};

const commonSettings = {
    dropdownPopperZindex: 2147483647,
    iconDefaultFontSize: 20,
    inputMinWidth: "75px",
    fonts: {
        roboto: ["roboto", "sans-serif"].join(", "),
        monospace: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"].join(", "),
    },
    sizes: {
        dropdown: {
            s: {
                width: "64px",
                height: sizesConfig.menuItem.height,
            },
            m: {
                width: "128px",
                height: sizesConfig.menuItem.height,
            },
            l: {
                width: "192px",
                height: sizesConfig.menuItem.height,
            },
            xl: {
                width: "256px",
                height: sizesConfig.menuItem.height,
            },
            inherit: {
                width: "auto",
                height: sizesConfig.menuItem.height,
            },
        },
        header: {
            subHeader: {
                height: "30px",
            },
        },
        button: sizesConfig.button,
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
// Used to make scrollbars dark in dark mode per https://mui.com/material-ui/react-css-baseline/#scrollbars
// Otherwise, b/c the Dialogs are appended to the body, they will have light scrollbars in dark mode
const MuiCssBaselineOverrides = {
    MuiCssBaseline: {
        styleOverrides: (themeParam: Theme) => ({
            body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
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
            ...buttons(theme, commonSettings),
            ...chips(),
            ...tooltips(),
            ...inputs(theme, commonSettings),
            ...MuiSvgIconSizesOverrides,
            ...MuiCssBaselineOverrides,
        },
    });
};

export const oldLightMaterialUITheme = patchTheme(lightThemePrototype, Typography);
export const LightMaterialUITheme = patchTheme(lightThemePrototype, MDTypography);
export const DarkMaterialUITheme = patchTheme(darkThemePrototype, MDTypography);

// Temporarily use oldTypography for compatibility purposes with the web app.
// TODO: make light and dark themes both use Typography and remove "old".
export default oldLightMaterialUITheme;
