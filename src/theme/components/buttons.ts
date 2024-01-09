import { Theme } from "@mui/material/styles";

const buttons = (
    theme: Theme,
    commonSettings: {
        sizes: {
            input: {
                defaultLineHeight: string;
                largeLineHeight: string;
            };
        };
    },
) => {
    const { defaultLineHeight, largeLineHeight } = commonSettings.sizes.input;

    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    minWidth: "fit-content",
                    height: "fit-content",
                    "&.MuiIconButton-sizeSmall": {
                        padding: `calc(${theme.spacing(1)} - .5px)`,
                    },
                    "&.MuiIconButton-sizeMedium": {
                        padding: `calc(${theme.spacing(1.5)} - .5px)`,
                    },
                    "&.MuiIconButton-sizeLarge": {
                        padding: `calc(${theme.spacing(2)} - 5px)`,
                    },
                    "&.MuiIconButton-root .MuiSvgIcon-root": {
                        fontSize: "24px",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: "fit-content",
                    height: "fit-content",
                    // b/c of https://github.com/material-components/material-components-web/issues/4894
                    whiteSpace: "nowrap",
                    "&.MuiButton-sizeSmall": {
                        lineHeight: defaultLineHeight,
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1),
                        paddingLeft: theme.spacing(1.5),
                        paddingRight: theme.spacing(1.5),
                    },
                    "&.MuiButton-contained.MuiButton-sizeSmall": {
                        paddingTop: `calc(${theme.spacing(1)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(1)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(1.5)} + 1px)`,
                    },
                    "&.MuiButton-text.MuiButton-sizeSmall": {
                        paddingTop: `calc(${theme.spacing(1)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(1)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(1.5)} + 1px)`,
                    },
                    "&.MuiButton-sizeMedium": {
                        lineHeight: defaultLineHeight,
                        paddingTop: theme.spacing(1.5),
                        paddingBottom: theme.spacing(1.5),
                        paddingLeft: theme.spacing(2),
                        paddingRight: theme.spacing(2),
                    },
                    "&.MuiButton-contained.MuiButton-sizeMedium": {
                        paddingTop: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(2)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(2)} + 1px)`,
                    },
                    "&.MuiButton-text.MuiButton-sizeMedium": {
                        paddingTop: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(1.5)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(2)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(2)} + 1px)`,
                    },
                    "&.MuiButton-sizeLarge": {
                        lineHeight: largeLineHeight,
                        paddingTop: theme.spacing(2),
                        paddingBottom: theme.spacing(2),
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5),
                    },
                    "&.MuiButton-contained.MuiButton-sizeLarge": {
                        paddingTop: `calc(${theme.spacing(2)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(2)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(2.5)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(2.5)} + 1px)`,
                    },
                    "&.MuiButton-text.MuiButton-sizeLarge": {
                        paddingTop: `calc(${theme.spacing(2)} + 1px)`,
                        paddingBottom: `calc(${theme.spacing(2)} + 1px)`,
                        paddingLeft: `calc(${theme.spacing(2.5)} + 1px)`,
                        paddingRight: `calc(${theme.spacing(2.5)} + 1px)`,
                    },
                    // small and medium icons
                    "&.MuiButton-root .MuiSvgIcon-root": {
                        fontSize: defaultLineHeight,
                        lineHeight: defaultLineHeight,
                    },
                    // large icons
                    "&.MuiButton-sizeLarge .MuiSvgIcon-root": {
                        fontSize: largeLineHeight,
                        lineHeight: largeLineHeight,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    minWidth: "fit-content",
                    height: "fit-content",
                    "&.MuiToggleButton-sizeSmall": {
                        lineHeight: defaultLineHeight,
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1),
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.primary.main,
                        boxShadow: "none",
                    },
                },
            },
        },
    };
};

export default buttons;
