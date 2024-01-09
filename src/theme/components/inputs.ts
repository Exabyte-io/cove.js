import { Theme } from "@mui/material/styles";

const inputs = (theme: Theme, commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minWidth: commonSettings.inputMinWidth,
                    "& .MuiOutlinedInput-input": {
                        paddingTop: theme.spacing(1.5),
                        paddingBottom: theme.spacing(1.5),
                    },
                    "&.MuiInputBase-sizeSmall .MuiOutlinedInput-input": {
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1),
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.MuiInputLabel-outlined": {
                        transform: `translate(14px, ${theme.spacing(1.5)}) scale(1)`,
                    },
                    "&.MuiInputLabel-sizeSmall.MuiInputLabel-outlined": {
                        transform: `translate(14px, ${theme.spacing(1)}) scale(1)`,
                    },
                },
                shrink: {
                    "&.MuiInputLabel-shrink.MuiInputLabel-outlined": {
                        transform: "translate(14px, -0.5em) scale(0.75)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    minWidth: commonSettings.inputMinWidth,
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& .MuiAutoComplete-endAdornment .MuiIconButton-root": {
                        padding: 0,
                    },
                },
            },
        },
    };
};

export default inputs;
