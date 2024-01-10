import { Theme } from "@mui/material/styles";

const oldTypography = (theme: Theme): Partial<Theme["typography"]> => {
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

export default oldTypography;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Typography = (theme: Theme): Partial<Theme["typography"]> => {
    return {
        fontFamily: ["Roboto", "-apple-system", "sans-serif"].join(","),
        body1: {
            fontSize: 12,
        },
    };
};
