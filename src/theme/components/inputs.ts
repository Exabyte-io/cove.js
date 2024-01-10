import { Theme } from "@mui/material/styles";

const inputs = (theme: Theme, commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minWidth: commonSettings.inputMinWidth,
                    // Outlined variant
                    "& .MuiOutlinedInput-input": {
                        paddingTop: `calc(${theme.spacing(1.5)} + 0.5px)`,
                        paddingBottom: `calc(${theme.spacing(1.5)} + 0.5px)`,
                    },
                    "&.MuiInputBase-sizeSmall .MuiOutlinedInput-input": {
                        paddingTop: `calc(${theme.spacing(1)} + 0.5px)`,
                        paddingBottom: `calc(${theme.spacing(1)} + 0.5px)`,
                    },
                    // Underlined variant
                    "&.MuiInputBase-sizeSmall.MuiInput-underline": {
                        marginTop: "11px",
                    },
                    // Filled variant
                    "& .MuiFilledInput-input": {
                        paddingTop: "18px",
                        paddingBottom: "7px",
                    },
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: "14px",
                        paddingBottom: "3px",
                    },
                    // Chips
                    "& .MuiInputBase-input .MuiChip-root": {
                        height: "23px",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.MuiInputLabel-sizeSmall": {
                        transform: `translate(14px, 8px) scale(1)`,
                    },
                    "&.MuiInputLabel-sizeMedium": {
                        transform: `translate(14px, 13px) scale(1)`,
                    },
                },
                shrink: {
                    "&.MuiInputLabel-shrink.MuiInputLabel-root": {
                        transform: "translate(14px, -0.5em) scale(0.75)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    minWidth: commonSettings.inputMinWidth,
                    "&.MuiInputBase-sizeSmall.MuiInput-underline": {
                        marginTop: "11px",
                    },
                    "& .MuiFilledInput-input": {
                        paddingTop: "18px",
                        paddingBottom: "7px",
                    },
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: "14px",
                        paddingBottom: "3px",
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& .MuiFilledInput-root": {
                        paddingTop: "11px",
                    },
                    "& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
                        paddingTop: "5px",
                        paddingBottom: "5px",
                    },
                    "&.MuiInputBase-sizeSmall .MuiFilledInput-input": {
                        paddingTop: "14px",
                        paddingBottom: "3px",
                    },
                    "& .MuiInputBase-sizeSmall.MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
                        paddingTop: "6px",
                        paddingBottom: "6px",
                    },
                },
            },
        },
    };
};

export default inputs;
