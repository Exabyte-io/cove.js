import { createTheme } from "@mui/material/styles";

import buttons from "./components/buttons";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

export const sizesConfig = {
    buttonPrimary: {
        height: "32.5px",
    },
};

export const theme = createTheme({ palette });

const LightMaterialUITheme = createTheme(theme, {
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
    typography: typography(theme),
    shadows: shadows(theme),
    components: {
        ...buttons(theme),
        /**
         * Styles below adjust MUI TablePagination component to the current wep-app style
         * Should be removed after moving explorer to the MUI Data Grid
         */
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
    },
});

export default LightMaterialUITheme;
