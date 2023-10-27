import { Theme } from "@mui/material/styles";

const tooltips = (): Theme["components"] => {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "11px",
                },
            },
        },
    };
};

export default tooltips;
