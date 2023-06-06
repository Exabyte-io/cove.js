import { Theme } from "@mui/material/styles";

const Typography = (theme: Theme) => {
    return {
        fontFamily: ["Roboto", "-apple-system", "sans-serif"].join(","),
        h1: {
            fontSize: "96px",
            color: theme.palette.text.primary,
        },
        h2: {
            fontSize: "60px",
            color: theme.palette.text.primary,
        },
        h3: {
            fontSize: "48px",
            color: theme.palette.text.primary,
        },
        h4: {
            fontSize: "34px",
            color: theme.palette.text.primary,
        },
        h5: {
            fontSize: "24px",
            color: theme.palette.text.primary,
        },
        h6: {
            fontSize: "20px",
            color: theme.palette.text.primary,
        },
        subtitle1: {
            fontSize: "16px",
            color: theme.palette.text.primary,
        },
        subtitle2: {
            fontSize: "14px",
            color: theme.palette.text.secondary,
        },
        body1: {
            fontSize: "16px",
            color: theme.palette.text.primary,
        },
        body2: {
            fontSize: "14px",
            color: theme.palette.text.secondary,
        },
        overline: {
            fontSize: "12px",
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "12px",
            color: theme.palette.text.secondary,
        },
        button: {
            fontSize: "14px",
        },
    };
};

export default Typography;
