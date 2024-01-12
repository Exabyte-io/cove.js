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
                root: {
                    minWidth: commonSettings.inputMinWidth,
                    // outlined variant medium
                    "& .MuiOutlinedInput-input": {
                        paddingTop: inputSizes.medium.outlined.paddingTop,
                        paddingBottom: inputSizes.medium.outlined.paddingBottom,
                    },
                    // outlined variant small
                    "&.MuiInputBase-sizeSmall .MuiOutlinedInput-input": {
                        paddingTop: inputSizes.small.outlined.paddingTop,
                        paddingBottom: inputSizes.small.outlined.paddingBottom,
                    },
                    // filled variant medium
                    "& .MuiFilledInput-input": {
                        paddingTop: inputSizes.medium.paddingTop,
                        paddingBottom: inputSizes.medium.paddingBottom,
                    },
                    // filled variant small
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: inputSizes.small.paddingTop,
                        paddingBottom: inputSizes.small.paddingBottom,
                    },
                    // underlined variant small
                    "&.MuiInputBase-sizeSmall.MuiInput-underline": {
                        marginTop: inputSizes.small.textField.marginTop,
                    },
                    // Chips
                    "& .MuiInputBase-input .MuiChip-root": {
                        height: inputSizes.small.chip.height,
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    // all variants medium
                    "&.MuiInputLabel-sizeMedium": {
                        transform: `translate(14px, ${inputSizes.medium.label.translateDown}) scale(1)`,
                    },
                    // all variants small
                    "&.MuiInputLabel-sizeSmall": {
                        transform: `translate(14px, ${inputSizes.small.label.translateDown}) scale(1)`,
                    },
                },
                shrink: {
                    // all variants all sizes
                    "&.MuiInputLabel-shrink.MuiInputLabel-root": {
                        // use 0.5em to achieve better behavior on font size changes
                        transform: "translate(14px, -0.5em) scale(0.75)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    minWidth: commonSettings.inputMinWidth,
                    // standard variant small
                    "&.MuiInputBase-sizeSmall.MuiInput-underline": {
                        marginTop: inputSizes.small.textField.marginTop,
                    },
                    // filled variant medium
                    "& .MuiFilledInput-input": {
                        paddingTop: inputSizes.medium.paddingTop,
                        paddingBottom: inputSizes.medium.paddingBottom,
                    },
                    // filled variant small
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: inputSizes.small.paddingTop,
                        paddingBottom: inputSizes.small.paddingBottom,
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    // default small
                    "& .MuiInputBase-sizeSmall.MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
                        paddingTop: inputSizes.small.autoComplete.paddingTop,
                        paddingBottom: inputSizes.small.autoComplete.paddingBottom,
                    },
                    // default medium
                    "& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
                        paddingTop: inputSizes.medium.autoComplete.paddingTop,
                        paddingBottom: inputSizes.medium.autoComplete.paddingBottom,
                    },
                    // filled variant small
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: inputSizes.small.paddingTop,
                        paddingBottom: inputSizes.small.paddingBottom,
                    },
                    // filled variant medium
                    "& .MuiFilledInput-root": {
                        paddingTop: inputSizes.medium.textField.marginTop,
                    },
                },
            },
        },
    };
};

export default inputs;
