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
                        paddingTop: "4px",
                        paddingBottom: "3px",
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
    };
};

export default inputs;
