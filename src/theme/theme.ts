import { createTheme, Theme } from "@mui/material/styles";

import buttons from "./components/buttons";
import lightPalette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

export const sizesConfig = {
    buttonPrimary: {
        height: "32.5px",
    },
};

const commonSettings = {
    dropdownPopperZindex: 2147483647,
    iconDefaultFontSize: 20,
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
        toolbar: {
            xl: {
                width: "64px",
                height: "64px",
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
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
};

/**
 * Styles below adjust MUI TablePagination component to the current wep-app style
 * Should be removed after moving explorer to the MUI Data Grid
 */
const MUITablePaginationSettings = {
    MuiTablePagination: {
        styleOverrides: {
            toolbar: {
                "@media (min-width: 0px)": {
                    minHeight: "30px",
                    paddingLeft: 0,
                },
                fontSize: "12px",
            },
            displayedRows: {
                margin: 0,
                fontSize: "12px",
            },
            actions: {
                marginLeft: 0,
            },
        },
    },
};

export const theme = createTheme({ palette: lightPalette });
// default MUI dark theme:
export const darkTheme = createTheme({ palette: { mode: "dark" } });
const buildTheme = (theme: Theme) => {
    return createTheme(theme, {
        ...commonSettings,
        typography: typography(theme),
        shadows: shadows(theme),
        components: {
            ...buttons(theme),
            ...MUITablePaginationSettings,
        },
    });
};

const LightMaterialUITheme = buildTheme(theme);
export const DarkMaterialUITheme = buildTheme(darkTheme);

export default LightMaterialUITheme;
