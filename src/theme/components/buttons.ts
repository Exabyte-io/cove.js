import { Theme } from "@mui/material/styles";

const buttons = (theme: Theme) => {
    const config = {
        variants: [
            {
                props: { size: "large" },
                style: {
                    fontSize: "15px",
                },
            },
            {
                props: { size: "medium" },
                style: {
                    fontSize: "14px",
                },
            },
            {
                props: { size: "small" },
                style: {
                    fontSize: "13px",
                },
            },
            {
                props: { variant: "exablue-contained" },
                style: {
                    backgroundColor: theme.palette.primary.dark,
                    color: "white",
                    boxShadow: theme.shadows[2],

                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: theme.shadows[4],
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.primary.contrastText,
                        opacity: 0.8,
                    },
                },
            },
            {
                props: { variant: "selected" },
                style: {
                    backgroundColor: "rgba(16,86,190,0.1)",
                    color: theme.palette.primary.main,
                    boxShadow: theme.shadows[2],
                    padding: "8px 22px",

                    "&:hover": {
                        backgroundColor: "rgba(16,86,190,0.2)",
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.primary.main,
                        boxShadow: "none",
                    },
                },
            },
        ],
    };

    return {
        MuiButton: config,
        MuiToggleButton: config,
    };
};

export default buttons;
