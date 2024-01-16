import { Theme } from "@mui/material/styles";

const defaultRootStyles = {
    minWidth: "fit-content",
    height: "fit-content",
};

type SizeConfig = {
    height: string;
    icon: string;
    startIcon: string;
    paddingX?: number;
};

const getButtonSizeStyles = (
    theme: Theme,
    config: SizeConfig,
    { includePadding = true, fixedHeight = true },
) => {
    return {
        ...(fixedHeight && config.height && { height: config.height }),
        ...(includePadding &&
            config.paddingX && {
                paddingLeft: theme.spacing(config.paddingX),
                paddingRight: theme.spacing(config.paddingX),
            }),
        "& .MuiSvgIcon-root": {
            fontSize: config.icon,
        },
        // start and end icons should be closer to the text font size
        "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
            fontSize: config.startIcon,
        },
    };
};

const buttons = (
    theme: Theme,
    commonSettings: {
        sizes: {
            button: {
                small: SizeConfig;
                medium: SizeConfig;
                large: SizeConfig;
            };
        };
    },
) => {
    const buttonSizeConfig = commonSettings.sizes.button;
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    ...defaultRootStyles,
                },
                sizeSmall: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.small, {
                        includePadding: false,
                    }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.medium, {
                        includePadding: false,
                    }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.large, {
                        includePadding: false,
                    }),
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    ...defaultRootStyles,
                    // b/c of https://github.com/material-components/material-components-web/issues/4894
                    whiteSpace: "nowrap",
                },
                sizeSmall: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.small, { includePadding: true }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.medium, {
                        includePadding: true,
                    }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.large, { includePadding: true }),
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    ...defaultRootStyles,
                },
                sizeSmall: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.small, {
                        includePadding: false,
                        fixedHeight: false,
                    }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.medium, {
                        includePadding: false,
                        fixedHeight: false,
                    }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(theme, buttonSizeConfig.large, {
                        includePadding: false,
                        fixedHeight: false,
                    }),
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    ...defaultRootStyles,
                },
            },
        },
    };
};

export default buttons;
