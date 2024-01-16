import { Theme } from "@mui/material/styles";

// MUI uses fixed pixel values for most of this, so we override them to achieve the desired appearance at different sizes.
const inputSizes = {
    small: {
        paddingTop: "12px",
        paddingBottom: "5px",
        textField: {
            marginTop: "11px",
        },
        chip: {
            height: "23px",
        },
        label: {
            translateDown: "8.5px",
        },
        outlined: {
            paddingTop: "8.5px",
            paddingBottom: "8.5px",
        },
        autoComplete: {
            paddingTop: "6px",
            paddingBottom: "6px",
        },
    },
    medium: {
        paddingTop: "20px",
        paddingBottom: "5px",
        textField: {
            marginTop: "11px",
        },
        chip: {
            height: "23px",
        },
        label: {
            translateDown: "13px",
        },
        outlined: {
            paddingTop: "12.5px",
            paddingBottom: "12.5px",
        },
        autoComplete: {
            paddingTop: "5px",
            paddingBottom: "5px",
        },
    },
};

const inputs = (theme: Theme, commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    minWidth: commonSettings.inputMinWidth,
                    "& .MuiInputBase-input": {
                        // Check for size and variant
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "outlined" && {
                                paddingTop: inputSizes.small.outlined.paddingTop,
                                paddingBottom: inputSizes.small.outlined.paddingBottom,
                            }),
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.small.paddingTop,
                                paddingBottom: inputSizes.small.paddingBottom,
                            }),
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "standard" && {
                                marginTop: inputSizes.small.textField.marginTop,
                            }),
                        ...(ownerState.size === "medium" &&
                            ownerState.variant === "outlined" && {
                                paddingTop: inputSizes.medium.outlined.paddingTop,
                                paddingBottom: inputSizes.medium.outlined.paddingBottom,
                            }),
                        ...(ownerState.size === "medium" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.medium.paddingTop,
                                paddingBottom: inputSizes.medium.paddingBottom,
                            }),

                        "& .MuiChip-root": {
                            height: inputSizes.small.chip.height,
                        },
                    },
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === "normal" && {
                        transform: `translate(14px, ${inputSizes.medium.label.translateDown}) scale(1)`,
                    }),
                    ...(ownerState.size === "small" && {
                        transform: `translate(14px, ${inputSizes.small.label.translateDown}) scale(1)`,
                    }),
                }),
                shrink: {
                    transform: "translate(14px, -0.5em) scale(0.75)",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    minWidth: commonSettings.inputMinWidth,
                    ...(ownerState.size === "small" && {
                        marginTop: inputSizes.small.textField.marginTop,
                    }),
                    ".MuiInputBase-input": {
                        ...(ownerState.size === "medium" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.medium.paddingTop,
                                paddingBottom: inputSizes.medium.paddingBottom,
                            }),
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.small.paddingTop,
                                paddingBottom: inputSizes.small.paddingBottom,
                            }),
                    },
                }),
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    "& .MuiInputBase-root": {
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "outlined" && {
                                paddingTop: inputSizes.small.autoComplete.paddingTop,
                                paddingBottom: inputSizes.small.autoComplete.paddingBottom,
                            }),
                        ...(ownerState.size === "small" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.small.autoComplete.paddingTop,
                                paddingBottom: inputSizes.small.autoComplete.paddingBottom,
                            }),
                        ...(ownerState.size === "medium" &&
                            ownerState.variant === "outlined" && {
                                paddingTop: inputSizes.medium.autoComplete.paddingTop,
                                paddingBottom: inputSizes.medium.autoComplete.paddingBottom,
                            }),
                        ...(ownerState.size === "medium" &&
                            ownerState.variant === "filled" && {
                                paddingTop: inputSizes.medium.autoComplete.paddingTop,
                                paddingBottom: inputSizes.medium.autoComplete.paddingBottom,
                            }),
                    },
                }),
            },
        },
    };
};

export default inputs;
