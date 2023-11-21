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
                props: { variant: "exapurple-contained" },
                style: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: theme.shadows[2],

                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        boxShadow: theme.shadows[4],
                    },
                    "&.Mui-disabled": {
                        opacity: 0.8,
                    },
                },
            },
            {
                props: { variant: "exapurple-text" },
                style: {
                    color: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: "#3F2A9811", // exapurple-translucent
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.text.disabled,
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
