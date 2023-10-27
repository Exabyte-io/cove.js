import { Theme } from "@mui/material/styles";

const tooltips = (): Theme["components"] => {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "13px",
                },
            },
        },
    };
};

export default tooltips;
