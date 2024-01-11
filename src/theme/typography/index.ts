import { Theme } from "@mui/material/styles";

const Typography = (theme: Theme): Partial<Theme["typography"]> => {
    return {
        fontFamily: ["Roboto", "-apple-system", "sans-serif"].join(","),
        subtitle2: {
            color: theme.palette.text.secondary,
        },
        body2: {
            color: theme.palette.text.secondary,
        },
        caption: {
            color: theme.palette.text.secondary,
        },
    };
};
export default Typography;
