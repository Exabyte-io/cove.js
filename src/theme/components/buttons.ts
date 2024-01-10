import { Theme } from "@mui/material/styles";

const buttons = (
    theme: Theme,
    commonSettings: {
        sizes: {
            button: {
                height: {
                    small: string;
                    medium: string;
                    large: string;
                };
                icon: {
                    small: string;
                    medium: string;
                    large: string;
                };
                startIcon: {
                    small: string;
                    medium: string;
                    large: string;
                };
            };
        };
    },
) => {
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    minWidth: "fit-content",
                    height: "fit-content",
                    "&.MuiToggleButton-sizeSmall": {
                        height: commonSettings.sizes.button.height.small,
                    },
                    "&.MuiToggleButton-sizeMedium": {
                        height: commonSettings.sizes.button.height.medium,
                    },
                    "&.MuiToggleButton-sizeLarge": {
                        height: commonSettings.sizes.button.height.large,
                    },
                    // small/medium icons
                    "&.MuiToggleButton-root .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.medium,
                    },
                    "&.MuiToggleButton-sizeLarge .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.large,
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
                    // fixed heights for all sizes
                    "&.MuiButton-sizeSmall": {
                        height: commonSettings.sizes.button.height.small,
                    },
                    "&.MuiButton-sizeMedium": {
                        height: commonSettings.sizes.button.height.medium,
                    },
                    "&.MuiButton-sizeLarge": {
                        height: commonSettings.sizes.button.height.large,
                    },
                    // change icon size to prevent icon from increasing button size
                    "&.MuiButton-root .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.medium,
                    },
                    "&.MuiButton-sizeSmall .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.small,
                    },
                    "&.MuiButton-sizeSmall .MuiButton-startIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.small,
                    },
                    "&.MuiButton-sizeSmall .MuiButton-endIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.small,
                    },
                    "&.MuiButton-sizeMedium .MuiButton-startIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.medium,
                    },
                    "&.MuiButton-sizeMedium .MuiButton-endIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.medium,
                    },
                    "&.MuiButton-sizeLarge .MuiButton-startIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.large,
                    },
                    "&.MuiButton-sizeLarge .MuiButton-endIcon .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.startIcon.large,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    minWidth: "fit-content",
                    height: "fit-content",
                    "&.MuiIconButton-sizeSmall .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.small,
                    },
                    "&.MuiIconButton-sizeMedium .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.medium,
                    },
                    "&.MuiIconButton-sizeLarge .MuiSvgIcon-root": {
                        fontSize: commonSettings.sizes.button.icon.large,
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
