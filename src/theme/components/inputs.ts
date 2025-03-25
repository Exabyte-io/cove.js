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
        standard: {
            paddingTop: "1px",
            paddingBottom: "5px",
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
            marginTop: "16px",
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
        standard: {
            paddingTop: "4px",
            paddingBottom: "5px",
        },
        autoComplete: {
            paddingTop: "5px",
            paddingBottom: "5px",
        },
    },
};

const inputs = (commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: () => ({
                    minWidth: commonSettings.inputMinWidth,
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === "small" &&
                        ownerState.variant !== "standard" && {
                            transform: `translate(14px, ${inputSizes.small.label.translateDown}) scale(1)`,
                        }),
                    // @ts-ignore
                    ...(ownerState.size === "medium" &&
                        ownerState.variant !== "standard" && {
                            transform: `translate(14px, ${inputSizes.medium.label.translateDown}) scale(1)`,
                        }),
                }),
                shrink: ({ ownerState }) => ({
                    ...(ownerState.variant === "standard"
                        ? {
                              transform: "translate(0px, -0.5em) scale(0.75)",
                          }
                        : {
                              transform: "translate(14px, -0.5em) scale(0.75)",
                          }),
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState }) => {
                    return {
                        minWidth: commonSettings.inputMinWidth,
                        "& .MuiInputBase-input": {
                            ...(ownerState.size === "small" &&
                                ownerState.variant === "outlined" && {
                                    paddingTop: inputSizes.small.outlined.paddingTop,
                                    paddingBottom: inputSizes.small.outlined.paddingBottom,
                                }),
                            ...((ownerState.size === "medium" || ownerState.size === undefined) &&
                                ownerState.variant === "outlined" && {
                                    paddingTop: inputSizes.medium.outlined.paddingTop,
                                    paddingBottom: inputSizes.medium.outlined.paddingBottom,
                                }),
                            ...(ownerState.size === "small" &&
                                ownerState.variant === "filled" && {
                                    paddingTop: inputSizes.small.paddingTop,
                                    paddingBottom: inputSizes.small.paddingBottom,
                                }),
                            ...((ownerState.size === "medium" || ownerState.size === undefined) &&
                                ownerState.variant === "filled" && {
                                    paddingTop: inputSizes.medium.paddingTop,
                                    paddingBottom: inputSizes.medium.paddingBottom,
                                }),
                            ...(ownerState.size === "small" &&
                                ownerState.variant === "standard" && {
                                    paddingTop: inputSizes.small.standard.paddingTop,
                                    paddingBottom: inputSizes.small.standard.paddingBottom,
                                }),
                            ...((ownerState.size === "medium" || ownerState.size === undefined) &&
                                ownerState.variant === "standard" && {
                                    paddingTop: inputSizes.medium.standard.paddingTop,
                                    paddingBottom: inputSizes.medium.standard.paddingBottom,
                                }),
                        },
                        "& .MuiInputBase-root": {
                            ...(ownerState.size === "small" &&
                                ownerState.variant === "standard" && {
                                    marginTop: "11px",
                                }),
                            ...(ownerState.size === "medium" &&
                                ownerState.variant === "standard" && {
                                    marginTop: "16px",
                                }),
                        },
                    };
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === "small" && {
                        "& .MuiOutlinedInput-root": {
                            paddingTop: inputSizes.small.autoComplete.paddingTop,
                            paddingBottom: inputSizes.small.autoComplete.paddingBottom,
                        },
                        "& .MuiFilledInput-root.MuiInputBase-sizeSmall": {
                            paddingTop: inputSizes.small.autoComplete.paddingTop,
                            paddingBottom: inputSizes.small.autoComplete.paddingBottom,
                        },
                        "& .MuiInput-underline": {
                            marginTop: inputSizes.small.textField.marginTop,
                        },
                    }),
                    ...(ownerState.size === "medium" && {
                        "& .MuiOutlinedInput-root": {
                            paddingTop: inputSizes.medium.autoComplete.paddingTop,
                            paddingBottom: inputSizes.medium.autoComplete.paddingBottom,
                        },
                        "& .MuiFilledInput-root": {
                            paddingTop: inputSizes.small.autoComplete.paddingTop,
                            paddingBottom: inputSizes.medium.paddingBottom,
                        },
                        "& .MuiInput-underline": {
                            marginTop: inputSizes.medium.textField.marginTop,
                        },
                    }),
                }),
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: () => {
                    return {
                        "& .MuiSelect-select": {
                            paddingTop: inputSizes.medium.outlined.paddingTop,
                            paddingBottom: inputSizes.medium.outlined.paddingBottom,
                        },
                        "& .MuiSelect-select.MuiInputBase-inputSizeSmall": {
                            paddingTop: inputSizes.small.outlined.paddingTop,
                            paddingBottom: inputSizes.small.outlined.paddingBottom,
                        },
                    };
                },
            },
        },
    };
};

export default inputs;
