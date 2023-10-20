import { Theme } from "@mui/material/styles";

const inputs = (commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            variants: [
                {
                    props: { size: "medium" },
                    style: {
                        fontSize: "14px",
                    },
                },
                {
                    props: { size: "small" },
                    style: {
                        paddingTop: "3.5px",
                        paddingBottom: "3.5px",
                        fontSize: "13px",
                        minWidth: commonSettings.inputMinWidth,
                    },
                },
            ],
        },
        MuiInputLabel: {
            variants: [
                {
                    props: { size: "small" },
                    style: {
                        fontSize: "13px",
                        lineHeight: "13px",
                    },
                },
            ],
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
                        paddingTop: "3.5px",
                        paddingBottom: "3.5px",
                    },
                },
            },
        },
    };
};

export default inputs;
