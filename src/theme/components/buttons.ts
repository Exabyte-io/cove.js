import { Theme } from "@mui/material/styles";

type SizeConfig = {
    height: string;
    icon: string;
    startIcon: string;
    paddingX?: string;
};

const getButtonSizeStyles = (config: SizeConfig, { includePadding = true, fixedHeight = true }) => {
    return {
        ...(fixedHeight && config.height && { height: config.height }),
        ...(includePadding &&
            config.paddingX && {
                paddingLeft: config.paddingX,
                paddingRight: config.paddingX,
            }),
        "& .MuiSvgIcon-root": {
            fontSize: config.icon,
        },
        "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
            fontSize: config.startIcon,
        },
    };
};

const defaultRootStyles = {
    minWidth: "fit-content",
    height: "fit-content",
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
                    ...getButtonSizeStyles(buttonSizeConfig.small, { includePadding: false }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(buttonSizeConfig.medium, { includePadding: false }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(buttonSizeConfig.large, { includePadding: false }),
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
                    ...getButtonSizeStyles(buttonSizeConfig.small, { includePadding: true }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(buttonSizeConfig.medium, { includePadding: true }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(buttonSizeConfig.large, { includePadding: true }),
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    ...defaultRootStyles,
                },
                sizeSmall: {
                    ...getButtonSizeStyles(buttonSizeConfig.small, {
                        includePadding: false,
                        fixedHeight: false,
                    }),
                },
                sizeMedium: {
                    ...getButtonSizeStyles(buttonSizeConfig.medium, {
                        includePadding: false,
                        fixedHeight: false,
                    }),
                },
                sizeLarge: {
                    ...getButtonSizeStyles(buttonSizeConfig.large, {
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
