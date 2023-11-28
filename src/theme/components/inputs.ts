import { Theme } from "@mui/material/styles";

const inputs = (commonSettings: { inputMinWidth: string }): Theme["components"] => {
    return {
        MuiInputBase: {
            variants: [
                {
                    props: { size: "small" },
                    style: {
                        paddingTop: "3.5px",
                        paddingBottom: "3.5px",
                        fontSize: "13px",
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
                    "& .MuiAutocomplete-tag": { margin: "0 !important" },
                },
            },
        },
    };
};

export default inputs;
