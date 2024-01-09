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

    const buttonPaddings = {
        unbordered: {
            small: {
                paddingTop: `calc(${theme.spacing(1)} + 1px)`,
                paddingBottom: `calc(${theme.spacing(1)} + 1px)`,
                paddingLeft: `calc(${theme.spacing(1.5)} + 1px)`,
                paddingRight: `calc(${theme.spacing(1.5)} + 1px)`,
            },
            medium: {
                paddingTop: `calc(${theme.spacing(1.5)} + 1px)`,
                paddingBottom: `calc(${theme.spacing(1.5)} + 1px)`,
                paddingLeft: `calc(${theme.spacing(2)} + 1px)`,
                paddingRight: `calc(${theme.spacing(2)} + 1px)`,
            },
            large: {
                paddingTop: `calc(${theme.spacing(2)} + 1px)`,
                paddingBottom: `calc(${theme.spacing(2)} + 1px)`,
                paddingLeft: `calc(${theme.spacing(2.5)} + 1px)`,
                paddingRight: `calc(${theme.spacing(2.5)} + 1px)`,
            },
        },
        bordered: {
            small: {
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
            },
            medium: {
                paddingTop: theme.spacing(1.5),
                paddingBottom: theme.spacing(1.5),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            },
            large: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
                paddingLeft: theme.spacing(2.5),
                paddingRight: theme.spacing(2.5),
            },
        },
    };

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
                    // small sizing
                    "&.MuiButton-sizeSmall": {
                        lineHeight: defaultLineHeight,
                    },
                    "&.MuiButton-outlined.MuiButton-sizeSmall": {
                        ...buttonPaddings.bordered.small,
                    },
                    "&.MuiButton-contained.MuiButton-sizeSmall": {
                        ...buttonPaddings.unbordered.small,
                    },
                    "&.MuiButton-text.MuiButton-sizeSmall": {
                        ...buttonPaddings.unbordered.small,
                    },
                    // medium sizing
                    "&.MuiButton-sizeMedium": {
                        lineHeight: defaultLineHeight,
                    },
                    "&.MuiButton-outlined.MuiButton-sizeMedium": {
                        ...buttonPaddings.bordered.medium,
                    },
                    "&.MuiButton-contained.MuiButton-sizeMedium": {
                        ...buttonPaddings.unbordered.medium,
                    },
                    "&.MuiButton-text.MuiButton-sizeMedium": {
                        ...buttonPaddings.unbordered.medium,
                    },
                    // large sizing
                    "&.MuiButton-sizeLarge": {
                        lineHeight: largeLineHeight,
                    },
                    "&.MuiButton-outlined.MuiButton-sizeLarge": {
                        ...buttonPaddings.bordered.large,
                    },
                    "&.MuiButton-contained.MuiButton-sizeLarge": {
                        ...buttonPaddings.unbordered.large,
                    },
                    "&.MuiButton-text.MuiButton-sizeLarge": {
                        ...buttonPaddings.unbordered.large,
                    },
                    // small/medium icons
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
                        ...buttonPaddings.bordered.small,
                    },
                    "&.MuiToggleButton-sizeMedium": {
                        ...buttonPaddings.bordered.medium,
                    },
                    "&.MuiToggleButton-sizeLarge": {
                        ...buttonPaddings.bordered.large,
                    },
                    // small/medium icons
                    "&.MuiToggleButton-root .MuiSvgIcon-root": {
                        fontSize: defaultLineHeight,
                        lineHeight: defaultLineHeight,
                    },
                    // large icons
                    "&.MuiToggleButton-sizeLarge .MuiSvgIcon-root": {
                        fontSize: largeLineHeight,
                        lineHeight: largeLineHeight,
                    },
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    height: "fit-content",
                },
            },
        },
    };
};

export default buttons;
